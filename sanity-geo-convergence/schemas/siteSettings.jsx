import { defineType, defineField } from 'sanity'
import React, { useState } from 'react'
import { TextInput, Button, Stack, Text, Box } from '@sanity/ui'
import { set, unset } from 'sanity'

// Custom input component that takes a plaintext password, hashes it using SHA-256,
// and saves the hash in the document.
export function PasswordHashInput(props) {
  const { onChange, value, elementProps } = props
  const [plainPassword, setPlainPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleUpdate = async () => {
    if (!plainPassword.trim()) {
      onChange(unset())
      setMessage('Password field cleared')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    try {
      const msgBuffer = new TextEncoder().encode(plainPassword)
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
      const hashArray = Array.from(new Uint8Array(hashBuffer))
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')

      onChange(set(hashHex))
      setPlainPassword('')
      setMessage('Password updated successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error(err)
      setMessage('Error hashing password')
    }
  }

  return (
    <Stack space={3}>
      <TextInput
        {...elementProps}
        type="password"
        placeholder="Type new password here..."
        value={plainPassword}
        onChange={(event) => setPlainPassword(event.currentTarget.value)}
      />
      <Box>
        <Button
          text="Update Password"
          tone="primary"
          onClick={handleUpdate}
        />
      </Box>
      {value ? (
        <Text size={1} tone="positive">
          ✓ Password is active (Hash: {value.substring(0, 10)}...)
        </Text>
      ) : (
        <Text size={1} tone="critical">
          ✗ No password hash configured. Enter a password above.
        </Text>
      )}
      {message && (
        <Text size={1} tone="caution">
          {message}
        </Text>
      )}
    </Stack>
  )
}

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'passwordEnabled',
      title: 'Enable Password Protection',
      description: 'Turn this on to enable password protection for the staging/preview site.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'passwordHash',
      title: 'Site Password',
      description: 'Enter a new password below and click Update Password to secure the site.',
      type: 'string',
      components: {
        input: PasswordHashInput,
      },
    }),
  ],
})

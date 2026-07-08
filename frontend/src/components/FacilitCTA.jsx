import {useState} from 'react'
import {submitContactForm} from '../lib/api'
import {urlFor} from '../lib/sanity'
import {PageToast} from './UI/PageLoader'
import Button from './UI/Button'

const WEB3FORMS_KEY = '53f590f5-bc94-49a5-83d6-7ebf2f7b4e6b'

export default function FacilitCTA({
  sectionTitle,
  subTitle,
  namePlaceholder,
  lastNamePlaceholder,
  emailPlaceholder,
  phonePlaceholder,
  messagePlaceholder,
  submitBtnText,
  backgroundImage,
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData((current) => ({...current, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const web3FormsPayload = {
        access_key: WEB3FORMS_KEY,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: `New FacilitEase Form Submission from ${formData.firstName} ${formData.lastName}`,
      }

      const [, web3Res] = await Promise.all([
        submitContactForm(formData),
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {'Content-Type': 'application/json', Accept: 'application/json'},
          body: JSON.stringify(web3FormsPayload),
        }).then((response) => response.json()),
      ])

      if (web3Res.success !== true) {
        throw new Error(web3Res.message || 'Email delivery failed.')
      }

      setFormData({firstName: '', lastName: '', email: '', phone: '', message: ''})
      setStatus({type: 'success', message: 'Thank you. Your message has been sent.'})
    } catch (error) {
      console.error(error)
      setStatus({type: 'error', message: 'Something went wrong. Please try again later.'})
    } finally {
      setLoading(false)
    }
  }

  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 9, 65, 0.9), rgba(0, 9, 65, 0.9)), url(${urlFor(backgroundImage)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined

  return (
    <section className="bg-[#000941] px-6 py-16 text-white sm:px-8 md:py-24 lg:px-14" style={sectionStyle}>
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-[620px]">
          {sectionTitle && (
            <h2 className="font-Web text-3xl font-bold leading-tight md:text-4xl xl:text-[50px]">
              {sectionTitle}
            </h2>
          )}
          {subTitle && (
            <p className="font-Inter mt-5 text-[18px] sm:text-[20px] leading-8 text-white/75">
              {subTitle}
            </p>
          )}
        </div>

        {status && <PageToast message={status.message} type={status.type} />}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={namePlaceholder}
              aria-label={namePlaceholder}
              required
              className="font-Inter h-[55px] rounded-xl bg-white px-5 text-base text-slate-900 outline-none transition-shadow placeholder:text-slate-500 focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={lastNamePlaceholder}
              aria-label={lastNamePlaceholder}
              required
              className="font-Inter h-[55px] rounded-xl bg-white px-5 text-base text-slate-900 outline-none transition-shadow placeholder:text-slate-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={emailPlaceholder}
            aria-label={emailPlaceholder}
            required
            className="font-Inter h-[55px] rounded-xl bg-white px-5 text-base text-slate-900 outline-none transition-shadow placeholder:text-slate-500 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={phonePlaceholder}
            aria-label={phonePlaceholder}
            className="font-Inter h-[55px] rounded-xl bg-white px-5 text-base text-slate-900 outline-none transition-shadow placeholder:text-slate-500 focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={messagePlaceholder}
            aria-label={messagePlaceholder}
            required
            rows={5}
            className="font-Inter min-h-[170px] resize-y rounded-xl bg-white px-5 py-4 text-base text-slate-900 outline-none transition-shadow placeholder:text-slate-500 focus:ring-2 focus:ring-blue-400"
          />
          {submitBtnText && (
            <div>
              <Button type="submit" size="sm" disabled={loading}>
                {loading ? submitBtnText : submitBtnText}
              </Button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

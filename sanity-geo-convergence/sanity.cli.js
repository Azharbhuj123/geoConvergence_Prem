import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'gino2rbl',
    dataset: 'production'
  },
  deployment: {
    appId: 'gd8ntsz7djg2k9mwfc7ha3j4',
    autoUpdates: true,
  }
})

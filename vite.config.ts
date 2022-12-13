import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: ['**/bank-integrations/**', '**/BankIntegrationService.ts', '**/index.ts', '**/node_modules/**'],
    coverage: {
      provider: 'istanbul' // or 'c8'
    },
  },
})

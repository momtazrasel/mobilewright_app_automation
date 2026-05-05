import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,

  use: {
    platform: 'android',
    device: {
      provider: 'emulator'
    },
    buildPath: './app/app-debug.apk'
  },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html' }]
  ]
});
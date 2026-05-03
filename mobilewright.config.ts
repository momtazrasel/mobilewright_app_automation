import { defineConfig } from 'mobilewright';

export default defineConfig({
  platform: 'android',
  bundleId: 'com.example.myapp',
  deviceName: /Pixel 4/,
  installApps: ['./apps/myapp.apk'],
  testDir: './tests',
  reporter: 'html',
  timeout: 30000,
});

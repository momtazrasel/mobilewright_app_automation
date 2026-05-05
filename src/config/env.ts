import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  appPath: process.env.APP_PATH!,
  env: process.env.ENV!,
  username: process.env.USERNAME!,
  password: process.env.PASSWORD!
};
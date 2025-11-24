import { config } from "dotenv";

config({ path: `./.env.${process.env.NODE_ENV || "development"}.local` });

// Exports for environment variables
export const {
  PORT,
  NODE_ENV,
  MONGO_URI,
  REDIS_HOST,
  REDIS_PORT,
  JWT_SECRET,
  FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
} = process.env;

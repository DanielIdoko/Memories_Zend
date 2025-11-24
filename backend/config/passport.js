import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import FacebookStrategy from "passport-facebook";
import AppleStrategy from "passport-apple";
import { User } from "../models";
import { generateToken } from "../utils/jwt";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "./env.config";

// Serialize/deserialize
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ email: profile.emails[0].value });
        if (!user) {
          user = await User.create({
            username: profile.displayName,
            email: profile.emails[0].value,
            oauthProvider: "google",
            avatarUrl: profile.photos[0]?.value,
          });
        }
        const token = generateToken(user);
        return done(null, { user, token });
      } catch (err) {
        done(err, null);
      }
    }
  )
);

// Facebook OAuth
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "emails", "name", "picture.type(large)"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        let user = await User.findOne({ email });
        if (!user) {
          user = await User.create({
            name: `${profile.name.givenName} ${profile.name.familyName}`,
            email,
            oauthProvider: "facebook",
            avatarUrl: profile.photos[0].value,
          });
        }
        const token = generateToken(user);
        return done(null, { user, token });
      } catch (err) {
        done(err, null);
      }
    }
  )
);

// Apple OAuth (simpler version)
passport.use(
  new AppleStrategy(
    {
      clientID: process.env.APPLE_CLIENT_ID,
      teamID: process.env.APPLE_TEAM_ID,
      keyID: process.env.APPLE_KEY_ID,
      privateKeyLocation: process.env.APPLE_PRIVATE_KEY_PATH,
      callbackURL: "/auth/apple/callback",
      passReqToCallback: false,
    },
    async (accessToken, refreshToken, idToken, profile, done) => {
      try {
        const email = profile.email;
        let user = await User.findOne({ email });
        if (!user) {
          user = await User.create({
            name: profile.name || "Apple User",
            email,
            oauthProvider: "apple",
          });
        }
        const token = generateToken(user);
        return done(null, { user, token });
      } catch (err) {
        done(err, null);
      }
    }
  )
);

export { passport };

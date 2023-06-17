const router = require("express").Router()
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "1024814740233-pp5c1bso2pc59lsc06qh116vltke8sff.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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"

const passport = require("passport")

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.serializeUser((user, done)=> {
    done(null, user)
 
})


passport.serializeUser((user, done)=> {
    done(null, user)
})



module.exports = router
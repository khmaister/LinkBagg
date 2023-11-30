const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    //options for google strategy install
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        console.log('passport callback fired');
        console.log(profile);
    }
    )
)
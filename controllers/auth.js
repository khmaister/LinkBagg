var express = require('express');
var router = express.Router();

//auth login
router.get('/login', (req, res) => {
    res.render('login')
});

//auth logout
router.get('/logout', (req, res) => {
    res.send('Logging out.')
});

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//callback route for google to send to
router.get('/google/redirect', passport.authenticat('google'), (req, res) => {
    res.send('Callback uri');
});



module.exports = router;
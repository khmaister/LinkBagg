const router =require('express').Router();

router.get('/',async (req, res) => {
    res.render('user');
});

module.exports = router;
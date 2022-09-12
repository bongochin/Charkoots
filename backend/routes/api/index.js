const router = require('express').Router();
const { restoreUser } = require('../../utils/auth')
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.get("/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
        'XSRF-Token': csrfToken
    });
});

// MIDDLEWARES
router.use(restoreUser)

// ROUTERS
router.use('/session', sessionRouter);
router.use('/users', usersRouter);


router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;

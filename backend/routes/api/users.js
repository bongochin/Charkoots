const express = require('express')
const router = express.Router();

const { setTokenCookie } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an email address')
        .isEmail()
        .withMessage('Please provide a valid email address.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.')
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

// SIGN UP
router.post(
    '/',
    validateSignup,
    async (req, res) => {
        const { email, password, firstName, lastName, address1, address2, city, state, zipcode } = req.body;
        const user = await User.signup({ email, password, firstName, lastName, address1, address2, city, state, zipcode });

        await setTokenCookie(res, user);

        return res.json({
            user
        });
    }
);

module.exports = router;

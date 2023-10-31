const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { registrationValidationRules, loginValidationRules, resetPasswordValidationRules, handleValidationErrors } = require('../middleware/validationMiddleware');

router.post('/register', registrationValidationRules(), handleValidationErrors, userController.register);
router.post('/login', loginValidationRules(), handleValidationErrors, userController.login);
router.post('/reset-password', resetPasswordValidationRules(), handleValidationErrors, userController.resetPassword);

module.exports = router;
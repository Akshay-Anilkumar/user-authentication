const { validationResult, check } = require('express-validator');

const registrationValidationRules = () => {
  return [
    check('name')
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage('Username must be at least 3 characters long'),
    check('email')
      .notEmpty()
      .isEmail()
      .withMessage('Invalid email address'),
    check('password')
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    check('role')
      .notEmpty(),
  ];
};


const loginValidationRules = () => {
  return [
    check('email')
      .isEmail()
      .withMessage('Invalid email address'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ];
};

const resetPasswordValidationRules = () => {
    return [
      check('email')
        .notEmpty()
        .isEmail()
        .withMessage('Invalid email address'),
      check('currentPassword')
        .notEmpty()
        .isLength({ min: 6 })
        .withMessage('Current password must be at least 6 characters long'),
      check('newPassword')
        .notEmpty()
        .isLength({ min: 6 })
        .withMessage('New password must be at least 6 characters long'),
    ];
  };

const bookValidationRules = () => {
    return [
      check('title')
        .notEmpty()
        .withMessage('Title field cannot be empty'),
      check('author')
        .notEmpty()
        .withMessage('Author field cannot be empty'),
      check('category')
        .notEmpty()
        .withMessage('Category field cannot be empty'),
      check('publishedYear')
        .notEmpty()
        .withMessage('Published year field cannot be empty'),
    ];
  };
  


const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next(); 
  }

  const errorMessages = errors.array().map((error) => error.msg);
  return res.status(400).json({ errors: errorMessages });
};

module.exports = { registrationValidationRules, loginValidationRules, resetPasswordValidationRules, bookValidationRules, handleValidationErrors };
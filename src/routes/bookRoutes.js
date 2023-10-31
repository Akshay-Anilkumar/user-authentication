const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { authenticateUser, checkAdminRole } = require('../middleware/authMiddleware');
const { bookValidationRules, handleValidationErrors } = require('../middleware/validationMiddleware')

router.post('/create', authenticateUser, checkAdminRole, bookValidationRules(), handleValidationErrors, bookController.createBook);
router.get('/list', authenticateUser, bookController.getBooks);
router.get('/search', authenticateUser, bookController.searchBook);
router.put('/edit/:bookId', authenticateUser, checkAdminRole, bookValidationRules(), handleValidationErrors, bookController.updateBook);
router.delete('/delete/:bookId', authenticateUser, checkAdminRole, bookController.deleteBook);

module.exports = router;
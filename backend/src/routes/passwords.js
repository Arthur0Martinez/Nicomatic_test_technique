const express = require('express');
const router = express.Router();
const { addPassword, getPasswords, updatePassword, deletePassword } = require('../controllers/passwordController');

router.post('/', addPassword);
router.get('/', getPasswords);
router.put('/:id', updatePassword);
router.delete('/:id', deletePassword);

module.exports = router;

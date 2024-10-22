const express = require('express');
const { addPassword, getPasswords, updatePassword, deletePassword } = require('../controllers/passwordController');
const router = express.Router();

router.post('/passwords', addPassword);
router.get('/passwords', getPasswords);
router.put('/passwords/:id', updatePassword);
router.delete('/passwords/:id', deletePassword);

module.exports = router;

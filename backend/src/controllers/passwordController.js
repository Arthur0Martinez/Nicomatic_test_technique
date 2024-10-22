const Password = require('../models/password');
const argon2 = require('argon2');

const addPassword = async (req, res) => {
  try {
    const { title, password } = req.body;
    const hashedPassword = await argon2.hash(password);
    const newPassword = await Password.create({ title, hashedPassword });
    res.status(201).json(newPassword);
  } catch (error) {
    res.status(500).json({ error: 'Error adding password' });
  }
};

const getPasswords = async (req, res) => {
  try {
    const passwords = await Password.findAll();
    res.status(200).json(passwords);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching passwords' });
  }
};

const updatePassword = async (req, res) => {
    const { id } = req.params;
    const { title, password } = req.body;
  
    try {
      const passwordRecord = await Password.findByPk(id);
  
      if (!passwordRecord) {
        return res.status(404).json({ error: 'Password not found' });
      }
  
      const hashedPassword = password ? await argon2.hash(password) : passwordRecord.hashedPassword;
  
      passwordRecord.title = title || passwordRecord.title;
      passwordRecord.hashedPassword = hashedPassword;
  
      await passwordRecord.save();
  
      res.status(200).json(passwordRecord);
    } catch (error) {
      res.status(500).json({ error: 'Error updating password' });
    }
  };
  
const deletePassword = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Password.destroy({ where: { id } });

        if (result === 0) {
        return res.status(404).json({ error: 'Password not found' });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting password' });
    }
};

module.exports = { addPassword, getPasswords, updatePassword, deletePassword };

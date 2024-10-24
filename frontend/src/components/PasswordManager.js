import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PasswordForm from './PasswordForm';
import PasswordTable from './PasswordTable';
import './PasswordManager.css'

const PasswordManager = () => {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    fetchPasswords();
  }, []);

  const fetchPasswords = async () => {
    try {
      const response = await axios.get('/api/passwords');
      setPasswords(response.data);
    } catch (error) {
      console.error('Error fetching passwords:', error);
    }
  };

  const addPassword = async (newPassword) => {
    try {
      const response = await axios.post('/api/passwords', newPassword);
      setPasswords([...passwords, response.data]);
    } catch (error) {
      console.error('Error adding password:', error);
    }
  };

  const deletePassword = async (id) => {
    try {
      await axios.delete(`/api/passwords/${id}`);
      setPasswords(passwords.filter((password) => password.id !== id));
    } catch (error) {
      console.error('Error deleting password:', error);
    }
  };

  return (
    <div className="container">
      <h1>Saffy</h1>
      <h2>Ton gestionnaire de mot de passe sécurisé !</h2>
      <PasswordForm onSubmit={addPassword} />
      <PasswordTable passwords={passwords} onDelete={deletePassword} />
    </div>
  );
};

export default PasswordManager;

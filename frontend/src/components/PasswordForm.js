import React, { useState } from 'react';
import './PasswordForm.css';

const PasswordForm = ({ onSubmit }) => {
  const [siteName, setSiteName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ siteName, username, password });
    setSiteName('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du site"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ajouter/Mise à jour</button>
      </form>
    </div>
  );
};

export default PasswordForm;
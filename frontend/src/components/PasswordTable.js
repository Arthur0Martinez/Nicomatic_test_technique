import React from 'react';

const PasswordTable = ({ passwords, onEdit, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Site</th>
        <th>Nom d'utilisateur</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {passwords.map((password) => (
        <tr key={password.id}>
          <td>{password.siteName}</td>
          <td>{password.username}</td>
          <td>
            <button onClick={() => onEdit(password)}>Modifier</button>
            <button onClick={() => onDelete(password.id)}>Supprimer</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PasswordTable;

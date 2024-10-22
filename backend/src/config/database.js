const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db', 'postgres', 'password', {
  host: 'db',
  dialect: 'postgres',
});

// Tester la connexion
sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la base de données réussie.');
  })
  .catch(err => {
    console.error('Impossible de se connecter à la base de données:', err);
  });

module.exports = sequelize;

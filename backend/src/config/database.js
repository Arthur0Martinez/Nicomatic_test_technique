const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db', 'db', 'db', {
  host: 'db',
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la base de données réussie.');
  })
  .catch(err => {
    console.error('Impossible de se connecter à la base de données:', err);
  });

module.exports = sequelize;

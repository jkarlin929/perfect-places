const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'places_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const Place = sequelize.define('place', {
  location: Sequelize.STRING,
  description: Sequelize.STRING,
  visited: Sequelize.BOOLEAN,
  date_visited: Sequelize.DATEONLY
})


module.exports = {
  sequelize,
  Place
}

const Sequelize = require('sequelize');


const sequelize = new Sequelize('blog_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;
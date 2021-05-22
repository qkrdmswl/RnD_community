const Sequelize = require('sequelize');
const User = require('./user');
const User_login = require('./user_login');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.User_login = User_login;

User.init(sequelize);
User_login.init(sequelize);

User.associate(db);
User_login.associate(db);

module.exports = db;

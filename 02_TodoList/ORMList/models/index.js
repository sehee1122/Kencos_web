'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize('TodoList_copy', 'shpark', 'shpark', {
  host: '192.168.1.70',
  port: 5506,
  dialect: 'mariadb',
  //dialectOptions: {connectTimeout: 1000}  // mariadb connector option

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
})

/*
// Option 1: Passing parameters separately
const sequelize = new Sequelize('my_todo', 'shpark', 'shpark', {
  host: '192.168.1.70',
  dialect: mariadb // one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'
});

// Option 2: Passing a connection URI
//const sequelize = new Sequelize('postgres://192.168.1.70:shpark@localhost:3000/TodoList_copy');

/* ORIGINAL VERSION
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
*/
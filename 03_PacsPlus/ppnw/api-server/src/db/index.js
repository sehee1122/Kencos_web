const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const { DB_USER: username, DB_PASS: password, DB_NAME: database, DB_HOST: host, DB_PORT: port, DB_INSTANCE: instance } = process.env;
const Sequelize = require('sequelize');
const db = {};

const config = {
  username: username,
  password: password,
  database: database,
  host: host,
  port: port,
  dialect: 'mssql',
  dialectOptions: {
    encrypt: false,
    instanceName: instance
  },
  define: {
    freezeTableName: true,
    timestamps: false
  },
  pool: {
    max: 20
  },
  logging: false
};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

/*
sequelize.authenticate().then(() => {
  console.log('database connection success');
}).catch(e => {
  console.log(e);
});
*/

fs.readdirSync(path.join(__dirname, 'models'))
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  }).forEach(file => {
    const model = sequelize.import(path.join(__dirname, 'models', file));
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

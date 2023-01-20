import { Dialect, Sequelize } from 'sequelize';
import * as mysql from 'mysql2';

import { proposalDBModel } from './proposal.model';

const dbConfig = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'password',
  DB: 'testdb',
  dialect: 'mysql',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

function createDB() {
  // var dbName = 'db_name',
  //   username = 'postgres',
  //   password = 'password',
  //   host = 'localhost';

  // var conStringPri =
  //   'postgres://' + username + ':' + password + '@' + host + '/postgres';
  // var conStringPost =
  //   'postgres://' + username + ':' + password + '@' + host + '/' + dbName;

  // // connect to postgres db
  // pg.connect(conStringPri, function (err, client, done) {
  //   // create the db and ignore any errors, for example if it already exists.
  //   client.query('CREATE DATABASE ' + dbName, function (err) {
  //     //db should exist now, initialize Sequelize
  //     var sequelize = new Sequelize(conStringPost);
  //     callback(sequelize);
  //     client.end(); // close the connection
  //   });
  // });

  mysql.createConnection({
    host: dbConfig.HOST,
    database: dbConfig.DB,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    port: 3306,
  });

  console.log('Created?');
}

// createDB();

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect as Dialect,
  // operatorsAliases: false,
  // pool: {
  //   max: dbConfig.pool.max,
  //   min: dbConfig.pool.min,
  //   acquire: dbConfig.pool.acquire,
  //   idle: dbConfig.pool.idle,
  // },
});

async function doStuff() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// doStuff();

const db = {
  Sequelize,
  sequelize,
  proposals: proposalDBModel(sequelize),
};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.tutorials = tutorial(sequelize);

export default db;

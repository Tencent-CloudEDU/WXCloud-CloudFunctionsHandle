const cloud = require('wx-server-sdk')

const Sequelize = require('sequelize');
const sequelize = new Sequelize('clouddev', 'clouddev', 'qwe123asd123', {
  host: 'test host',
  port: 3306,
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});


const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});


cloud.init()

exports.main = async (event, context) => {

  return await User.sync({ force: true }).then(() => User.create({
    firstName: 'John',
    lastName: 'Hancock'
  })).then(john => {
    return john.toJSON();
  });

}
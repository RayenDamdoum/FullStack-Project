const { Sequelize,DataTypes } = require('sequelize');
//const sequelize = new Sequelize('sqlite::memory:');


const RoadOwners = new Sequelize('roadowners', 'root', 'root', {
  host: 'localhost',
  dialect:'mysql'
});

const testConnection= async()=>{
    try {
        await RoadOwners.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    }
    testConnection();

const user=require("./user.models")(RoadOwners,DataTypes)
const products=require("./products.model")( RoadOwners,DataTypes)


// RoadOwners.sync({ alter: true });
// console.log('The tables for the models was just (re)created!');


module.exports={Sequelize,DataTypes,user,products}
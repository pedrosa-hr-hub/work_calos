import sequelize from "sequelize";
import { database } from "./database";

export const BancodeDados = database.define("cerveja", {
     voto:{
          type: sequelize.STRING,
          allowNull: false
     },
     email:{
          type: sequelize.STRING,
          allowNull: false
     },
     nome:{
          type: sequelize.STRING,
          allowNull: false
     },
     cidade:{
          type: sequelize.STRING,
          allowNull: false
     },
     estado:{
          type: sequelize.STRING,
          allowNull: false
     }
});
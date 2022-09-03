import sequelize from "sequelize";
import { database } from "./database";

export const BancodeDados = database.define("cerveja", {
     voto:{
          type: sequelize.STRING,
          allowNull: false
     }
});
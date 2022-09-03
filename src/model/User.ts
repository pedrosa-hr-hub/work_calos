import { DataTypes } from "sequelize/types";
import { database } from "./database";

export const User = database.define("user", {
     id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
     },
     voto:{
          type: DataTypes.STRING,
          allowNull: false
     }

})
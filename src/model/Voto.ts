import { DataTypes } from "sequelize/types";
import { database } from "./database";

export const User = database.define("user", {
     voto:{
          type: DataTypes.STRING,
          allowNull: false
     }
});
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db_name = process.env.DB_NAME as string;
const db_user = process.env.DB_USER as string;
const db_password = process.env.DB_PASSWORD
const db_host = process.env.DB_HOST

export const database = new Sequelize(
     db_name, 
     db_user,
     db_password,
     {
          dialect: "mysql",
          host: db_host
}
);
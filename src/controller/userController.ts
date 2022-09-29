import { BancodeDados } from "../model/Voto";
import { Request, Response } from "express";
import sequelize from "sequelize";

class UserController{

     async findAll(req:Request, res: Response){
          try {          
               
               const user = await BancodeDados.findAll();
               return user.length > 0
               ? res.send(user)
               : res.send("Não existe dados salvos no banco");
               
          } catch (error) {
               console.log(error)
          }
     }
}

export const User = new UserController();
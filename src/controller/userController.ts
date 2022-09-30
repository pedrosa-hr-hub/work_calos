import { BancodeDados } from "../model/Voto";
import { Request, Response } from "express";

class UserController{

     async Validate(req:Request, res: Response){

          const user = req.body.email;
          const pass = req.body.voto;

          try {          
               const seachUser = await BancodeDados.findOne({where: {email: user}});

               if (!seachUser) {

                    res.sendStatus(400);

               } else {

                    const seachPass = await BancodeDados.findOne({where: {voto: pass}});

                    if (!seachPass) {
                         
                         res.sendStatus(400);

                    } else {
                         
                         res.sendStatus(200);
                    }
               }
               
          } catch (error) {
               console.log(error)
          }
     }
}

export const User = new UserController();
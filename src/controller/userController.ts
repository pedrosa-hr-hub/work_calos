import { BancodeDados } from "../model/Voto";
import { Request, Response } from "express";

class UserController{

     async Validate(req:Request, res: Response){

          const email = req.body.user;

          BancodeDados.findOne({where: {email: email}}).then(
               user => {
                    if(user == undefined){
                         res.sendStatus(404);
                    }else{

                         const voto = req.body.pass;

                         BancodeDados.findOne({where: {voto: voto}}).then(
                              pass =>{
                                   if(pass == undefined){
                                        res.sendStatus(404);
                                   }else{
                                        res.sendStatus(200);
                                   }
                              }
                         )
                    }
               }
          )


     }
}

export const User = new UserController();
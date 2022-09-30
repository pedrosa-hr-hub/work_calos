import { emailValidator_Adapter, validaEmail } from "./emailValidator_Adapter";
import { votoFactory } from "./voto_factory";
import { BancodeDados } from "../model/Voto";
import { AtualizandoBanco } from "./atualizacao_service";
import { Subject } from "./voto_observer";
import { Request, Response } from "express";
import sequelize from "sequelize";

class VotoController{

     async create(req: Request, res: Response){

          try {

               let votofeito = req.body.voto;
               let emailVoto = req.body.email;
               let nomeVoto = req.body.nome;
               let cidadeVoto = req.body.cidade;
               let estadoVoto = req.body.estado;
          
               if(validaEmail(new emailValidator_Adapter,emailVoto) === true){
          
                    if(votofeito === "Heineken" || votofeito === "Budweiser"){
                         const voto = votoFactory.createVoto();
          
                         voto.voto(votofeito);
          
                         BancodeDados.create({
                              voto: votofeito,
                              email: emailVoto,
                              nome: nomeVoto,
                              cidade: cidadeVoto,
                              estado:estadoVoto
                         });
     
                         res.sendStatus(201);

                         const VotoSubject = new Subject();

                         const EmailService = new AtualizandoBanco(VotoSubject);
               
                         VotoSubject.setState(emailVoto);
          
                    }else{
          
                         return res.sendStatus(400);
          
                    }
          
          
               }else{
                    
                    return res.sendStatus(400);
                    
               }
               
          } catch (error) {

               console.log(error);
               
          }
     
     };

     async findAll(req:Request, res: Response){
          try {          
               
               const voto = await BancodeDados.findAll();
               return voto.length > 0
               ? res.send(voto)
               : res.sendStatus(400);
               
          } catch (error) {
               console.log(error)
          }
     }

     async findPercent(req:Request, res: Response){
          try {          
               
               const voto = await BancodeDados.findAll({
                    attributes: ['voto', [sequelize.fn('count', sequelize.col('voto')), 'qtd']],
                    group:['voto'],
               });
               return res.send(voto)
               
          } catch (error) {
               console.log(error)
          }
     }
}

export const Voto = new VotoController();
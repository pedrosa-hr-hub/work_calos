import { Router, Request, Response } from "express";
import { send } from "process";
import { emailValidator_Adapter, validaEmail } from "./controller/emailValidator_Adapter";
import { votoFactory } from "./controller/voto_factory";
import { BancodeDados } from "./model/Voto";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
     res.send("Votação de cerveja. Escolha Haineken ou Budwaiser, na rota http://localhost:3000/voto tipo POST");
});

router.post("/voto", (req: Request, res: Response) => {

     let votofeito = req.body.voto;
     let emailVoto = req.body.email

     if(validaEmail(new emailValidator_Adapter,emailVoto) === true){

          if(votofeito === "Haineken" || votofeito === "Budwaiser"){
               const voto = votoFactory.createVoto();

               voto.voto(votofeito);

               BancodeDados.create({
                    voto: votofeito,
                    email: emailVoto
               });

          }else{

               res.send("Voto invalido");

          }

          res.send("VOTO REALIZADO");

     }else{
          
          res.send("Email informado é invalido");
          
     }
});

export { router };
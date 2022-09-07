import { Router, Request, Response } from "express";
import { emailValidator_Adapter, validaEmail } from "./controller/emailValidator_Adapter";
import { votoFactory } from "./controller/voto_factory";
import { BancodeDados } from "./model/Voto";
import { EmailModule } from "./controller/email_service";
import { Subject } from "./controller/voto_observer";



const router: Router = Router();

router.post("/voto", (req: Request, res: Response) => {

     let votofeito = req.body.voto;
     let emailVoto = req.body.email;

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

          const EmailSubject = new Subject();

          const EmailService = new EmailModule(EmailSubject);

          EmailSubject.setState(emailVoto);

     }else{
          
          res.send("Email informado é invalido");
          
     }
});

export { router };
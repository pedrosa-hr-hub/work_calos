import { Router, Request, Response } from "express";
import { votoFactory } from "./controller/voto_factory";
import { BancodeDados } from "./model/Voto";

const router: Router = Router()

router.get("/", (req: Request, res: Response) => {
     res.send("Votação de cerveja. Escolha Haineken ou Budwaiser, na rota http://localhost:3000/voto tipo POST");
});

router.post("/voto", (req: Request, res: Response) => {

     let votofeito = req.body.voto;

     if (votofeito === "Haineken" || votofeito === "Budwaiser") {

          const voto = votoFactory.createVoto();

          voto.voto(votofeito);

          BancodeDados.create({
               voto: votofeito
          });
     
          res.send(`Seu voto no ${votofeito} foi realizado`);
          
     } else {
          res.send("Essa opção não existe");
     }
     
});

export { router };
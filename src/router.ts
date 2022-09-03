import { Router, Request, Response } from "express";
import { votoFactory } from "./controller/voto_factory";


const router: Router = Router()

router.post("/", (req: Request, res: Response) => {

     let votofeito = req.body.voto;
     
     const voto = votoFactory.createVoto();

     voto.voto(votofeito);

     res.sendStatus(300);
     
});

export { router };
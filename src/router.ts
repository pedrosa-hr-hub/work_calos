import { Router } from "express";
import { Voto } from "./controller/votoController";



const router: Router = Router();

router.post("/voto", Voto.create);
router.get("/consulta", Voto.findAll);
router.get("/percent", Voto.findPercent);

export { router };
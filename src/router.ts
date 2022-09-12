import { Router } from "express";
import { Voto } from "./controller/votoController";



const router: Router = Router();

router.post("/voto", Voto.create);
router.get("/consulta", Voto.findAll);

export { router };
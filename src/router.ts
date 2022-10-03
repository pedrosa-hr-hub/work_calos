import { Router } from "express";
import { Voto } from "./controller/votoController";
import { User } from "./controller/userController";

const router: Router = Router();

router.post("/voto", Voto.create);
router.get("/consulta", Voto.findAll);
router.get("/sintect", Voto.findPercent);
router.post("/user", User.Validate);

export { router };
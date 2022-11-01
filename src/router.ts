import { Router } from "express";
import { Voto } from "./controller/votoController";
import { User } from "./controller/userController";

const router: Router = Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.post("/voto", Voto.create);
router.get("/consulta", Voto.findAll);
router.get("/sintect", Voto.findPercent);
router.post("/user", User.Validate);

export { router };
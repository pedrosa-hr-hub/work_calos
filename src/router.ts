import { Router } from "express";
import { votoController } from "./controller/VotoController";

const router: Router = Router()

router.get("/", votoController.home);

export { router };
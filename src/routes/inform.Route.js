import { Router } from "express";
import { getImform, postInform } from "../controllers/inform.controller.js";

const router = Router();

router.get("/inform", getImform);

router.post("/inform", postInform);


export default router;
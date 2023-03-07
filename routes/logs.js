import { Router } from "express";
import * as controllers from "../controllers/logs.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/logs", controllers.getLogs);
router.get("/logs/:id", controllers.getLog);
router.post("/logs", restrict, controllers.createLog);
router.put("/logs/:id", restrict, controllers.updateLog);
router.delete("/logs/:id", restrict, controllers.deleteLog);

export default router;

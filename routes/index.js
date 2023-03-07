import { Router } from "express";
import logsRoutes from "./logs.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root"));

router.use("/", usersRoutes);
router.use("/", logsRoutes);

export default router;

import { register } from "../controllers/User";
import { Router } from "express";
const router = Router();

router.post('/register', register);
export default router;
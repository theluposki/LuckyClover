import { Router } from "express"
import { AuthController } from "../controllers/AuthController"

const router = Router()

router.post("/", AuthController)

export default router
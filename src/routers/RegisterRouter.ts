import { Router } from "express"
import { RegisterController } from "../controllers/RegisterController"

const router = Router()

router.post("/", RegisterController)

export default router
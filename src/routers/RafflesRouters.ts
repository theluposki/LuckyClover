import { Router } from "express"
import { RafflesController } from '../controllers/RafflesController';

const router = Router()


router.get("/:id", RafflesController.getOneById)
router.get("/", RafflesController.getAll)
router.post("/", RafflesController.create)
router.put("/:id", RafflesController.update)
router.delete("/:id", RafflesController.delete)



export default router
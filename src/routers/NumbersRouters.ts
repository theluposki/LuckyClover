import { Router } from "express"
import { NumberController } from '../controllers/NumberController';

const router = Router()


router.get("/:id", NumberController.getOneById)
router.get("/", NumberController.getAll)
router.post("/", NumberController.create)
router.post("/many", NumberController.createMany)
router.put("/:id", NumberController.update)
router.delete("/:id", NumberController.delete)

export default router
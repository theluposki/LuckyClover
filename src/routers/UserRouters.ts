import { Router } from "express"
import { UserController } from '../controllers/UserController';

const router = Router()

router.get("/", UserController.getAll)
router.get("/id/:id", UserController.getOneById)
router.get("/email/:id", UserController.getOneByEmail)

router.put("/:id", UserController.update)
router.delete("/:id", UserController.delete)



export default router

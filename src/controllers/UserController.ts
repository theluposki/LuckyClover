import { Request, Response} from "express";
import { UserRepository } from "../repositories/UserRepository";


export const UserController = {
    async getAll(req: Request, res: Response) {
        try {
            const users = await UserRepository.getAll()
            return res.status(200).json(users)
        } catch (error) {
            res.status(400).json({ error: `Erro ao listar usuários`})
        }
    }
}

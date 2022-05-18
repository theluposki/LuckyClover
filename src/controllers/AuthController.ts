import { Request, Response } from "express";

import { AuthRepository } from "../repositories/AuthRepository"

export const AuthController = async (req: Request, res: Response) => {
  try {
    const auth = await AuthRepository(req.body)

    res.status(200).json(auth)
  } catch (error) {
    res.status(400).json({ Error: `Erro ao se authenticar...` })
  }
};

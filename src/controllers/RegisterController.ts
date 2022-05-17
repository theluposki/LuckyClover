import { Request, Response } from "express";
import { RegisterRepository } from "../repositories/RegisterRepository"

export const RegisterController = async (req: Request, res: Response) => {
  try {
    const user = await RegisterRepository(req.body)

    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ Error: "Error"})
  }
};

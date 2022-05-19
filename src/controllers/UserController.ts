import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

export const UserController = {
  async getAll(req: Request, res: Response) {
    try {
      const users = await UserRepository.getAll();

      return res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: `Error listing users` });
    }
  },
  async getOneById(req: Request, res: Response) {
    try {
      const user = await UserRepository.getOneById(req.params.id);

      return res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: `error fetching the user`, err });
    }
  },
  async getOneByEmail(req: Request, res: Response) {
    try {
      const user = await UserRepository.getOneByEmail(req.params.id);

      return res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: `error fetching the user`, err });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const user = await UserRepository.update(req.params.id, req.body);

      return res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: `error updating user`, err });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const user = await UserRepository.delete(req.params.id);

      return res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: `error deleting user`, err });
    }
  },
};

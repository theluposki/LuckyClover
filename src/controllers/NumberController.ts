import { Request, Response } from "express";
import { NumberRepository } from "../repositories/NumberRepository";

export const NumberController = {
  async getOneById(req: Request, res: Response) {
    try {
      const number = await NumberRepository.getOneById(req.params.id);

      return res.status(200).json(number);
    } catch (err) {
      res.status(400).json({ error: `error fetching the number`, err });
    }
  },
  async getAll(req: Request, res: Response) {
    try {
      const number = await NumberRepository.getAll();

      return res.status(200).json(number);
    } catch (err) {
      res.status(400).json({ error: `Error listing number`, err });
    }
  },
  async create(req: Request, res: Response) {
    const { number } = req.body;

    if (!number) {
      return res.status(400).json({ error: "number is required" });
    }

    try {
      const number = await NumberRepository.create(req.body);

      res.status(201).json(number);
    } catch (err) {
      res.status(400).json({ error: `Error creating number`, err });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const number = await NumberRepository.update(req.params.id, req.body);

      return res.status(200).json(number);
    } catch (err) {
      res.status(400).json({ error: `error updating number`, err });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const number = await NumberRepository.delete(req.params.id);

      return res.status(200).json(number);
    } catch (err) {
      res.status(400).json({ error: `error deleting number`, err });
    }
  },
};
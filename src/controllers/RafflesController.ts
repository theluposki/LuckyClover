import { Request, Response } from "express";
import { RafflesRepository } from "../repositories/RafflesRepository";

export const RafflesController = {
  async getOneById(req: Request, res: Response) {
    try {
      const raffles = await RafflesRepository.getOneById(req.params.id);

      return res.status(200).json(raffles);
    } catch (err) {
      res.status(400).json({ error: `error fetching the raffles`, err });
    }
  },
  async getAll(req: Request, res: Response) {
    try {
      const raffles = await RafflesRepository.getAll();

      return res.status(200).json(raffles);
    } catch (err) {
      res.status(400).json({ error: `Error listing raffles`, err });
    }
  },
  async create(req: Request, res: Response) {
    const { raffleName, award, price, imgAward } = req.body;

    if (!raffleName) {
      return res.status(400).json({ error: "raffleName is required" });
    }

    if (!award) {
      return res.status(400).json({ error: "award is required" });
    }

    if (!price) {
      return res.status(400).json({ error: "price is required" });
    }

    if (!imgAward) {
      return res.status(400).json({ error: "imgAward is required" });
    }

    try {
      const raffle = await RafflesRepository.create(req.body);

      res.status(201).json(raffle);
    } catch (err) {
      res.status(400).json({ error: `Error creating raffle`, err });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const raffles = await RafflesRepository.update(req.params.id, req.body);

      return res.status(200).json(raffles);
    } catch (err) {
      res.status(400).json({ error: `error updating raffles`, err });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const raffles = await RafflesRepository.delete(req.params.id);

      return res.status(200).json(raffles);
    } catch (err) {
      res.status(400).json({ error: `error deleting raffles`, err });
    }
  },
};

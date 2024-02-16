import { ColabDTO } from "../models/dto-colab";
import { create_colab } from "../services/mdl-colab";
import { Request, Response } from "express";






export class ctr_create_colab {
  async create(req: Request, res: Response) {
    const data: ColabDTO = req.body;

    const newColab = new create_colab();

    const result = await newColab.execute(data);

    return res.status(201).json(result);
  }
}
import { ClientDTO } from "../models/dto-client";
import { create_client } from "../services/mdl-client";
import { Request, Response } from "express";





export class ctr_create_client {
  async create(req: Request, res: Response) {
    const data: ClientDTO = req.body;

    const newClient = new create_client();

    const result = await newClient.execute(data);

    return res.status(201).json(result);
  }

}
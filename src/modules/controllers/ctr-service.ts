import { ServiceDTO } from "../models/dto-service";
import { create_service } from "../services/mdl-service";
import { Request, Response } from "express";




export class ctr_create_service {
  async create(req: Request, res: Response) {
    const data: ServiceDTO[] = req.body;

    const newService = new create_service();

    const result = await newService.execute(data)

    return res.status(201).json(result);
  }
}
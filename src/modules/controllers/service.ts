import { ServiceDTO } from "../models/dto-service";
import { create_service, select_service } from "../services/service";
import { Request, Response } from "express";




export class ctr_create_service {
  async create(req: Request, res: Response) {
    const data: ServiceDTO[] = req.body;

    const newService = new create_service();

    const result = await newService.execute(data)

    return res.status(201).json(result);
  }
}

export class ctr_select_service {

  async fetch(req: Request, res: Response) {
      const selectService = new select_service();
      const result = await selectService.fetch();
      return res.status(200).json(result);
  }


}
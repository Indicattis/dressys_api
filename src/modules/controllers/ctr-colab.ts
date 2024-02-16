import { ColabDTO } from "../models/dto-colab";
import { access_colab, create_colab } from "../services/mdl-colab";
import { Request, Response } from "express";






export class ctr_create_colab {
  async create(req: Request, res: Response) {
    const data: ColabDTO = req.body;

    const newColab = new create_colab();

    const result = await newColab.execute(data);

    return res.status(201).json(result);
  }
}

export class ctr_access_colab {
  async login(req: Request, res: Response){
      const data: ColabDTO = req.body;

      const newAffiliate = new access_colab();

      const result = await newAffiliate.login( data );

      return res.status(201).json(result);
  }
}
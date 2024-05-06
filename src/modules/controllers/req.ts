import { Request, Response } from "express";
import { create_req } from "../services/req";
import { ReqDTO } from "../models/dto-req";


export class ctr_create_req {
  async create(req: Request, res: Response) {
    const data: ReqDTO = req.body;

    const newReq = new create_req();

    const result = await newReq.execute(data);

    return res.status(201).json(result);
  }
}
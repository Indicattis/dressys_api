import { Requisicao } from "@prisma/client";
import { ReqDTO } from "../models/dto-req";
import { prisma } from "../../prisma";





export class create_req {
  async execute(data: ReqDTO): Promise<Requisicao> {
    const item = await prisma.requisicao.create({
      data: {
        req_date: data.req_date,
        req_services: data.req_services,
        req_duration: data.req_duration,
        req_price: data.req_price,
        req_client: data.req_client,
      }
    })
    return item;
  }
}
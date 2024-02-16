import { Service } from "@prisma/client";
import { prisma } from "../../prisma";
import { ServiceDTO } from "../models/dto-service";







export class create_service {
  async execute(dataArray: ServiceDTO[]): Promise<Service[]> {
    const createdItems: Service[] = [];

    for (const data of dataArray) {
      const item = await prisma.service.create({
        data: {
          serv_description: data.serv_description,
          serv_price: data.serv_price,
          serv_duration: data.serv_duration
        },
      });
      createdItems.push(item);
    }

    return createdItems;
  }
}

import { Cliente } from "@prisma/client";
import { prisma } from "../../prisma";
import { ClientDTO } from "../models/dto-client";







export class create_client {
  async execute(data: ClientDTO): Promise<Cliente> {

      const item = await prisma.cliente.create({
        data: {
          client_name: data.client_name,
          client_number: data.client_number,
          client_password: data.client_password,
          client_mail: data.client_mail,
          client_age: data.client_age,
        },
      });

    return item;
  }
}
import { Cliente } from "@prisma/client";
import { prisma } from "../../prisma";
import { ClientDTO } from "../models/dto-client";
import jwt from 'jsonwebtoken';






export class create_client {
  async execute(data: ClientDTO): Promise<Cliente> {
    const existingClientWithEmail = await prisma.cliente.findUnique({
      where: {
        client_mail: data.client_mail,
      },
    });

    const existingClientWithPhone = await prisma.cliente.findUnique({
      where: {
        client_phone: data.client_phone,
      },
    });

    if (existingClientWithEmail) {
      throw new Error('Email já cadastrado');
    }

    if (existingClientWithPhone) {
      throw new Error('Telefone já cadastrado');
    }

    const item = await prisma.cliente.create({
      data: {
        client_name: data.client_name,
        client_phone: data.client_phone,
        client_password: data.client_password,
        client_mail: data.client_mail,
        client_genre: data.client_genre,
        client_birthday: data.client_birthday,
      },
    });

    return item;
  }
}

export class create_clients {
  async execute(dataArray: ClientDTO[]): Promise<Cliente[]> {
    const createdItems: Cliente[] = [];

    for (const data of dataArray) {
      const item = await prisma.cliente.create({
        data: {
          client_name: data.client_name,
          client_phone: data.client_phone,
          client_password: data.client_password,
          client_mail: data.client_mail,
          client_genre: data.client_genre,
          client_birthday: data.client_birthday,
        },
      });
      createdItems.push(item);
    }

    return createdItems;
  }
}

export class access_client {
  async login(data: ClientDTO) {
      const client = await prisma.cliente.findFirst({
          where: {
            client_mail: data.client_mail,
          },
      });

      if (client && data.client_password === client.client_password) {
          const token = jwt.sign(
              {
                  client_id: client.id,
                  client_name: client.client_name,
                  client_mail: client.client_mail,
              },
              'clientToken',
              { expiresIn: '1h' }
          );

          return { authenticated: true, token };
      } else {
          return { authenticated: false };
      }
  }

  async google_auth_client(data: ClientDTO) {
    const clientExists = await prisma.cliente.findFirst({
      where: {
        client_mail: data.client_mail,
      },
    })
    if(!clientExists) {
      throw new Error('Email não cadastrado!');
    }
    if (clientExists) {
      const token = jwt.sign(
        {
            client_id: clientExists.id,
            client_name: clientExists.client_name,
            client_mail: clientExists.client_mail,
        },
        'clientToken',
        { expiresIn: '1h' }
    );
    return { authenticated: true, token };
    } else {
      return { authenticated: false }
    }
  }
}
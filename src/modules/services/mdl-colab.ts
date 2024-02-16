import { Colaborador } from "@prisma/client";
import { ColabDTO } from "../models/dto-colab";
import { prisma } from "../../prisma";
import jwt from 'jsonwebtoken';




export class create_colab {
  async execute(data: ColabDTO): Promise<Colaborador> {
    const item = await prisma.colaborador.create({
      data: {
        colab_name: data.colab_name,
        colab_number: data.colab_number,
        colab_password: data.colab_password,
        colab_mail: data.colab_mail,
        colab_age: data.colab_age,
        colab_level: data.colab_level
      }
    })
    return item;
  }
}

export class access_colab {
  async login(data: ColabDTO) {
    const colab = await prisma.colaborador.findUnique({
      where: {
        colab_mail: data.colab_mail,
        colab_password: data.colab_password,
      },
    });

    if (colab) {

      const token = jwt.sign(
        {
          colab_id: colab.id,
          colab_name: colab.colab_name,
          colab_mail: colab.colab_mail,
          colab_number: colab.colab_number,
          colab_level: colab.colab_level,
        },
        'admin_token',
        { expiresIn: '1h' }
      );

      return { token, authenticated: true };
    } else {
      return "Usuário não encontrado"
    }
  }
}
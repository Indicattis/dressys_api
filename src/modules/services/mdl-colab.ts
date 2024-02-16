import { Colaborador } from "@prisma/client";
import { ColabDTO } from "../models/dto-colab";
import { prisma } from "../../prisma";





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
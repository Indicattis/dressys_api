import { access_client, create_client, create_clients } from "../services/client";
import { Request, Response } from "express";
import { ClientDTO } from "../models/dto-client";





export class ctr_create_client {
  async create(req: Request, res: Response) {
    const data: ClientDTO = req.body;

    const newClient = new create_client();

    try {
      const result = await newClient.execute(data);
      return res.status(201).json(result);
    } catch (error: any) {
      if (error.message === 'Email já cadastrado' || error.message === 'Telefone já cadastrado') {
        return res.status(400).json({ error: error.message });
      } else {
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
  }

  async create_array(req: Request, res: Response) {
    const data: ClientDTO[] = req.body;

    const newclient = new create_clients();

    const result = await newclient.execute(data);

    return res.status(201).json(result);
  }
}

export class ctr_access_client {
  async login(req: Request, res: Response){
      const data: ClientDTO = req.body;

      const newStudent = new access_client();

      const result = await newStudent.login( data );

      return res.status(201).json(result);
  }

  async google_auth_client(req: Request, res: Response){
      const data: ClientDTO = req.body;
      
      const accessStudent = new access_client();

      try {
        const result = await accessStudent.google_auth_client( data );
        return res.status(201).json(result);
      } catch (error: any) {
        if (error.message === 'Email não cadastrado!') {
          return res.status(400).json({ error: error.message });
        } else {
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }
      }
  }
}
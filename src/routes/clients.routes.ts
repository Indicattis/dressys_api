import { Router } from "express";
import { ctr_create_client } from "../modules/controllers/ctr-client";




const CTR_Create_Client = new ctr_create_client();

const Routes_Client = Router();

Routes_Client.post("/client-insert", CTR_Create_Client.create);

export {Routes_Client}
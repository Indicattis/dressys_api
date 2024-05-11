import { Router } from "express";
import { ctr_access_client, ctr_create_client } from "../modules/controllers/client";

const CTR_Create_Client = new ctr_create_client();
const CTR_Access_Client = new ctr_access_client();

const Routes_Client = Router();

Routes_Client.post("/client-insert", CTR_Create_Client.create);
Routes_Client.post("/client-insert-array", CTR_Create_Client.create_array);
Routes_Client.post("/client-access", CTR_Access_Client.login);
Routes_Client.post("/client-access-google-oauth", CTR_Access_Client.google_auth_client);

export {Routes_Client}
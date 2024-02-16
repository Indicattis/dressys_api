import { Router } from "express";
import { ctr_create_req } from "../modules/controllers/ctr-req";


const CTR_Create_Req = new ctr_create_req();

const Routes_Req = Router();

Routes_Req.post("/req-insert", CTR_Create_Req.create);

export { Routes_Req };
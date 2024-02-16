import { Router } from "express";
import { ctr_create_service } from "../modules/controllers/ctr-service";

const CTR_Create_Service = new ctr_create_service();

const Routes_Service = Router();

Routes_Service.post("/service-insert", CTR_Create_Service.create);

export {Routes_Service}
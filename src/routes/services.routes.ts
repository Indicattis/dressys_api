import { Router } from "express";
import { ctr_create_service, ctr_select_service } from "../modules/controllers/service";

const CTR_Create_Service = new ctr_create_service();
const CTR_Select_Service = new ctr_select_service();

const Routes_Service = Router();

Routes_Service.post("/service-insert", CTR_Create_Service.create);
Routes_Service.get("/service-select", CTR_Select_Service.fetch);

export {Routes_Service}
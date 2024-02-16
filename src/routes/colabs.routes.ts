import { Router } from "express";
import { ctr_access_colab, ctr_create_colab } from "../modules/controllers/ctr-colab";

const CTR_Create_Colab = new ctr_create_colab();
const CTR_Access_Colab = new ctr_access_colab();

const Routes_Colab = Router();

Routes_Colab.post("/colab-insert", CTR_Create_Colab.create);
Routes_Colab.post("/colab-access", CTR_Access_Colab.login);

export {Routes_Colab}
import { Router } from "express";
import { ctr_create_colab } from "../modules/controllers/ctr-colab";




const CTR_Create_Colab = new ctr_create_colab();

const Routes_Colab = Router();

Routes_Colab.post("/colab-insert", CTR_Create_Colab.create);

export {Routes_Colab}
import { Router } from "express";
import { Routes_Service } from "./services.routes";
import { Routes_Client } from "./clients.routes";
import { Routes_Colab } from "./colabs.routes";

const routes = Router();

routes.use("/", Routes_Service)
routes.use("/", Routes_Client)
routes.use("/", Routes_Colab)

export { routes };
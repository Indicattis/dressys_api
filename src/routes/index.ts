import { Router } from "express";
import { Routes_Service } from "./services.routes";
import { Routes_Client } from "./clients.routes";
import { Routes_Colab } from "./colabs.routes";
import { Routes_Req } from "./reqs.routes";

const routes = Router();

routes.use("/", Routes_Service)
routes.use("/", Routes_Client)
routes.use("/", Routes_Colab)
routes.use("/", Routes_Req)

export { routes };
import { Router } from "express";
import { Routes_Service } from "./services.routes";
import { Routes_Client } from "./clients.routes";

const routes = Router();

routes.use("/", Routes_Service)
routes.use("/", Routes_Client)

export { routes };
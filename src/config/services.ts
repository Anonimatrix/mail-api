import { Services } from "../interfaces/Services";
import { NodeMailer } from "../services/Mailer/Strategies/NodeMailer";
import { ExpressServer } from "../services/Server/Strategies/ExpressServer";

const services: Services = {
    server: ExpressServer.getInstance(Number(process.env.PORT) || 3000),
    mailer: NodeMailer.getInstance()
};

export default services;
import { MailerInterface } from "../services/Mailer/MailerInterface";
import ServerInterface from "../services/Server/ServerInterface";

export interface Services {
    server: ServerInterface;
    mailer: MailerInterface;
}
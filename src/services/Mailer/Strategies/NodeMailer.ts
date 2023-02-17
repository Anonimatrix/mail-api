import { MailerInterface, MailOptions } from "../MailerInterface";
import nodemailer from 'nodemailer';
import credentials from "../../../config/mailer";

//Singleton class
export class NodeMailer implements MailerInterface {
    provider: nodemailer.Transporter<any>;
    static instance: NodeMailer;

    private constructor() {
        //Config nodemailer transport
        this.provider = nodemailer.createTransport(credentials);
    }

    static getInstance(): NodeMailer {
        return NodeMailer.instance || (NodeMailer.instance = new NodeMailer());
    }

    async sendMail(mailOptions: MailOptions): Promise<any> {
        await this.provider.sendMail(mailOptions);
    }
}
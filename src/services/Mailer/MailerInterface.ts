import { Attachment } from "nodemailer/lib/mailer";

export interface MailOptions {
    from: string;
    to: string;
    subject: string;
    text: string;
    attachments?: Attachment[];
}

export interface MailerInterface {
    sendMail(mailOptions: MailOptions): Promise<any>;
}
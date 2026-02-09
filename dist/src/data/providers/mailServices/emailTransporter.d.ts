import { EmailContent } from './emailContent.model';
export declare class MailProvider {
    private transporter;
    constructor();
    sendEmailList(contents: EmailContent[]): Promise<void>;
}

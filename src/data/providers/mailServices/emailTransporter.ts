import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { EmailContent } from './emailContent.model';

@Injectable()
export class MailProvider {
  private transporter: nodemailer.Transporter;

  constructor() {
   this.transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true, // Para porta 465 deve ser true
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    
    rejectUnauthorized: false 
      }
    });
  }
   
  async sendEmailList(contents: EmailContent[]): Promise<void> {
    try {
      for (const email of contents) {
        await this.transporter.sendMail({
          from: `"Diogo Blog" <${process.env.MAIL_USER}>`,
          to: email.to.join(', '),
          subject: email.subject,
          html: email.html,
        });
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      throw new InternalServerErrorException('Falha no serviço de e-mail.');
    }
  }
}
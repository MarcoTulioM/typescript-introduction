import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    {name: 'Exemplo1', email: 'exemplo1@email.com'},
    {name: 'Exemplo2', email: 'exemplo2@email.com'}
];

export default {
    async index (req:Request, res:Response) {
        res.json(users);
    },

    async create (rea:Request, res:Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'Exemplo',
                email:'exemplo@email.com'
            },
            message: {
                body: 'Body exempo',
                subject: 'Subject exemplo'
            }
    });
        res.send();
    }
};
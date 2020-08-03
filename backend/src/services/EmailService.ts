interface IMailTo {
    name: String;
    email: String;
}

interface IMailMessage {
    subject: String;
    body: String;
    attachiment?: Array<String>;
    // attachiment?: String[]; 
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

interface IEMailService {
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IEMailService {
    sendMail ({ to, message }: IMessageDTO) {
        console.log(`E-mail enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;
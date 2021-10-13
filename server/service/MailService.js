const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_SMTP_HOST,
      port: process.env.MAIL_SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_SMTP_USER,
        pass: process.env.MAIL_SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    return true;
    // await this.transporter.sendMail({
    //   from: process.env.MAIL_SMTP_USER,
    //   to,
    //   subject: `Активация аккаунта на ${process.env.APP_URL}`,
    //   text: "",
    //   html: `
    //         <div>
    //             <h1>Для активации перейдите по ссылке</h1>
    //             <a href="${link}">${link}</a>
    //         </div>
    //      `,
    // });
  }
}

module.exports = new MailService();

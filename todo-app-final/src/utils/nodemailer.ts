import nodemailer, { SendMailOptions } from 'nodemailer';

import { logger } from './logger';
import { config } from '../config/default';

const smtp = config.smtp;

const transporter = nodemailer.createTransport({
  ...smtp,
  auth: {
    user: smtp.user,
    pass: smtp.pass,
  },
});
// const transporter = nodemailer.createTransport({
//   service: 'hotmail',
//   auth: {
//     user: config.user,
//     pass: config.pass,
//   },
// });

export async function sendEmail(payload: SendMailOptions) {
  transporter.sendMail(payload, (err, info) => {
    if (err) {
      logger.error(`Error sending email: ${err}`);
      return;
    }

    logger.info(`preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  });
}

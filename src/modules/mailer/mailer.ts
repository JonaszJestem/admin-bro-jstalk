import { getConfig } from '../../config';
import nodemailer from 'nodemailer';
import { Address } from 'nodemailer/lib/mailer';
import { getTemplate } from './template';

const FROM = 'JSTalk <no-reply@jstalk.co>';

export const sendMail = async ({
  to,
  content,
  subject,
}: {
  to: Address[];
  content: string;
  subject: string;
}): Promise<void> => {
  const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: getConfig().MAILER_USER,
      pass: getConfig().MAILER_PASSWORD,
    },
  });

  await Promise.all(
    to.map(user =>
      transport.sendMail({
        from: FROM,
        to: user,
        subject,
        html: getTemplate({ firstName: user.name, content }),
      })
    )
  );
};

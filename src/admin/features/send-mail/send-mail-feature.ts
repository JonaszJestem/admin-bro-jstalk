import AdminBro, { BaseRecord, buildFeature } from 'admin-bro';
import { sendMail } from '../../../modules/mailer/mailer';

const SEND_CUSTOMER_MAIL = AdminBro.bundle('./components/SendCustomerMail');
export const sendMailFeature = () =>
  buildFeature({
    actions: {
      sendMail: {
        icon: 'Email',
        component: SEND_CUSTOMER_MAIL,
        actionType: 'bulk',
        handler: async (request, response, context) => {
          const { currentAdmin } = context;
          const records = context.records as BaseRecord[];

          if (request.method === 'post') {
            const content = request.payload?.content;
            const subject = request.payload?.subject;

            await sendMail({
              to: records.map(r => ({
                name: r.params.firstName,
                address: r.params.email,
              })),
              content,
              subject,
            });
          }

          return {
            records: records.map(r => r.toJSON(currentAdmin)),
          };
        },
      },
    },
  });

import AdminBroExpress from '@admin-bro/express';
import MongooseAdapter from '@admin-bro/mongoose';
import AdminBro from 'admin-bro';
import { Express } from 'express';
import { createCustomerResource } from './resources/customer/customer.resource';
import { jsTalkFavico, jsTalkLogo } from './assets/jsTalkLogo';
import { DASHBOARD } from '../modules/dashboard';

const setupAdmin = async (app: Express): Promise<void> => {
  AdminBro.registerAdapter(MongooseAdapter);

  const adminBro = new AdminBro({
    rootPath: '/',
    dashboard: { component: DASHBOARD },
    branding: {
      companyName: 'JS Talk',
      logo: jsTalkLogo,
      favicon: jsTalkFavico,
      theme: {
        colors: {
          primary100: '#28BC92',
          primary80: '#52C8A7',
          primary60: '#7CD5BC',
          primary40: '#A5E0CF',
          primary20: '#CFEDE4',
          // accent
          accent: '#5DF02E',
          hoverBg: '#59bda0',
          // filter
          filterBg: '#003024',
        },
      },
    },
    resources: [createCustomerResource()],
  });

  const router = await AdminBroExpress.buildRouter(adminBro);
  app.use(adminBro.options.rootPath, router);
};

export default setupAdmin;

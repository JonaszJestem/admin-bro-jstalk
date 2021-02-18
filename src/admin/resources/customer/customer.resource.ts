import { ResourceWithOptions } from 'admin-bro';
import { Customer } from './customer.entity';
import { getModelForClass } from '@typegoose/typegoose';
import importExportFeature from '../../features/import-export';
import { sendMailFeature } from '../../features/send-mail/send-mail-feature';

export const createCustomerResource = (): ResourceWithOptions => ({
  resource: getModelForClass(Customer),
  options: {
    listProperties: [
      'salutation',
      'email',
      'firstName',
      'lastName',
      'interestedIn',
      'city',
      'income',
    ],
    navigation: {
      icon: 'User',
      name: null,
    },
  },
  features: [importExportFeature(), sendMailFeature()],
});

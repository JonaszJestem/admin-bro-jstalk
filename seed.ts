import { config as readEnv } from 'dotenv';
import { connectToDatabase } from './src/modules/database/database';
import { getModelForClass } from '@typegoose/typegoose';
import { Customer } from './src/admin/resources/customer/customer.entity';
import { sample } from 'lodash';
import faker from 'faker';
import {
  CustomerCivilStatus,
  CustomerSalutation,
} from './src/admin/resources/customer/customer.enum';

const seed = async () => {
  readEnv();
  await connectToDatabase();

  const Customers = getModelForClass(Customer);

  await Promise.all(
    new Array(100).fill(null).map(async () => {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      await Customers.create({
        birthdate: faker.date.past(),
        city: faker.address.city(),
        salutation: sample(Object.values(CustomerSalutation)),
        firstName: firstName,
        lastName: lastName,
        civilStatus: sample(Object.values(CustomerCivilStatus)),
        email: faker.internet.email(firstName, lastName),
        phone: faker.phone.phoneNumber(),
        street: faker.address.streetName(),
        streetNumber: `${faker.random.number()}/${faker.random.number()}`,
        country: faker.address.country(),
        interestedIn: faker.commerce.department(),
        company: faker.company.companyName(),
        income: faker.finance.amount(2000, 50000, undefined, '$'),
        creditOther: faker.finance.amount(),
        businessNumberOfEmployees: faker.random.number(200),
      });
    })
  );
};

seed();

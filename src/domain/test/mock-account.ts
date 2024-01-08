import { faker } from '@faker-js/faker';

import { AuthenticationParams } from '../usecases/authentication';
import { AccountModel } from '../models/account-model';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccoutnModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
});

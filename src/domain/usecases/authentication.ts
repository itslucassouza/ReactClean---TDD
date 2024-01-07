import { AccountModel } from '../models/account-model';

type AuthentictionParams = {
  email: string;
  password: string;
};

export interface Authentiction {
  auth(params: AuthentictionParams): Promise<AccountModel>;
}

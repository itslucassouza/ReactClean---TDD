import { AccountModel } from "../models/account-model"

type AuthentictionParams = {
    email: String
    password: String
}

export interface Authentiction{
    auth (params: AuthentictionParams): Promise<AccountModel>
}
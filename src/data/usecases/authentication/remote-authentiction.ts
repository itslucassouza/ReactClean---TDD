import { HttpStatusCode } from '@/data/protocols/http/http-response';
import {
  Authentication,
  AuthenticationParams,
} from '../../../domain/usecases/authentication';
import { HttpPostClient } from '../../protocols/http/http-post-client';
import { InvalidCredentialsError } from '@/domain/errors/invalid-crendetials-error';
import { UnexpectedError } from '@/domain/errors/unexpected-error';
import { AccountModel } from '@/domain/models/account-model';

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        // @ts-ignore
        return httpResponse.body;
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}

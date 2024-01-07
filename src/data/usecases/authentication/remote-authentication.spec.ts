import { HttpPostClientSpy } from '../../test/mock-http-client';

import { RemoteAuthentication } from './remote-authentiction';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  test('should call hhtpPostclient with correct URL', async () => {
    const url = 'other_url';
    const { sut, httpPostClientSpy } = makeSut(url);

    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});

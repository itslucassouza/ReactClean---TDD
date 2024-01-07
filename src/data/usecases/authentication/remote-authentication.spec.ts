import { HttpPostClientSpy } from '../../test/mock-http-client';

import { RemoteAuthentication } from './remote-authentiction';

describe('RemoteAuthentication', () => {
  test('should call hhtpPostclient with correct URL', async () => {
    const url = 'any_url';
    const httpPostClientSpy = new HttpPostClientSpy();

    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});

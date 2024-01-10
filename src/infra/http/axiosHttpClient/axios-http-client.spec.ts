import axios from 'axios';
import { faker } from '@faker-js/faker';
import { AxiosHttpClient } from './axios-http-client';
import { HttpPostParams } from '@/data/protocols/http';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedAxiosResult = {
  data: faker.database.collation(),
  status: faker.number.float(),
};

mockedAxios.post.mockResolvedValue(mockedAxiosResult);

const makeSut = (): AxiosHttpClient => new AxiosHttpClient();

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.database.collation(),
});

describe('Axios HttpClient', () => {
  test('Should Call Axios with correct values', async () => {
    const request = mockPostRequest();
    const sut = makeSut();

    sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test('Should return the correct status code and body', async () => {
    const sut = makeSut();

    const httpResponse = await sut.post(mockPostRequest());
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data,
    });
  });
});
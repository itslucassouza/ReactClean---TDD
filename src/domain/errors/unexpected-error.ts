export class UnexpectedError extends Error {
  constructor() {
    super('Algo de errado conteceu. Tente novamente em breve');
    this.name = 'UnexpectedError';
  }
}

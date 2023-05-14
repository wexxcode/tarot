import { v4 as uuid } from 'uuid';

type signInRequestData =  {
  email: string;
  password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount));

export async function signInRequest(data: signInRequestData) {
  await delay();

  return {
    token: uuid(),
    user: {
      name: 'Wesley Pereira',
      email: 'wesley@gmail.com'
    }
  }
}

export async function recoveryUserInformation() {
  await delay()
  return {
    user: {
      name: 'Wesley Pereira',
      email: 'wesley@gmail.com'
    }
  }
}
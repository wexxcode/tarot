import axios from "axios";
import { GetServerSidePropsContext } from "next/types";
import { parseCookies } from 'nookies';

export function getApiClient(ctx?: GetServerSidePropsContext) {
  const { 'token-tarot':token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3333'
  });

  api.interceptors.request.use(config => {
    console.log(config);
    return config;
  })

  if(token) {
    api.defaults.headers['Autorization'] = `Bearer ${token}`;
  }

  return api;
}
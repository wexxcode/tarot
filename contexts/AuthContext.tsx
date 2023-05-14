import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';


import { recoveryUserInformation, signInRequest } from "../services/auth";
import { api } from "services/api";

type User = {
  name: string;
  email: string;
}

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children } : { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'token-tarot':token } = parseCookies();
    if(token){
      recoveryUserInformation().then(response => {
        setUser(response.user)
      });
    }
  },[])

  async function signIn({email, password}: SignInData) {
    const {token, user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, 'token-tarot', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user);

    Router.push('/');
  }
  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}


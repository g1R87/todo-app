import { createContext, useState } from 'react';

export const AuthContext = createContext<null | {
  setAuthData: (authData: any) => void;
  auth: {
    accessToken: string;
    refreshToken: string;
    user: {
      [key: string]: any;
    };
  };
}>(null);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const userPayload = JSON.parse(localStorage.getItem('authdata') || '{}');
  const [auth, setAuth] = useState<any>(userPayload);
  const setAuthData = (authData: any) => {
    setAuth(authData);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuthData }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

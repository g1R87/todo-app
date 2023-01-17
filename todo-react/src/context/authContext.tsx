import { createContext, useState } from 'react';

export const AuthContext = createContext<null | {
  setAuth: (authData: any) => void;
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
  const [auth, setAuth] = useState<any>({});

  const setAuthData = (authData: any) => {
    setAuth(authData);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth: setAuthData }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

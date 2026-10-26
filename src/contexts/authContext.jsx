import { createContext, useState } from "react";

const AuthContext = createContext({
  accessToken: "",
  user: {},
  isAuthenticated: false,
  setAuthData() {},
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const localStorageAuthData = localStorage.getItem("auth");
    if (localStorageAuthData) {
      return JSON.parse(localStorageAuthData);
    }

    return null;
  });

  const setAuthData = (data) => {
    setAuth(data);
  };

  const contextValue = {
    accessToken: auth?.access_token,
    user: auth?.user,
    isAuthenticated: !!auth,
    setAuthData,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;

import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(null); // usertoken au début null
  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
} // Close the AuthProvider component here
export function useAuth() {
  return useContext(AuthContext);
}

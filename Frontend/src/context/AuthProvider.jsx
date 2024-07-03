import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  let initialAuthUser;
  try {
    const storedUser = localStorage.getItem("Users");
    initialAuthUser = storedUser ? JSON.parse(storedUser) : undefined;
  } catch (error) {
    console.error("Failed to parse stored user:", error);
    initialAuthUser = undefined;
  }

  const [authUser, setAuthUser] = useState(initialAuthUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

import React, { memo, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [pending, setPending] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  // another useEffect to stop it from returning the Auth data twice
  useEffect(() => {
    setPending(false);
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

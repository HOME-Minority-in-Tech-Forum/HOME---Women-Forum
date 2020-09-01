import React, { useEffect, useState, useContext } from 'react';
import { auth } from '../firebase';
import { UserContext } from '../providers/UserProvider';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const currentUser = useContext(UserContext);

  console.log(currentUser);

  const [_, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

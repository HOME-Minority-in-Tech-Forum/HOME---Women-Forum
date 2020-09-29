import React, { createContext, useState, useCallback } from "react";
import {
  auth,
  collectIdsAndData,
  createMemberProfileDocument,
} from "../firebase";

export const UserContext = createContext({ currentUser: null });

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  console.log("UserProvider ", currentUser);
  // detect whenever the auth state changes
  // this will update the application state
  const onSubsribe = useCallback(() => {
    // this fires whenever the user go from logged-in to logout vice-versa
    const unsubcribeFromAuth = auth.onAuthStateChanged(async (userInfo) => {
      if (userInfo) {
        const userRef = await createMemberProfileDocument(userInfo);
        userRef.onSnapshot((snapshot) => {
          const user = collectIdsAndData(snapshot);
          setCurrentUser(user);
        });
      }
    });

    return () => unsubcribeFromAuth(); // unsubscribe on unmount
  }, []);

  React.useEffect(() => {
    onSubsribe();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

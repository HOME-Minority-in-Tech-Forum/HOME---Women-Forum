import React, { createContext, useState } from 'react';
import { auth, createMemberProfileDocument } from '../firebase';

export const UserContext = createContext({ user: null });

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  console.log('UserProvider ', currentUser)
  // detect whenever the auth state changes
  // this will update the application state
  const onSubsribe = async () => {
    // this fires whenever the user go from logged-in to logout vice-versa
    const subscriber = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createMemberProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({ user: { uid: snapshot.id, ...snapshot.data() } });
        });
      }
      setCurrentUser({ user: user });
    });

    return subscriber; // unsubscribe on unmount
  };

  React.useEffect(() => {
    onSubsribe();
  }, []);

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
}

export default UserProvider;

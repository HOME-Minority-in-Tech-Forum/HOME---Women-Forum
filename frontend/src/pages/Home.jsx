import React, { useContext } from 'react';
import { auth } from '../firebase';
import { UserContext } from '../providers/UserProvider';

const Home = () => {
  const currentUser = useContext(UserContext);

  /**
   *
   * TODO: this needs to be fixed for authentication
   */

  return (
    <>
      <h1>Home</h1>
      {currentUser ? (
        <button onClick={() => auth.signOut()}>Sign out</button>
      ) : (
        <a href="/login">
          <button>Login</button>
        </a>
      )}
    </>
  );
};

export default Home;

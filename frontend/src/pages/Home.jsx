import React, { useContext } from 'react';
import { auth } from '../firebase';
import { UserContext } from '../providers/UserProvider';
import { withRouter, Redirect } from 'react-router-dom';
const Home = () => {
  const currentUser = useContext(UserContext);

  /**
   *
   * TODO: this needs to be fixed for authentication
   */

  const [state, setState] = React.useState({
    signedIn: true,
    // mentor: false,
  });
  const handleSignOut = () => {
    signOut()
    setState({ ...state, signedIn: false });

  };
  const signOut = () => {
    auth.signOut()
    console.log('hello there signed out')
  }

  const {signedIn} = state;
  
  return (
    <>
      <h1>Home</h1>


      {signedIn ? (
        <>
        <p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>
        <button onClick={() => handleSignOut()}>Sign out</button>
        </>
      ) : (
        <>
        
          <Redirect to="/login" />
        </>
      )}
    </>
  );
};

export default Home;

import React, { useContext } from "react";
import { auth } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import { withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  // I'm retrieving the firstName of the current User by
  // splitting it based on space and grabbing the first index
  // ? => means its optional for the property to exist so it
  // returns null just incase it throws an error
  const firstName = currentUser?.displayName?.split(" ")[0];

  /**
   *
   * TODO: this needs to be fixed for authentication
   */

  // we will use the AuthContext to find if token is not null to determine
  // if user is logged in
  const [state, setState] = React.useState({
    signedIn: true,
  });

  const handleSignOut = () => {
    signOut();
    setState({ ...state, signedIn: false });
  };
  const signOut = () => {
    auth.signOut();
    console.log("hello there signed out");
  };

  return (
    <>
      <h1>Home</h1>

      <>
        <p>Welcome {firstName} You are now signed-in!</p>
        <button onClick={() => handleSignOut()}>Sign out</button>
      </>

      {/* {signedIn && currentUser ? (
      ) : (
        <>
          <Redirect to="/login" />
        </>
      )} */}
    </>
  );
};

export default Home;

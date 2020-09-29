import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { AuthContext } from "../providers/AuthProvider";

const LoginTest = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input
            value={email}
            name="email"
            type="email"
            placeholder="Email"
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label>
          Password
          <input
            value={password}
            name="password"
            type="password"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button type="submit">Log in</button>
        <p>or</p>
        <button
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign In with Google
        </button>
      </form>
    </div>
  );
};

export default withRouter(LoginTest);

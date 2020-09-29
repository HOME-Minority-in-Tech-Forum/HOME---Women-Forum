import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import {
  auth,
  createMemberProfileDocument,
  signInWithGoogle,
} from "../firebase";

const Signup = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      createMemberProfileDocument(
        // we're creating additional properties to store within the users related uid
        user,
        firstName,
        lastName,
      );
      history.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label>
          FirstName
          <input
            value={firstName}
            name="firstName"
            type="text"
            placeholder="firstName"
            onChange={({ target }) => setFirstName(target.value)}
            autoComplete="off"
          />
        </label>
        <label>
          LastName
          <input
            value={lastName}
            name="lastName"
            type="text"
            placeholder="lastName"
            onChange={({ target }) => setLastName(target.value)}
            autoComplete="off"
          />
        </label>
        <label>
          Email
          <input
            value={email}
            name="email"
            type="email"
            placeholder="Email"
            onChange={({ target }) => setEmail(target.value)}
            autoComplete="off"
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
            autoComplete="off"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <p>or</p>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default withRouter(Signup);

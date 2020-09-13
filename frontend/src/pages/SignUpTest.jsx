import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { auth, createMemberProfileDocument, signInWithGoogle } from '../firebase';

const Signup = ({ history, displayName }) => {
  const handleSignup = useCallback(async event => {
    event.preventDefault();

    const { first, last, email, password } = event.target.elements;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );
      createMemberProfileDocument(user, {
        first: first.value,
        last: last.value,
      });
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label>
          FirstName
          <input name="first" type="text" placeholder="firstName" />
        </label>
        <label>
          LastName
          <input name="last" type="text" placeholder="lastName" />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <p>or</p>
        <button
          onClick={() => {signInWithGoogle()}}
        >
          Sign In with Google
        </button>
    </div>
  );
};

export default withRouter(Signup);

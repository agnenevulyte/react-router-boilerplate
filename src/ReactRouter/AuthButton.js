import React from "react";
import { useHistory } from "react-router-dom";
import fakeAuth from "./fakeAuth";

const AuthButton = () => {
  let history = useHistory();
  // console.log("fakeAuth ", fakeAuth.isAuthenticated);
  return fakeAuth.isAuthenticated ? (
    <>
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    </>
  ) : (
    <p>You are not logged in.</p>
  );
};

export default AuthButton;

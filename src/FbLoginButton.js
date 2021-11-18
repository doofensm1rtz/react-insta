import React from "react";
import { FacebookProvider, LoginButton } from "react-facebook";

function FbLoginButton() {
  const handleResponse = (data) => {
    console.log("FB Data", data);
  };

  const handleError = (error) => {
    console.log("FB Error", error);
  };

  return (
    <>
      <FacebookProvider appId="462218928671524">
        <LoginButton
          scope="email"
          onCompleted={handleResponse}
          onError={handleError}
        >
          <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider>
    </>
  );
}

export default FbLoginButton;

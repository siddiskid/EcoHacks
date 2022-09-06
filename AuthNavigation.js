import React, { useState, useEffect } from "react";
import { SignedInStack, SignedOutStack } from "./screens/Navigation";
import firebase from "firebase";
import { Text } from "react-native";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = React.useState(null);

  const userHandler = (user) => {
    user ? setCurrentUser(user) : setCurrentUser(null);
  };

  const inOrOut = () => {
    if (currentUser !== null) return <SignedInStack />;

    return <SignedOutStack />;
  };

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => userHandler(user));
  });

  return <>{inOrOut()}</>;
};

export default AuthNavigation;

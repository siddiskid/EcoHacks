import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import firebase from "firebase";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState(" ");
  const [password, setPassword] = React.useState(" ");
  const [confPassword, setConfPassword] = React.useState(" ");
  const [errorMessage, setErrorMessage] = React.useState(" ");

  const onSignUp = (email, password, confPassword) => {
    if (password !== confPassword) {
      setErrorMessage("Passwords do not match!");
    } else {
      navigation.push("SetInfoScreen", { email: email, password: password });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/back.jpg")}
      >
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          onPress={() => Keyboard.dismiss()}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 100,
              }}
            >
              <Text style={styles.logo}>LOGO</Text>
            </View>
            <View
              behavior="padding"
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ color: "red", fontSize: 15 }}>
                  {errorMessage}
                </Text>
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  onChangeText={(email) => setEmail(email)}
                  style={styles.inputBoxInside}
                  placeholder="Email"
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  onChangeText={(password) => setPassword(password)}
                  style={styles.inputBoxInside}
                  placeholder="Password"
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  onChangeText={(confPassword) => setConfPassword(confPassword)}
                  style={styles.inputBoxInside}
                  placeholder="Confirm Password"
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                  secureTextEntry={true}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => onSignUp(email, password, confPassword)}
                  style={styles.loginButton}
                >
                  <Text style={styles.loginBtnText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backToLogin}
              >
                <Text style={styles.backToLoginText}>Back to Log In</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 50,
    marginBottom: 30,
  },
  inputBox: {
    marginTop: 10,
    height: 60,
    width: 340,
    borderRadius: 30,
    backgroundColor: "#FFF",
    opacity: 0.5,
    justifyContent: "center",
  },
  inputBoxInside: {
    fontSize: 20,
    marginLeft: 20,
  },
  loginButton: {
    marginTop: 10,
    height: 60,
    width: 340,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loginBtnText: {
    fontSize: 20,
  },
  backToLogin: {
    marginTop: 15,
  },
  backToLoginText: {
    fontSize: 15,
  },
  signUpButton: {
    height: 60,
    width: 340,
    borderRadius: 30,
    backgroundColor: "#FFF",
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  signUpText: {
    color: "#000",
    fontSize: 15,
  },
  signUpTextBold: {
    color: "#000",
    fontWeight: "600",
    fontSize: 15,
  },
});
export default SignUpScreen;

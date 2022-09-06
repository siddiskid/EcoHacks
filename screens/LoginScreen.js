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
  Alert,
} from "react-native";
import React, { useState } from "react";
import firebase from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState(" ");
  const [password, setPassword] = React.useState(" ");
  const [errorMessage, setErrorMessage] = React.useState(null);

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("done");
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error.message);
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
              <View>
                <TouchableOpacity
                  onPress={() => onLogin(email, password)}
                  style={styles.loginButton}
                >
                  <Text style={styles.loginBtnText}>Log In</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordText}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    width: "40%",
                    height: 2,
                    backgroundColor: "gray",
                    opacity: 0.5,
                  }}
                ></View>
                <Text>OR</Text>
                <View
                  style={{
                    width: "40%",
                    height: 2,
                    backgroundColor: "gray",
                    justifyContent: "flex-end",
                    opacity: 0.5,
                  }}
                ></View>
              </View>
              <View
                style={{
                  marginBottom: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.push("SignUpScreen")}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.signUpText}>Don't have an account?</Text>
                  <Text style={styles.signUpTextBold}> Sign Up</Text>
                </TouchableOpacity>
              </View>
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
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    fontSize: 15,
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

export default LoginScreen;

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
  Image,
} from "react-native";
import React, { useState } from "react";
import firebase from "../firebase";
import * as ImagePicker from "expo-image-picker";
// import { collection, addDoc, doc, setDoc } from "firebase/firestore";

const SetUsernamePfp = ({ navigation, route }) => {
  const [username, setUsername] = React.useState(" ");
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [image, setImage] = React.useState(null);

  const db = firebase.firestore();

  const createAcc = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const makeRefId = () => {
    let ref = route.params.email.replace("@", "");
    let ref1 = ref.replace(".", "");

    return ref1;
  };

  const setNamePfp = (Username) => {
    db.collection("Users")
      .add({
        ref: makeRefId(),
        Username: Username,
      })
      .then()
      .catch((error) => console.log(error));
    createAcc(route.params.email, route.params.password);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      uploadImage(result.uri)
        .then(() => {
          console.log("done");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    let ref = firebase
      .storage()
      .ref()
      .child(makeRefId() + "/" + "profilePic");
    return ref.put(blob);
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
                  onChangeText={(username) => setUsername(username)}
                  style={styles.inputBoxInside}
                  placeholder="Username"
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                />
              </View>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 5,
                    marginRight: 100,
                  }}
                >
                  {image && (
                    <Image
                      source={{ uri: image }}
                      style={{ width: 70, height: 70 }}
                    ></Image>
                  )}
                </View>
                <TouchableOpacity onPress={pickImage} style={styles.choose}>
                  <Text>Choose profile picture</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => setNamePfp(username)}
                style={styles.getStartedBtn}
              >
                <Text style={styles.getStartedBtnText}>Get started!</Text>
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
  getStartedBtn: {
    marginTop: 20,
    height: 60,
    width: 340,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  getStartedBtnText: {
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
  choose: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SetUsernamePfp;

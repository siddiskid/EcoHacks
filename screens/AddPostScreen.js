import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import colors from "../assets/colors";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import firebase from "../firebase";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";

let today = new Date();

const AddPostScreen = ({ navigation }) => {
  const [image, setImage] = React.useState(null);
  const [caption, setCaption] = React.useState(" ");
  const [token, setToken] = React.useState(
    Math.floor(Math.random() * 10 ** 16 + 1).toString()
  );

  const db = firebase.firestore();
  const user = firebase.auth().currentUser;
  if (user !== null) {
  }
  const email = user.email;

  const makeRef = () => {
    let ref = email.replace("@", "");
    let ref1 = ref.replace(".", "");

    return ref1 + "/posts/";
  };
  const makeRef1 = () => {
    let ref = email.replace("@", "");
    let ref1 = ref.replace(".", "");

    return ref1;
  };

  const pickImage = async ({ navigation }) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      uploadImage(result.uri, token)
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
      .child(makeRef() + token);
    return ref.put(blob);
  };

  const uploadPost = (caption) => {
    db.collection("Posts")
      .doc(token)
      .set({
        imageIdf: token,
        Author: makeRef1(),
        Caption: caption,
        Likes: 0,
        Comments: [{}],
        dateCreated:
          today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear(),
        timeCreated:
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds(),
      })
      .then(
        Alert.alert("Successful", "You have succesfully posted your picture", [
          { text: "Ok", onPress: () => navigation.goBack() },
        ])
      )
      .catch((error) => console.log(error.message));
  };

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={() => Keyboard.dismiss()}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 20,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 20, height: 30 }}
              source={require("../assets/addPostIcons/back.png")}
            />
          </TouchableOpacity>
          <Text style={{ fontWeight: "600", fontSize: 20 }}>New post</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 100,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              left: 20,
            }}
          >
            <View style={{}}>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 150, height: 150 }}
                ></Image>
              )}
            </View>
          </View>
          <TouchableOpacity
            onPress={pickImage}
            style={{
              marginTop: 15,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: 20,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Choose picture to upload
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ position: "absolute", top: 300 }}>
          <Text style={{ marginLeft: 20 }}>Caption</Text>
          <View
            style={{
              marginTop: 10,
              marginLeft: 20,
              height: 100,
              width: 340,
              borderRadius: 10,
              backgroundColor: "#FFF",
              opacity: 0.5,
              justifyContent: "center",
            }}
          >
            <TextInput
              onChangeText={(caption) => {
                setCaption(caption);
              }}
              multiline={true}
              style={{
                fontSize: 20,
                marginLeft: 20,
                textAlignVertical: "top",
              }}
              autoCapitalize="none"
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => uploadPost(caption)}
          style={{
            marginTop: 10,
            height: 60,
            width: 340,
            borderRadius: 30,
            borderWidth: 2,
            borderColor: "#FFF",
            position: "absolute",
            top: 500,
            left: 20,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 20 }}>Post</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddPostScreen;

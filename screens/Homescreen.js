import { View, SafeAreaView, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import Post from "../components/Post";
import Footer from "../components/Footer";
import colors from "../assets/colors";
import firebase from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { collection, getDocs } from "firebase/firestore";
// import { posts } from "../data";

const db = firebase.firestore();

const Homescreen = ({ navigation }) => {
  const [pfpUri, setPfpUri] = React.useState(" ");
  const [posts, setPosts] = useState([]);

  const db = firebase.firestore();
  const user = firebase.auth().currentUser;
  if (user !== null) {
  }
  const email = user.email;

  const makeRef = () => {
    let ref = email.replace("@", "");
    let ref1 = ref.replace(".", "");

    return ref1 + "/";
  };

  console.log(posts);

  let store = firebase
    .storage()
    .ref(makeRef())
    .child("profilePic")
    .getDownloadURL()
    .then((url) => {
      setPfpUri(url);
    })
    .catch((error) => {
      // Handle any errors
    });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
      <Header navigation={navigation} />
      <ScrollView style={{ backgroundColor: colors.primary }}>
        <Post caption={"ehllo"} />
        <Post />
        <Post />
      </ScrollView>
      <Footer pfpUri={pfpUri} />
    </SafeAreaView>
  );
};

export default Homescreen;

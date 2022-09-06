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

const random = () => {
  return new Promise((resolve, reject) => {
    db.collection("Posts")
      .get()
      .then((querySnapshot) => {
        let tempLst = [];
        querySnapshot.forEach((doc) => {
          tempLst.push(doc.data());
          resolve(tempLst);
        });
      });
  });
};

random().then((result) => {
  console.log(result);
});

const Homescreen = ({ navigation }) => {
  const [pfpUri, setPfpUri] = React.useState(" ");

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
        {/* {random().then((result) => {
          forEach((doc) => {
            {
              <Post caption={doc.imageIdf} />;
            }
          });
        })} */}
        <Post caption={"ehllo"} />
        <Post />
      </ScrollView>
      <Footer pfpUri={pfpUri} />
    </SafeAreaView>
  );
};

export default Homescreen;

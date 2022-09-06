import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import colors from "../assets/colors";
import firebase from "../firebase";

const Footer = (props) => {
  return (
    <View>
      <View style={styles.border}></View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={require("../assets/homepageFooterIcons/home.png")}
            style={styles.iconHome}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/homepageFooterIcons/search.png")}
            style={styles.iconSearch}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/homepageFooterIcons/move.png")}
            style={styles.iconMove}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/homepageFooterIcons/home.png")}
            style={styles.iconHome}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.profilePic} source={{ uri: props.pfpUri }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    width: "100%",
    height: 1,
    backgroundColor: colors.dividerColor,
  },
  container: {
    marginTop: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    width: "100%",
    backgroundColor: colors.secondary,
  },
  iconHome: {
    width: 20,
    height: 20,
  },
  iconSearch: {
    width: 25,
    height: 25,
  },
  iconMove: {
    width: 35,
    height: 35,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 5,
    borderBottomWidth: 1,
    borderColor: "black",
  },
});

export default Footer;

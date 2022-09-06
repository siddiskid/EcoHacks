import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../assets/colors";
import React from "react";
import firebase from "../firebase";

const handleSignOut = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log(error);
  }
};

const Header = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleSignOut()}
          style={{ position: "absolute", left: 20 }}
        >
          <Text>LOGO</Text>
        </TouchableOpacity>
        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => {
              navigation.push("AddPostScreen");
            }}
          >
            <Image
              style={styles.iconAdd}
              source={require("../assets/topNavIcons/plus.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>2</Text>
            </View>
            <Image
              style={styles.iconChat}
              source={require("../assets/topNavIcons/messenger.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    backgroundColor: colors.secondary,
  },
  icons: {
    position: "absolute",
    right: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 90,
  },
  iconAdd: {
    width: 28,
    height: 28,
  },
  iconChat: {
    width: 25,
    height: 25,
  },
  unreadBadge: {
    backgroundColor: colors.unreadBadge,
    position: "absolute",
    left: 18,
    bottom: 16,
    width: 20,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },

  unreadBadgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default Header;

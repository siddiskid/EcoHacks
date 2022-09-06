import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import colors from "../assets/colors";

const Post = (props) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={styles.divider}></View>
      <PostHeader />
      <PostPicture />
      <PostFooter />
      <Likes />
      <Caption caption={props.caption} />
      <CommentsSection />
    </View>
  );
};

const PostHeader = () => (
  <View style={styles.postHeader}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity>
        <Image
          style={styles.profilePic}
          source={require("../assets/ab1.jpg")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.profileName}>Anna</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity>
      <Text
        style={{ color: colors.textColor, fontWeight: "900", fontSize: 18 }}
      >
        ...
      </Text>
    </TouchableOpacity>
  </View>
);

const PostPicture = () => (
  <View style={{ width: "100%", height: 350 }}>
    <Image
      style={{ height: "100%", width: "100%", resizeMode: "cover" }}
      source={require("../assets/ba1.jpg")}
    />
  </View>
);

const PostFooter = () => (
  <View
    style={{
      flexDirection: "row",
      width: 75,
      justifyContent: "flex-start",
      justifyContent: "space-between",
    }}
  >
    <Icon
      imgStyle={styles.footerIconHeart}
      imgUrl={require("../assets/postFooterIcons/heart.png")}
    />
    <Icon
      imgStyle={styles.footerIconComment}
      imgUrl={require("../assets/postFooterIcons/comment.png")}
    />
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity style={{ marginLeft: 10, marginTop: 5 }}>
    <Image source={imgUrl} style={imgStyle}></Image>
  </TouchableOpacity>
);

const Likes = () => <Text style={{ marginLeft: 10 }}>1230 likes</Text>;

const Caption = (props) => (
  <View
    style={{
      flexDirection: "row",
      marginLeft: 10,
      marginTop: 3,
      marginRight: 10,
    }}
  >
    <TouchableOpacity>
      <Text style={{ fontWeight: "600" }}>Anna</Text>
    </TouchableOpacity>
    <Text style={{ flex: 1, flexWrap: "wrap" }}>{props.caption}</Text>
  </View>
);

const CommentsSection = () => (
  <View style={{ marginLeft: 10, marginTop: 3 }}>
    <TouchableOpacity>
      <Text style={{ color: "gray" }}>View 1 comment</Text>
    </TouchableOpacity>
  </View>
);

const likePost = () => {};

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.dividerColor,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 5,
    borderWidth: 3,
    borderColor: colors.pfpBorder,
  },
  profileName: {
    color: colors.textColor,
    marginLeft: 7,
    fontWeight: "600",
  },
  footerIconHeart: {
    width: 28,
    height: 28,
  },
  footerIconComment: {
    width: 42,
    height: 42,
    marginTop: -8,
  },
});

export default Post;

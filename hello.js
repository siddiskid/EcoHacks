const db = firebase.firestore();

var posts = [];

db.collection("Posts")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      posts.push(doc.data());
    });
    var tempLst = [];
    for (let i = 0; i < posts.length; i++) {
      tempLst.push(posts[i]);
      console.log(tempLst);
      storeData("Posts", tempLst);
    }
  });

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    // error reading value
  }
};

storeData("Posts", [
  {
    Author: "siddarth_choutlookcom",
    Caption: "hello wassup",
    Comments: [[Object]],
    Likes: 0,
    dateCreated: "4-8-2022",
    imageIdf: "3108472125831376",
    timeCreated: "12:2:23",
  },
  {
    Author: "siddarth_choutlookcom",
    Caption: "heyyyyyyyyyyyyy",
    Comments: [[Object]],
    Likes: 0,
    dateCreated: "4-8-2022",
    imageIdf: "324325025157570",
    timeCreated: "13:40:21",
  },
  {
    Author: "siddarth_choutlookcom",
    Caption: "helloooo",
    Comments: [[Object]],
    Likes: 0,
    dateCreated: "4-8-2022",
    imageIdf: "6235016614494170",
    timeCreated: "6:3:59",
  },
  {
    Author: "siddarth_choutlookcom",
    Caption: "hello again",
    Comments: [[Object]],
    Likes: 0,
    dateCreated: "4-8-2022",
    imageIdf: "4319968593516090",
    timeCreated: "6:3:59",
  },
]);

let a = getData("Posts");
console.log("returnd", a);

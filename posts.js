import firebase from "../firebase";
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

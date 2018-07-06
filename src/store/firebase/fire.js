import firebaseApp from "firebase/app";
import "firebase/database";
import firebaseConfig from "../../resources/config/firebaseconfig";

class Fire {
  constructor() {
    firebaseApp.initializeApp(firebaseConfig);
    this.ref = firebaseApp
      .database()
      .ref(this.dbConfig.rss)
      .orderByKey();
  }
  ref;
  pageSize = 50;
  referenceToOldestKey;
  dbConfig = {
    rss: "jsnews/rss",
    podcast: "jsnews/podcast",
    twitter: "jsnews/twitter"
  };

  async next() {
    try {
      if (this.referenceToOldestKey) {
        const snapshot = await this.ref
          .endAt(this.referenceToOldestKey)
          .limitToLast(51)
          .once("value");
        let arrayOfKeys = Object.keys(snapshot.val())
          .sort()
          .reverse()
          .slice(1);
        this.referenceToOldestKey = arrayOfKeys[arrayOfKeys.length - 1];
        return arrayOfKeys.map(key => snapshot.val()[key]);
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }
  async fireDB() {
    try {
      const snapshot = await this.ref.limitToLast(50).once("value");
      let arrayOfKeys = Object.keys(snapshot.val())
        .sort()
        .reverse()
        .slice(1);
      this.referenceToOldestKey = arrayOfKeys[arrayOfKeys.length - 1];
      console.log(this.referenceToOldestKey);
      return arrayOfKeys.map(key => snapshot.val()[key]);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Fire();

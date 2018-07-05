import firebaseApp from "firebase/app";
import "firebase/database";
import firebaseConfig from "../../resources/config/firebaseconfig";

class Fire {
  constructor() {
    firebaseApp.initializeApp(firebaseConfig);
  }
  dbConfig = {
    rss: "jsnews/rss",
    podcast: "jsnews/podcast",
    twitter: "jsnews/twitter"
  };
  fireDB(db) {
    return firebaseApp
      .database()
      .ref(this.dbConfig[db])
      .orderByKey()
      .limitToLast(100);
  }
}

export default new Fire();

import firebase from "firebase"

const config = {
    apiKey: "AIzaSyCZVsTeQC_mrkpwZxuIOEr-rPDTxdHnZdI",
    authDomain: "boovie-e6283.firebaseapp.com",
    databaseURL: "https://boovie-e6283.firebaseio.com",
    projectId: "boovie-e6283",
    storageBucket: "boovie-e6283.appspot.com",
    messagingSenderId: "820723225526"
};
const fire = firebase.initializeApp(config);

export default fire;


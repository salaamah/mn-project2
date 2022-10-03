// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe7_3PoI0KCQZC7IbNXT6oKf5W_WzFO9Q",
  authDomain: "mn-firebase-auth.firebaseapp.com",
  projectId: "mn-firebase-auth",
  storageBucket: "mn-firebase-auth.appspot.com",
  messagingSenderId: "634869587015",
  appId: "1:634869587015:web:c5b2af5b1de21a9e5ba562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export default app;

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const x = {
  "code":200,"status":"OK",
    "data":{
    "timings":{
      "Fajr":"04:57","Sunrise":"06:15","Dhuhr":"12:10","Asr":"15:34","Sunset":"18:06","Maghrib":"18:06","Isha":"19:36","Imsak":"04:47","Midnight":"00:10","Firstthird":"22:09","Lastthird":"02:12"},
      "date":{
        "readable":"04 Oct 2022","timestamp":"1664830920",
        "hijri":{
          "date":"08-03-1444","format":"DD-MM-YYYY","day":"08",
          "weekday":{
            "en":"Al Thalaata","ar":"\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621"},
            "month":{
              "number":3,"en":"Rab\u012b\u02bf al-awwal","ar":"\u0631\u064e\u0628\u064a\u0639 \u0627\u0644\u0623\u0648\u0651\u0644"}
            , "year":"1444",
              "designation":{
              "abbreviated":"AH","expanded":"Anno Hegirae"},
              "holidays":[]},
              "gregorian":{
                "date":"04-10-2022","format":"DD-MM-YYYY","day":"04",
                "weekday":{"en":"Tuesday"},"month":{"number":10,"en":"October"},"year":"2022","designation":{"abbreviated":"AD","expanded":"Anno Domini"}}},"meta":{"latitude":24.5246542,"longitude":39.5691841,"timezone":"Asia\/Riyadh","method":{"id":4,"name":"Umm Al-Qura University, Makkah","params":{"Fajr":18.5,"Isha":"90 min"},"location":{"latitude":21.3890824,"longitude":39.8579118}},"latitudeAdjustmentMethod":"ANGLE_BASED","midnightMode":"STANDARD","school":"STANDARD","offset":{"Imsak":0,"Fajr":0,"Sunrise":0,"Dhuhr":0,"Asr":0,"Maghrib":0,"Sunset":0,"Isha":0,"Midnight":0}}}}
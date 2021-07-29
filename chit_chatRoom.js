
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyADa6yO4PuR4IAKRRtFXNrwGDNJc1L6D5Y",
    authDomain: "chitchat-part2-d2869.firebaseapp.com",
    databaseURL: "https://chitchat-part2-d2869-default-rtdb.firebaseio.com",
    projectId: "chitchat-part2-d2869",
    storageBucket: "chitchat-part2-d2869.appspot.com",
    messagingSenderId: "549336528087",
    appId: "1:549336528087:web:7d6e92bb2d588cc09b2c92"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

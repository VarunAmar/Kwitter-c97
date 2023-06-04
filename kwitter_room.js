//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB7TIBAWFt_d-mncfybQRz8yhAiQvL9Vyg",
      authDomain: "kwitter-1308d.firebaseapp.com",
      databaseURL: "https://kwitter-1308d-default-rtdb.firebaseio.com",
      projectId: "kwitter-1308d",
      storageBucket: "kwitter-1308d.appspot.com",
      messagingSenderId: "491614455720",
      appId: "1:491614455720:web:771ea98b5f96ed8ee47f9d"
    };

    //Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    document.getElementById("user_name").innerHTML = "Welcome"+localStorage.getItem("user_name")+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + room_name);
      row = "<div class = 'room_name' id = "+Room_names+"onclick= 'redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name "
      });
      localStorage.setItem("room_name", room_name);
      window.location = "msgkwitter_page.html";
}

function redirectToRoomName(name)
{

console.log(name);
localStorage.setItem("room_name", room_name);
window.location = "msgkwitter_page.html";

}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location= "login.html";

}


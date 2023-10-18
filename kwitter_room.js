var firebaseConfig = {
      apiKey: "AIzaSyBLV6QNPbWWHlG5SVSNKKnnLBft7e0-4X0",
      authDomain: "kwitter-cf8ec.firebaseapp.com",
      databaseURL: "https://kwitter-cf8ec-default-rtdb.firebaseio.com",
      projectId: "kwitter-cf8ec",
      storageBucket: "kwitter-cf8ec.appspot.com",
      messagingSenderId: "880958404287",
      appId: "1:880958404287:web:812906e382a24d677c780a"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name'  id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.location = "index.html";
}
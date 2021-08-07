
 var firebaseConfig = {
      apiKey: "AIzaSyCWS8DopXm2oaTnUQnVNI9H6OufBykvJ4U",
      authDomain: "project-zap-a66c2.firebaseapp.com",
      projectId: "project-zap-a66c2",
      storageBucket: "project-zap-a66c2.appspot.com",
      messagingSenderId: "702025365940",
      appId: "1:702025365940:web:12b4acd69eb9e0fefa1ae1",
      measurementId: "G-JEJFPS1TMG"
    };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "zap_room.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      });
});
}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "zap_room.html";
}


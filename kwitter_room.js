
const firebaseConfig = {
      apiKey: "AIzaSyDw0gWXpi4rLjC1l_GkhoqPl6KHiNeLXiA",
      authDomain: "projectchat-44fa4.firebaseapp.com",
      projectId: "projectchat-44fa4",
      storageBucket: "projectchat-44fa4.appspot.com",
      messagingSenderId: "213655936293",
      appId: "1:213655936293:web:03a1a7e2db469f7e9fcecc"
    };


firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       
       console.log("Room Name: " + Room_names)
       row = "<div class='room_name' id="+Room_names+ " onclick='rTRN(this.id)'>" +Room_names+ " </div> <hr>"
       document.getElementById("output").innerHTML += row
      });});}
getData();

function getRoom(){
      roomname = document.getElementById("roomID").value
      localStorage.setItem("roomname", roomname)
      firebase.database().ref("/").child(roomname).update({
      purpose: "adding room"
})
      window.location = "chatpage.html"
}

function rTRN(name){
      localStorage.setItem("roomname", name)
      window.location = "chatpage.html"
}

function logout(){
    localStorage.removeItem("roomname")
    localStorage.removeItem("usernameI")
    window.location = "index.html"
}
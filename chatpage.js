const firebaseConfig = {
  apiKey: "AIzaSyDw0gWXpi4rLjC1l_GkhoqPl6KHiNeLXiA",
  authDomain: "projectchat-44fa4.firebaseapp.com",
  projectId: "projectchat-44fa4",
  storageBucket: "projectchat-44fa4.appspot.com",
  messagingSenderId: "213655936293",
  appId: "1:213655936293:web:03a1a7e2db469f7e9fcecc"
};
  
  
  firebase.initializeApp(firebaseConfig);

  group_name = localStorage.getItem("roomname")
  username = localStorage.getItem("usernameI")

  function send(){
    msg = document.getElementById("msg").value
    firebase.database().ref(group_name).push({
        name:username,
        message:msg,
        likes:0
    })
    document.getElementById("msg").value = ""
  }
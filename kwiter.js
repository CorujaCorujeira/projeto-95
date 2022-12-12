const firebaseConfig = {
    apiKey: "AIzaSyBCQSKHFl8UXef66JGL-gc5t4w0wkWiAno",
    authDomain: "boraconversar-59f4f.firebaseapp.com",
    databaseURL: "https://boraconversar-59f4f-default-rtdb.firebaseio.com",
    projectId: "boraconversar-59f4f",
    storageBucket: "boraconversar-59f4f.appspot.com",
    messagingSenderId: "1077268929561",
    appId: "1:1077268929561:web:f554e6ecf7c6ba26f65e88"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  var user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom(){
    var room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adicionar Sala"
    });
    localStorage.setItem("room_name", room_name);

    window.location="kwiterPage.html";
}

function getData() {
    firebase.database().ref("/").child(room_name).update({
      purpose:"adicionar Sala"  
    })
    localStorage.setItem("room_name", room_name)

    window.location="kwiterPage.html"  
}

function redirectRoomName(name) {
    console.log(name);
    localStorage.setItem("roomName",name);
    window.location="kwitterPage.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

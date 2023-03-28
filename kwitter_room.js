
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDGIsEmoUvLLcr_CyKVOFG695nGTtyez4w",
      authDomain: "bora-conversar.firebaseapp.com",
      projectId: "bora-conversar",
      storageBucket: "bora-conversar.appspot.com",
      messagingSenderId: "95016241353",
      appId: "1:95016241353:web:c72a2023523ee4f4e7a518"
    };
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username")
    document.getElementById("username").innerHTML="bemvindo"+username
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>"; document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function adicionarsala(){
      nomesala=document.getElementById("nomedasala").value;
      firebase.database().ref("/").child(nomedasala).update({
            purpose:"adicionarnomedasala"
      });
      localStorage.setItem("nomedasala",nomesala);
      window.location="conversa.html"
}
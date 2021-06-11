function signup(){
  const email=document.getElementById("email-input").value
  const password=document.getElementById("password-input").value
  document.getElementById("email-input").value=""
  document.getElementById("password-input").value=""
  console.log(" Email : "+email)
  console.log(" Password : "+password) 

  firebase.auth().signInWithEmailAndPassword(email,password)
  .then((user) => {
      alert(" Signup Successfully ")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}

function gotofacebook(){
  location.href="https://www.facebook.com/"
}
function gototwitter(){
  location.href="https://twitter.com/explore"
}

function login(){
  const email=document.getElementById("email-input").value
  const password=document.getElementById("password-input").value
  document.getElementById("email-input").value=""
  document.getElementById("password-input").value=""
  console.log(" Email : "+email)
  console.log(" Password : "+password) 

  firebase.auth().signInWithEmailAndPassword(email,password)
  .then((user) => {
      alert(" Login Successfully ")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}

function gotofacebook(){
  location.href="https://www.facebook.com/"
}
function gototwitter(){
  location.href="https://twitter.com/explore"
}
// function handleMenu(){
//   const getId=document.getElementsByTagName('a')
//  for(let i=0 ;i< getId.length;i++){
//    getId[i].style.display=  'block'
//  }
// }
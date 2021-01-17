// function z(){
//     const naam=document.getElementById("naam-input").value
//     const number=document.getElementById("number-input").value
//     const email=document.getElementById("email-input").value
//     const password=document.getElementById("password-input").value
//     document.getElementById("naam-input").value=""
//     document.getElementById("number-input").value=""
//     document.getElementById("email-input").value=""
//     document.getElementById("password-input").value=""
//     console.log(" Name :",naam)
//     console.log(" Email : ",email)
//     console.log(naam," Number :",number)
//     console.log(" Password : ",password)

//     firebase.auth().createUserWithEmailAndPassword(email,password)
//   .then((user) => {
//       alert(" Signup Successfully ")
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     alert(errorMessage)
//   });
// }

function login(){
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
// function handleMenu(){
//   const getId=document.getElementsByTagName('a')
//  for(let i=0 ;i< getId.length;i++){
//    getId[i].style.display=  'block'
//  }
// }
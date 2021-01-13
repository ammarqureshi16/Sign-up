function singup(){
    var naam=document.getElementById("naam-input").value
    var number=document.getElementById("number-input").value
    var email=document.getElementById("email-input").value
    var password=document.getElementById("password-input").value
    document.getElementById("naam-input").value=""
    document.getElementById("number-input").value=""
    document.getElementById("email-input").value=""
    document.getElementById("password-input").value=""
    console.log("Email : "+email)
    console.log(" Name :"+naam)
    console.log(naam+" Number :"+number)
    console.log("Password : "+password)

    firebase.auth().createUserWithEmailAndPassword(email,password)
  .then((user) => {
      alert(" Signup Successfully ")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}
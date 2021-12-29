 function validate(parametri) {
   var inputElements = document.getElementsByClassName('input');
  if (parametri == 'login') {
  //login
  //qasja e elementeve te para
  var loginElements=document.getElementsByClassName('login-element');
  var emailValue = loginElements[0].value;
  var passwordValue = loginElements[1].value;
  if (emailValue === "" || passwordValue === "") {
    alert("Nuk jane te dhenat e mbushura");
  } else {
    alert("Login success")
  }

  } else if (parametri == 'register') {
  //register
  //qasja e elementeve te dyta
  var registerElements=document.getElementsByClassName('register-element');
  var name=registerElements[0].value;
  var email=registerElements[1].value;
  var pass=registerElements[2].value;

  if (name === "" || email === "" || pass==="") {
    alert("Nuk jane te dhenat e mbushura");
  } else {
    alert("Login success")
  }
}
}


function changeForm(number) {
var format = document.getElementsByClassName('forms');
if (number == 0) {
  format[0].classList.remove("hidden");
  format[0].classList.add("form-style");
  format[1].classList.add("hidden");
  format[1].classList.remove("form-style");
} else {
  format[1].classList.remove("hidden");
  format[1].classList.add("form-style");
  format[0].classList.add("hidden");
  format[0].classList.remove("form-style");
}
}

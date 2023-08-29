let password = document.getElementById("password");
confirm_password = document.getElementById("confirm_password");


 function validatePassword() {
   
   let message = document.getElementById("message");

   if (password.length != 0) {
    if ((confirm_password.value!='') && (password.value != confirm_password.value)) {
      document.getElementById('errorMessage').innerHTML = 'Passwords do not match';
    } else {
      document.getElementById('errorMessage').innerHTML = '';
    }
   }
  }

password.onchange = validatePassword();
confirm_password.onkeyup = validatePassword();
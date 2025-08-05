const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

if(signupForm)
{
  signupForm.addEventListener("submit", function(e){
    e.preventDefault();
    
    let hasError = false;

    const name = document.getElementById("name-input");
    const nameError = document.getElementById("name-error");
    const nameRegex =  /^[a-zA-Z\s'-]+$/;

    if(name.value.trim() == "")
    {
      nameError.innerText = "Name is Required";
      hasError = true;
    }
    else if(!nameRegex.test(name.value.trim()))
    {
      nameError.innerText = "Invalid Name";
      hasError = true;    
    }
    else
    {
      nameError.innerText = "";
    }

    if(!validateEmailPassword())
    {
      hasError = true;
    }

    if(!hasError)
    {
      const email = document.getElementById("email-input").value.trim();
      const password = document.getElementById("password-input").value.trim();
      const userName = name.value.trim();

      localStorage.setItem("saveEmail", email);
      localStorage.setItem("savePassword", password);
      localStorage.setItem("saveName", userName);
      window.location.href = "Login.html"

    }
  });
}

if(loginForm)
{
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    const isValid = validateEmailPassword();
    if(isValid)
    {
      const enteredEmail = document.getElementById("email-input").value.trim();
      const enteredPassword = document.getElementById("password-input").value.trim();
      const saveEmail = localStorage.getItem("saveEmail");
      const savePassword = localStorage.getItem("savePassword");
      if(enteredEmail == saveEmail && enteredPassword == savePassword)
      {
        window.location.href = "Index.html";
        alert("Welcome " +localStorage.getItem("saveName") + " !")
      }
      else{
        alert("Incorrect login credentials");
      }
    }
  });
}

  function validateEmailPassword()
  {
    let valid = true;
    const email = document.getElementById("email-input");
    const emailError = document.getElementById("email-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() == "")
    {
      emailError.innerText = "Email is Required";
      valid = false;      
    }
    else if(!emailRegex.test(email.value.trim()))
    {
      emailError.innerText = "Invalid Email format";
      valid = false;      
    }
    else{
      emailError.innerText = "";
    }

    const password = document.getElementById("password-input");
    const passwordError = document.getElementById("password-error");

    if(password.value.trim() == "")
    {
      passwordError.innerText = "Password is Required";
      valid = false;
    }
    else
    {
      passwordError.innerText = "";
    }
    return valid;
  }
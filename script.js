const formEl = document.querySelector("#userForm");
const usernameEl = document.querySelector("#uname");
const emailEl = document.querySelector("#uemail");
const countryEl = document.querySelector("#ucountry");

//Validate form on submit
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let isUserValid = checkUsername(),
    isEmailValid = checkEmail(),
    isCountryValid = checkCountry();

  let isformValid = isUserValid && isEmailValid && isCountryValid;

  if (isformValid) {
    alert("Form Submit Sucess!!");
    formEl.reset();
  }
});

// Validate field Username and add error if any
function checkUsername() {
  if (!required(usernameEl.value)) {
    addErrors(usernameEl, "Username is Required");
  } else if (!charcLength(usernameEl.value, 2, 65)) {
    addErrors(
      usernameEl,
      "Username must be minimum 2 Character and max 65 characters long"
    );
  } else {
    msgSuccess(usernameEl);
    return true;
  }
}

// Validate field email and add error if any
function checkEmail() {
  if (!required(emailEl.value)) {
    addErrors(emailEl, "Email is Required");
  } else if (!emailRegex(emailEl.value)) {
    addErrors(emailEl, "Please Enter a Valid Email");
  } else {
    msgSuccess(emailEl);
    return true;
  }
}

// Validate field country and add error if any
function checkCountry() {
  if (countryEl.value === "Select") {
    addErrors(countryEl, "Please Select Your Country");
  } else {
    msgSuccess(countryEl);
    return true;
  }
}

// Add error to the element where it occurs and update the class accordingly
const addErrors = (element, error) => {
  let eleErrorParent = element.parentElement;
  let eleError = eleErrorParent.querySelector(".error-msg");
  eleError.classList.add("shown");
  eleError.innerHTML = error;
  element.classList.add("invalid");
};

// When data is correct update the class accordingly and remove any previous error
const msgSuccess = (element) => {
  let eleErrorParent = element.parentElement;
  let eleError = eleErrorParent.querySelector(".error-msg");
  eleError.classList.remove("shown");
  eleError.innerHTML = "";
  element.classList.remove("invalid");
};

//Function to validate required value is there or not
const required = (value) => (value === "" ? false : true);

//Function to validate character length between min and max value
const charcLength = (value, min, max) =>
  value.length >= min && value.length <= max ? true : false;

// Validate Email Id
const emailRegex = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

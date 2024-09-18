// Start Validation Form
import { theName, email, phone, textArea, form, errorDiv } from "./elements.js";

// Function to clear the form inputs
export const clearFormInputs = () => {
  theName.value = "";
  email.value = "";
  phone.value = "";
  textArea.value = "";
};

// ==================================
// Event listener for form submission
export const handleFormSubmit = event => {
  event.preventDefault();
  let incorrectInput = "";

  // Check if name value is not null or undefined
  if (!theName.value) {
    incorrectInput += "Your name cannot be empty.\n";
  } else {
    const firstLetter = theName.value[0];
    const firstLetterIsCapital = firstLetter === firstLetter.toUpperCase();
    const letters = /^[A-Za-z\s]+$/;

    if (!firstLetterIsCapital) {
      incorrectInput += "The first letter of your name must be uppercase.\n";
    } else if (!theName.value.match(letters)) {
      incorrectInput += "Your name must contain only alphabetical characters.\n";
    }
  }

  // Check if email includes (@)
  const emailIncludes = email.value.includes("@");
  if (!emailIncludes) {
    incorrectInput += "Your email must include @.\n";
  }

  // Check if phone number is valid
  const phoneNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{8,14}$/g;
  if (!phone.value.match(phoneNumber)) {
    incorrectInput += "Your phone number must contain only numbers, +, -, (), and be at least 8 digits.\n";
  }

  // Check if the message contains only alphabetical characters
  const message = /^[A-Za-z0-9 .'?!,@$#-_\n\r\s]+$/;
  if (!textArea.value.match(message)) {
    incorrectInput += "Your message must contain only alphabetical characters.\n";
  }

  if (incorrectInput !== "") {
    errorDiv.innerText = incorrectInput;
    errorDiv.style.color = "#fb4545";
  } else {
    // Submit the form data
    form.submit();
    clearFormInputs();
    form.removeEventListener("submit", handleFormSubmit);
  }
};

// Event listener for page show
window.addEventListener("pageshow", event => {
  // Clear form inputs when going back to the page
  if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
    clearFormInputs();
  }
});
// End Validation Form


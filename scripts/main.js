import { tapToTop } from "./tapToTop.js";
import { form, numbers, section, sectionElements } from "./elements.js";
import { observerElements } from "./interSectionObserver.js";
import { clearFormInputs, handleFormSubmit } from "./utilis.js";
import { addSkillsDynamically } from "./skillsDynamically.js";
import { addExperienceDynamically } from "./experience.js";
import { showPopupDetailsLinks } from "./experience.js";
import { countingAutoWhenScroll } from "./statistics.js";


// Activate InterSectionObserver
observerElements(sectionElements);

// =========================================
// Tap To Top
tapToTop();

// =========================================
// Add experience Dynamically
addExperienceDynamically();

// =========================================
// Add Popup
showPopupDetailsLinks()

// =========================================
// Add Skills Dynamically
addSkillsDynamically();

// =========================================
// Start Counting Automatically When scrolling
let started = false;

window.addEventListener("scroll", () => {
  if (section && window.scrollY >= section.offsetTop - 250) {
    if (!started) {
      numbers.forEach(num => {
        if (num) {
          countingAutoWhenScroll(num);
        }
      });
      started = true;
    }
  }
});

// =========================================
// Form Validation
clearFormInputs(); // Function to clear the form inputs
form.addEventListener("submit", handleFormSubmit); // Add event listener for form submission

// ======================================
// Add Border For Contact Input Form
const contactInput = document.querySelectorAll('.contact__input');

contactInput.forEach((input) => {
  input.addEventListener('focus', (event) => {
    event.target.classList.add('border-bottom-input');
  });
  input.addEventListener('blur', (event) => {
    event.target.classList.remove('border-bottom-input');
  });
});

// ======================================
// Get Current Year in Footer
let copyRightYear = document.querySelector('.copy-right');
const currentYear = new Date().getFullYear();

copyRightYear.innerHTML = `سند للمحاماة والاستشارات القانونية © 2011 -${currentYear}`;

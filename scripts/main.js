import { tapToTop } from "./tapToTop.js";
import { form, sectionElements } from "./elements.js";
import { observerElements } from "./interSectionObserver.js";
import { clearFormInputs, handleFormSubmit } from "./utilis.js";
import { switchTheme } from "./switchTheme.js";
import { addSkillsDynamically } from "./skillsDynamically.js";
import { addProjectsDynamically } from "./projects.js";
import { fetchProgrammingNews } from "./newsAPI.js";


// Switch Theme with Local Storage
switchTheme();

// =======================================
// Apply Accessibility For Switch Button 
const toggleLabel = document.querySelector('.toggle__label');

toggleLabel.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.currentTarget.click();
  }
});

// ========================================
// Resize Pic Pio
const bioPic = document.querySelector('.bio__pic');
bioPic.style.width = '26rem'

//=========================================
// Activate InterSectionObserver
observerElements(sectionElements);

// =========================================
// Tap To Top
tapToTop();

// =========================================
// Add Projects Dynamically
addProjectsDynamically();

// =========================================
// Add News API
fetchProgrammingNews();

// =========================================
// Add Skills Dynamically
addSkillsDynamically();

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
let copyRightYear = document.querySelector('.footer__author');
const currentYear = new Date().getFullYear();

copyRightYear.innerHTML = `© ${currentYear} by <span>Ayman Mohammad Ali</span>`;

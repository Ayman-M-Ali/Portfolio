import { observeElements } from './utilis.js';

// Resize Pic Pio
const bioPic = document.querySelector('.bio__pic');
bioPic.style.width = '26rem'

//=========================================

// ObserveInterSections API 
const sectionElements = document.querySelectorAll('section');

observeElements(sectionElements);

// ======================================
// Get Current Year in Footer
let copyRightYear = document.querySelector('.footer__author');
const currentYear = new Date().getFullYear();

copyRightYear.innerHTML = `© ${currentYear} by <span>Ayman Mohammad Ali</span>`;
import { observeElements } from './utilis.js';

// Resize Pic Pio
const bioPic = document.querySelector('.bio__pic');
bioPic.style.width = '26rem';

//=========================================

// ObserveInterSections API 
const sectionElements = document.querySelectorAll('section');

observeElements(sectionElements);

import { observeElements } from './utilis.js';

// Resize Pic Pio
const bioPic = document.querySelector('.bio__pic');
bioPic.style.width = '26rem';

<<<<<<< HEAD
//=========================================
=======
//---
// Add Skill Underline
/* eslint-disable */
//const skillsList = document.querySelectorAll('.skills__list');
//const cbFunction = (skillItem) => {
//  const activeElement = document.querySelector('.underline');
//
//    if (activeElement) {
//      activeElement.classList.remove('underline');
//    }
//
//    skillItem.classList.add('underline');
//  };
//
//skillsList.forEach((skillItem) => {
//  skillItem.addEventListener('click', () => cbFunction(skillItem));
//});
>>>>>>> 53bc3c15343bbfa994f1ea7d800d6a65cb4082ca

// ObserveInterSections API 
const sectionElements = document.querySelectorAll('section');

observeElements(sectionElements);

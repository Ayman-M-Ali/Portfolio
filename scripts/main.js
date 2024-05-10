import { observeElements } from './utilis.js';

// Resize Pic Pio
const bioPic = document.querySelector('.bio__pic');
bioPic.style.width = '26rem'

//=========================================
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

// ObserveInterSections API 
const sectionElements = document.querySelectorAll('section');

observeElements(sectionElements);

// ======================================
// Get Current Year in Footer
let copyRightYear = document.querySelector('.footer__author');
const currentYear = new Date().getFullYear();

copyRightYear.innerHTML = `© ${currentYear} by Ayman Mohammad Ali`;
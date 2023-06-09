const reduxItem = document.querySelector('[data-name=Redux] .skills__title');
const reactTestingLibraryItem = document.querySelector('[data-name=RTL] .skills__title');
reduxItem.innerText = 'Node.js';
reactTestingLibraryItem.innerText = 'MongoDB';

//---

const javascriptItem = document.querySelector('[data-name=Javascript]');
const ssString = `<li class="skills__item">
<h2 class="skills__title" data-name="SASS">SASS</h2>
<span class="skills__years">2 years</span>
</li>`;
javascriptItem.insertAdjacentHTML('afterend', ssString);

//---

const findOutLink = document.querySelector('.find-out-link');
findOutLink.remove();

//---

const bioPic = document.querySelector('.bio__pic');
bioPic.style.width = '26rem';

//---
const skillItem = document.querySelectorAll('.skills__item');
const cbFunction = (item) => {
  const activeElement = document.querySelector('.underline');

  if (activeElement) {
    activeElement.style.borderBottom = 'none';
  }

  item.style = 'border-bottom: 4px solid var(--color-text); width: fit-content';
};
skillItem.forEach((item) => {
  item.addEventListener('click', () => cbFunction(item));
});

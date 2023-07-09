const reduxItem = document.querySelector('[data-name=Redux] .skills__title');
const reactTestingLibraryItem = document.querySelector('[data-name=RTL] .skills__title');
reduxItem.innerText = "Node.js";
reactTestingLibraryItem.innerText = "MongoDB";

//---

const javascriptItem = document.querySelector('[data-name=Javascript]');
const ssString = `<li class="skills__item">
<h2 class="skills__title" data-name="SASS">SASS</h2>
<span class="skills__years">2 years</span>
</li>`;
javascriptItem.insertAdjacentHTML('afterend', ssString); 

//---

const bioPic = document.querySelector('.bio__pic');
bioPic.style.width = "26rem";

//---

const skillItem = document.querySelectorAll('.skills__item');

[...skillItem].map((item) => {
  item.addEventListener("click", () => {
    const activeElement = document.querySelector('.underline');

    if(activeElement) {
      activeElement.classList.remove('underline');
      activeElement.style.borderBottom = "none"
    }

    item.classList.add('underline');
    item.style = "border-bottom: 4px solid var(--color-green); width: fit-content";
  });
})
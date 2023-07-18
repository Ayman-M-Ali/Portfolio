const bioPic = document.querySelector('.bio__pic');
bioPic.style.width = "26rem";

//---

const skillItem = document.querySelectorAll('.skills__item');
const cbFunction = (skillItem) => {
  const activeElement = document.querySelector('.underline');

  if(activeElement) {
  activeElement.classList.remove('underline');
  }

  skillItem.classList.add('underline');
  },

skillItem.forEach((skillItem) => {
skillItem.addEventListener("click", () => cbFunction(skillItem))
});

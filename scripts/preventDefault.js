const contactInput = document.querySelectorAll('.contact__input');

contactInput.forEach((input) => {
  input.addEventListener('focus', (event) => {
    // eslint-disable-next-line no-param-reassign
    event.target.classList.add('border-bottom-input');
  });
  input.addEventListener('blur', (event) => {
    // eslint-disable-next-line no-param-reassign
    event.target.classList.remove('border-bottom-input');
  });
});

//-----

const contactButton = document.querySelector('.contact__button');

contactButton.addEventListener('click', (event) => {
  contactInput.forEach((input) => {
    if (input.value === '') {
      event.preventDefault();
    }
  });
});

//-----

const toggleLabel = document.querySelector('.toggle__label');

toggleLabel.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.currentTarget.click()
  }
})
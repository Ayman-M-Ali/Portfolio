// Add Skill Dynamically
export const addSkillsDynamically = () => {
  const skillsArray = [
    {
      name: 'HTML',
      experience: '2019',
      type: 'frontend',
    },
    {
      name: 'CSS',
      experience: '2019',
      type: 'frontend',
    },
    {
      name: 'Javascript',
      experience: '2021',
      type: 'frontend',
    },
    {
      name: 'React',
      experience: '2022',
      type: 'frontend',
    },
    {
      name: 'Redux',
      experience: '2022',
      type: 'frontend',
    },
    {
      name: 'React Testing Library',
      experience: '2023',
      type: 'frontend',
    },
    {
      name: 'Node.js',
      experience: '2023',
      type: 'backend',
    },
    {
      name: 'Express.js',
      experience: '2023',
      type: 'backend',
    },
    {
      name: 'Mongodb',
      experience: '2023',
      type: 'backend',
    },
  ];
  
  const skillsElement = document.querySelector('#skills');
  const currentYear = new Date().getFullYear();
  const generateListItem = (skillItem) => `<li class="skills__item" data-type=${skillItem.type} data-name=${skillItem.name}>
    <h2 class="skills__title">${skillItem.name}</h2>
    <span class="skills__years">${currentYear - skillItem.experience} years</span>
  </li>`;
  
  const skillItemsString = skillsArray
    .map((skillItem) => generateListItem(skillItem))
    .join('');
  
  const unOrderList = `<ul class="skills__list">${skillItemsString}</ul>`;
  
  skillsElement.insertAdjacentHTML('beforeend', unOrderList);
  
  //======================================
  // Highlight Clicked Item
  const skillsItems = document.querySelectorAll('.skills__item');
  
  skillsItems.forEach((item) => {
    item.addEventListener('click', () => {
      skillsItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('skill-active');
          otherItem.classList.remove('skills__button--isActive');
        }
      });
  
      item.classList.add('skill-active');
      item.classList.add('skills__button--isActive');
    });
  });
  
  //=====================================
  // Add Filter Buttons
  document.querySelectorAll('.skills__button').forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelector('.skills__button--isActive').classList.remove('skills__button--isActive');
      element.classList.add('skills__button--isActive');
      document.querySelector('.skills__list').classList = `skills__list ${element.dataset.type}`;
    });
  });  
}

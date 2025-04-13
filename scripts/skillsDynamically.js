// Add Skill Dynamically
export const addSkillsDynamically = () => {
  const skillsArray = [
    {
      name: 'القانون المدني',
      experience: '2011',
      type: 'frontend',
    },
    {
      name: 'قانون العقوبات',
      experience: '2011',
      type: 'frontend',
    },
    {
      name: 'قانون الأحوال الشخصية',
      experience: '2011',
      type: 'frontend',
    },
    {
      name: 'أصول المحاكمات المدنية',
      experience: '2011',
      type: 'frontend',
    },
    {
      name: 'أصول المحاكمات الجزائية',
      experience: '2011',
      type: 'frontend',
    },
    {
      name: 'قانون البينات',
      experience: '2011',
      type: 'frontend',
    },
    {
      name: 'القانون التجاري',
      experience: '2018',
      type: 'backend',
    },
    {
      name: 'قانون التحكيم',
      experience: '2018',
      type: 'backend',
    },
    {
      name: 'قانون الأحوال المدنية',
      experience: '2012',
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

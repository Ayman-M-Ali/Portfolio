// Add Project Dynamically
const projects = [
  {
    id: 1,
    title: 'Doob Agency',
    type: 'webpage',
    img: '../images/Doob-Agency.jpg',
    alt: "Doob Agency",
    link: 'https://ayman-m-ali.github.io/Doob-Agency/',
  },
  {
    id: 2,
    title: 'Game Agency',
    type: 'webpage',
    img: '../images/Game-Agency.jpg',
    alt: "Game Agency",
    link: 'https://ayman-m-ali.github.io/Game-Agency/',
  },
  {
    id: 3,
    title: 'VBN Landing Page',
    type: 'webpage',
    img: '../images/VBN-landing-page.jpg',
    alt: "VBN Landing Page",
    link: 'https://ayman-m-ali.github.io/VBN-landing-page/',
  },
  {
    id: 4,
    title: 'Image Slider',
    type: 'app',
    img: '../images/Image-Slider.jpg',
    alt: "Image Slider",
    link: 'https://ayman-m-ali.github.io/Image-Slider/',
  },
  {
    id: 5,
    title: 'Todo App',
    type: 'app',
    img: './images/todo-App.jpg',
    alt: "Todo App",
    link: 'https://ayman-m-ali.github.io/Todo-App/',
  },
  {
    id: 6,
    title: 'Random Quotes Generator',
    type: 'app',
    img: '../images/Random-Quotes-Generator.jpg',
    alt: "Random Quotes Generator",
    link: 'https://ayman-m-ali.github.io/Random-Quotes-Generator/',
  },
  {
    id: 7,
    title: 'CC Profits',
    type: 'app',
    img: '../images/CC-Profits.jpg',
    alt: "CC Profits",
    link: 'https://ayman-m-ali.github.io/CC-Profits/',
  },
  {
    id: 8,
    title: 'Age Calculator',
    type: 'app',
    img: '../images/Age-Calculatror.jpg',
    alt: "Age Calculator",
    link: 'https://ayman-m-ali.github.io/Age-Calculator/',
  },
];

const projectElement = document.querySelector('.projects__main');
const generateListItem = (projectItem) => `<li class="projects__item" data-type= ${projectItem.type}>
  <img class="projects__img"
    src="${projectItem.img}"
    alt="${projectItem.alt}"
    loading="lazy"
  />
  <div class="projects__data">
    <a
      href="${projectItem.link}"
      class="projects__links"
      target="_blank"
      >${projectItem.title}</a
    >
  </div>
</li>`;

const projectItemsString = projects
  .map((projectItem) => generateListItem(projectItem))
  .join('');

  const unOrderList = `<ul class="projects__list">${projectItemsString}</ul>`;
  projectElement.insertAdjacentHTML('beforeend', unOrderList);

//======================================
// Add Filter Buttons

const projectButtons = document.querySelectorAll('.projects__buttons .projects__button');

projectButtons.forEach((element) => {
  element.addEventListener('click', () => {
    // Remove active class from all buttons
    projectButtons.forEach(btn => btn.classList.remove('projects__button--isActive'));
    
    // Add active class to the clicked button
    element.classList.add('projects__button--isActive');
    
    // Get the type to filter
    const filterType = element.dataset.type;

    // Filter projects based on type
    const projectItems = document.querySelectorAll('.projects__item');
    projectItems.forEach(item => {
      if (filterType === 'all' || item.dataset.type === filterType) {
        item.style.display = 'block'; // Show item
      } else {
        item.style.display = 'none'; // Hide item
      }
    });
  });
});

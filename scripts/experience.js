// Add Experience Dynamically
export const addExperienceDynamically = () => {
  const experience = [
    {
      id: 1,
      title: 'القانون المدني',
      type: 'القوانين',
      img: './images/القانون-المدني.webp',
      alt: "القانون المدني",
    },
    {
      id: 2,
      title: 'القانون الجزائي',
      type: 'القوانين',
      img: './images/القانون-الجزائي.webp',
      alt: "القانون الجزائي",
    },
    {
      id: 3,
      title: 'الأحوال الشخصية',
      type: 'القوانين',
      img: './images/قانون-الأحوال-الشخصية.webp',
      alt: "الأحوال الشخصية",
    },
    {
      id: 4,
      title: 'قانون البينات',
      type: 'قوانين_الإجراءات',
      img: './images/قانون-البينات.webp',
      alt: "قانون البينات",
    },
    {
      id: 5,
      title: 'أصول المحاكمات المدنية',
      type: 'قوانين_الإجراءات',
      img: './images/أصول-المحاكمات-المدنية.webp',
      alt: "أصول المحاكمات المدنية",
    },
    {
      id: 6,
      title: 'أصول المحاكمات الجزائية',
      type: 'قوانين_الإجراءات',
      img: './images/pexels-pavel-danilyuk-8112136.webp',
      alt: "أصول المحاكمات الجزائية",
    },
    {
      id: 7,
      title: 'قانون العمل',
      type: 'القوانين',
      img: './images/قانون-العمل.webp',
      alt: "قانون العمل",
    },
    {
      id: 8,
      title: 'قانون التحكيم',
      type: 'القوانين',
      img: './images/قانون-التحكيم.webp',
      alt: "قانون التحكيم",
    },
  ];
  
  const experienceElement = document.querySelector('.experience__contain');
  const generateListItem = (experienceItem) => `<li class="experience__item" data-type= ${experienceItem.type}>
    
    <div class="experience__data">
      <a href="#" 
      class="experience__links" 
      data-id="${experienceItem.id}">${experienceItem.title}
      <img class="experience__img"
      src="${experienceItem.img}"
      alt="${experienceItem.alt}"
      loading="lazy"
    />
    <p class="experience__text">اقرأ المزيد..</p>
      </a>
    </div>
  </li>`;
  
  const experienceItemsString = experience
    .map((experienceItem) => generateListItem(experienceItem))
    .join('');
  
    const unOrderList = `<ul class="experience__list">${experienceItemsString}</ul>`;
    experienceElement.insertAdjacentHTML('beforeend', unOrderList);
  
  // Add click event to links
  const experienceLinks = document.querySelectorAll('.experience__links');
    experienceLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.dataset.id;
        showPopupDetailsLinks(id);
    });
  });
}
// ====================================
// Show Details as a popup for each link
export const showPopupDetailsLinks = (id) => {
  const experience__item = [
    {
      id: 1,
      title: 'القانون المدني',
      p: 'إن القانون المدني المنظم لنزاعات الافراد والشركات والمؤسسات التجارية والحكومية ومهمتنا كمحامين رائدين في سوريا عامة ومحامي متميز في حلب خاصة هو ان نتابع كل ما يخص المسائل المدنية والتجارية والمنازعات الايجارية والتعاقدية بين الافراد أو الشركات في مجالات مثل التجارة والممتلكات والملكية الفكرية'
    },
    {
      id: 2,
      title: 'القانون الجزائي',
      p: 'إن القانون الجزائي شرع بهدف ردع الجاني وحماية المجتمع والمحافظة على الحقوق العامة والخاصة وخلال السنوات السابقة تفرد مكتبنا بإنجاز الكثير من الدعاوى'
    },
    {
      id: 3,
      title: 'الأحوال الشخصية',
      p: 'يلعب مكتبنا دورًا مهمًا في تقديم خدمات قانونية متخصصة للأفراد والعائلات. يركز هذا المكتب على قضايا مثل الزواج، الطلاق، الحضانة، والمواريث، مما يجعله وجهة رئيسية لمن يحتاجون إلى دعم قانوني في هذه المجالات الحساسة، حيث نولي أهمية كبيرة للخصوصية المتعلقة بهذه القضايا '
    },
    {
      id: 4,
      title: 'قانون البينات',
      p: 'لما كان جمع وتقديم الأدلة في القضايا كالإثبات والشهادات والمستندات له دور حيوي ومؤثر في سير الدعوى وفي تأكيد صحة الادعاءات أمام المحاكم سعى مكتبنا للعب دور الريادة في تقديم الأدلة واستباطها من خلال الخبرة العميقة والاستراتيجيات الفعالة الأمر الذي مكنه من كسب الكثير من الدعاوى بسرعة وسهولة'
    },
    {
      id: 5,
      title: 'أصول المحاكمات المدنية',
      p: 'يعد مكتبنا واحد من أشد مكاتب المحاماة التزاماً بالمواعيد والمهل وتوقيت وكيفية رفع الدعوى بما يضمن نجاح الدعوى وتحقيق رضا العملاء وذلك بفضل تطوير خطط قانونية متطورة والقدرة على التكيف السريع مع التغييرات في القوانين والإجراءات القضائية'
    },
    {
      id: 6,
      title: 'أصول المحاكمات الجزائية',
      p: 'يتميز مكتبنا في تقديم الدعم القانوني للأفراد المتهمين في القضايا الجنائية. يركز هذا المكتب على الإجراءات المتعلقة بالتحقيقات، والمحاكمات، وحقوق الدفاع حيث يمتلك استراتيجيات دفاع قوية ووجود خطط قانونية متطورة الأمر الذي يحقق نتائج إيجابية للعملاء'
    },
    {
      id: 7,
      title: 'قانون العمل',
      p: 'يتفوق فريقنا القانوني في حل الخلافات بين الموظفين وأصحاب العمل، لخلق بيئة عمل تُحل فيها المشاكل وديًا وتُستغل المعرفة القانونية على أكمل وجه. حيث نستطيع تذليل العقبات بتقديم استشارات قانونية موثوقة، لضمان حماية الحقوق القانونية لجميع الأطراف، ومعالجة الأنشطة غير العادلة وفقًا لأحكام القانون.'
    },
    {
      id: 8,
      title: 'قانون التحكيم',
      p: 'يمارس مكتبنا بتفوق التحكيم التجاري والمدني حيث يلعب دورًا حيويًا في حل النزاعات القانونية خارج نطاق المحاكم التقليدية، مما يوفر الوقت والجهد للأطراف المتنازعة حيث نساعد الشركات ورجال الأعمال في تسوية النزاعات والوصول الى حلول مرضية للأطراف بطرق فعالة بعيدًا عن التعقيدات القضائية'
    },
  ];

const experienceDetail = experience__item.find(item => item.id === parseInt(id));

  if (!experienceDetail) {
    return;
  }

  // Creat a popup
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <div class="popup__content">
      <h2 class="popup__heading">${experienceDetail.title}</h2>
      <p class="popup__text">${experienceDetail.p}</p>
      <button class="popup__close">إغلاق</button>
    </div>
  `;
  
  document.body.appendChild(popup);

  // Add Event for Closing Popup 
  popup.querySelector('.popup__close').addEventListener('click', () => {
    document.body.removeChild(popup);
  });

  // Add Event to Close Popup if Clicking Out it
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      document.body.removeChild(popup);
    }
  });
}

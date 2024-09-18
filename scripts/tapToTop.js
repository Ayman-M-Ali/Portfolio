export const tapToTop = () => {
  const tapToTop = document.querySelector('.tap-to-top');
  window.addEventListener('scroll', function () {
    this.scrollY >= 500 ? tapToTop.classList.add('show') : tapToTop.classList.remove('show');
  });

  tapToTop.addEventListener('click', function (event) {
    window.scrollTo({
      top: 0,
    });
    tapToTop.classList.remove('show');
  });
}
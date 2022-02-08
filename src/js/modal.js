

(() => {
  const mobileMenu = document.querySelector('.mobile-menu--js');
  const openMenuBtn = document.querySelector('.mobile-menu__open--js');
  const closeMenuBtn = document.querySelector('.mobile-menu__close--js');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('mobile-menu--is-open');
    openMenuBtn.classList.toggle('--is-open')
   
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('mobile-menu--is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      
    });
  })();
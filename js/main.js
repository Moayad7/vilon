const header = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        header.classList.add('translate-y-[0px]');
        header.classList.remove('-translate-y-[500px]');

      } else {
        header.classList.remove('translate-y-[0px]');
        header.classList.add('-translate-y-[500px]');

      }
  });
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



  // var swiper = new Swiper(".mySwiper", {
  //   loop: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });

  var swiper = new Swiper(".progress-slide-carousel", {
    loop: true,
    fraction: true,
    autoplay: {
      
      delay: 1200,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".progress-slide-carousel .swiper-pagination",
      type: "progressbar",
    },
  });


  const swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 2.5,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
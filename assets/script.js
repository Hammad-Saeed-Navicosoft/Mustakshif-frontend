
 
//counter  
document.addEventListener('DOMContentLoaded', () => {
const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.getAttribute('data-target');
        let current = 0;
        const duration = 3000; // total animation time in ms
        const steps = 100; // number of steps
        const increment = target / steps;
        const intervalTime = duration / steps;

        const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        el.innerText = formatNumber(Math.round(current));
        }, intervalTime);

        observer.unobserve(el);
    }
    });
}, { threshold: 0.3 });

counters.forEach(counter => observer.observe(counter));

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K+';
    return num;
}
});
 
 
 //sliders for business page last sec cards
  $(document).ready(function(){
    $('.slidingcards').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false
          }
        }
      ]
    });
  });

   //sliders for videos sec home page
  $(document).ready(function(){
    $('.slider-slick-features').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 600,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1756,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 1470,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });
  });

  //sliders for videos sec home page
  $(document).ready(function(){
    $('.slider-slick-videos').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });
  });

  //sliders for certificates sec home page
  $(document).ready(function(){
    $('.slider-slick-certificates').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });
  });

  //sliders for mostviewedvideox sec product
  function initMostViewedSlider() {
  if ($(window).width() < 768) {
    if (!$('.mostviewedvideox').hasClass('slick-initialized')) {
      $('.mostviewedvideox').slick({
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      });
    }
  } else {
    if ($('.mostviewedvideox').hasClass('slick-initialized')) {
      $('.mostviewedvideox').slick('unslick');
    }
  }
}

$(document).ready(function () {
  initMostViewedSlider(); // On load
  $(window).resize(function () {
    initMostViewedSlider(); // On window resize
  });
});


//searchmodal
  function openSearchModal() {
    document.getElementById('searchModal').style.display = 'block';
  }

  function closeSearchModal() {
    document.getElementById('searchModal').style.display = 'none';
  }



  //formmodal
  function openformModal() {
    document.getElementById('form-modal').style.display = 'flex';
  }




//language change

  function toggleLangMenu() {
    const menu = document.getElementById('langMenu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }

  function setLanguage(code, flagCode) {
    document.querySelector('.lang-toggle img').src = `https://flagcdn.com/w40/${flagCode}.png`;
    document.getElementById('langMenu').style.display = 'none';
  }
  window.onclick = function(event) {
    if (!event.target.closest('.lang-dropdown')) {
  const langMenu = document.getElementById('langMenu');
  if (langMenu) {
    langMenu.style.display = 'none';
  }
}

  }


//counter  
document.addEventListener('DOMContentLoaded', () => {
const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.getAttribute('data-target');
        let current = 0;
        const duration = 3000; // total animation time in ms
        const steps = 100; // number of steps
        const increment = target / steps;
        const intervalTime = duration / steps;

        const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        el.innerText = formatNumber(Math.round(current));
        }, intervalTime);

        observer.unobserve(el);
    }
    });
}, { threshold: 0.3 });

counters.forEach(counter => observer.observe(counter));

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K+';
    return num;
}
});

$(document).ready(function() {
  $('.nearby-business-slider').slick({
    slidesToShow: 4, 
    slidesToScroll: 1,
    arrows: true, 
    prevArrow: $('.prev-btn'), 
    nextArrow: $('.next-btn'), 
    autoplay: true, 
    autoplaySpeed: 3000, 
    draggable: true, 
    centerMode: false, 
    focusOnSelect: true, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
  });
});
 $(document).ready(function(){
    $('.slidingcards1').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false
          }
        }
      ]
    });
  });
$(document).ready(function() {
  $('.people-love-grid1').slick({
    slidesToShow: 4, 
    slidesToScroll: 1, 
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 2600, 
    draggable: true, 
    infinite: true, 
    rtl: false, 
    centerMode: false, 
    focusOnSelect: true, 
    responsive: [
      {
        breakpoint: 1300, 
        settings: {
          slidesToShow: 3, 
        }
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
  });
});
$(document).ready(function() {
  $('.people-love-grid2').slick({
    slidesToShow: 4, 
    slidesToScroll: 1, 
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    draggable: true, 
    infinite: true, 
    rtl: false, 
    centerMode: false, 
    focusOnSelect: true, 
    responsive: [
      {
        breakpoint: 1300, 
        settings: {
          slidesToShow: 3, 
        }
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
  });
});
$(document).ready(function() {
  $('.people-love-gridbusiness2').slick({
    slidesToShow: 2, 
    slidesToScroll: 1, 
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    draggable: true, 
    infinite: true, 
    rtl: false, 
    centerMode: false, 
    focusOnSelect: true, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
  });
});
$(document).ready(function() {
  $('.people-love-gridbusiness1').slick({
    slidesToShow: 2, 
    slidesToScroll: 1, 
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 2700, 
    draggable: true, 
    infinite: true, 
    rtl: false, 
    centerMode: false, 
    focusOnSelect: true, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
  });
});
$(document).ready(function() {
  $('.homecategslider').slick({
    slidesToShow: 6, 
    slidesToScroll: 1, 
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 2700, 
    draggable: true, 
    infinite: true, 
    rtl: false, 
    centerMode: false, 
    focusOnSelect: true, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
  });
});
$(document).ready(function() {
  $('.mostviewedVidx-sec').slick({
    slidesToShow: 6, 
    slidesToScroll: 1, 
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    draggable: true, 
    infinite: true, 
    rtl: false, 
    centerMode: false, 
    focusOnSelect: true, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
  });
});


$(document).ready(function() {
  // Initialize Slick slider for screens 768px or below
  function initSlick() {
    if ($(window).width() <= 1024) {
      // Initialize the slider
      if (!$('.mostviewedVidx-sec').hasClass('slick-initialized')) {
        $('.mostviewedVidx-sec').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows:false,
          responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
        });
      }
    } else {
      // Destroy the slider if the window is resized above 768px
      if ($('.mostviewedVidx-sec').hasClass('slick-initialized')) {
        $('.mostviewedVidx-sec').slick('unslick');
      }
    }
  }

  // Run on page load
  initSlick();

  // Run on window resize
  $(window).resize(function() {
    initSlick();
  });
});
$(document).ready(function() {
  // Initialize Slick slider for screens 768px or below
  function initSlick() {
    if ($(window).width() <= 768) {
      // Initialize the slider
      if (!$('.lis-product-slider').hasClass('slick-initialized')) {
        $('.lis-product-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows:false
        });
      }
    } else {
      // Destroy the slider if the window is resized above 768px
      if ($('.lis-product-slider').hasClass('slick-initialized')) {
        $('.lis-product-slider').slick('unslick');
      }
    }
  }

  // Run on page load
  initSlick();

  // Run on window resize
  $(window).resize(function() {
    initSlick();
  });
});
$(document).ready(function() {
  // Initialize Slick slider for screens 768px or below
  function initSlick() {
    if ($(window).width() <= 768) {
      // Initialize the slider
      if (!$('.counter-slidermbl').hasClass('slick-initialized')) {
        $('.counter-slidermbl').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows:false
        });
      }
    } else {
      // Destroy the slider if the window is resized above 768px
      if ($('.counter-slidermbl').hasClass('slick-initialized')) {
        $('.counter-slidermbl').slick('unslick');
      }
    }
  }

  // Run on page load
  initSlick();

  // Run on window resize
  $(window).resize(function() {
    initSlick();
  });
});

// Get all toggle buttons
    document.querySelectorAll('.password-toggle').forEach(button => {
      button.addEventListener('click', () => {
        const group = button.closest('.form-group');
        const input = group.querySelector('.form-input');
        const svg = button.querySelector('svg');

        const eyeOpen = `
          <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path d="M2.458 12C3.732 7.943 7.523 5
          12 5s8.268 2.943 9.542 7c-1.274
          4.057-5.065 7-9.542 7S3.732 16.057
          2.458 12z" />`;

        const eyeClosed = `
          <path d="M17.94 17.94A10.05 10.05 0 0 1 12 19
          c-4.478 0-8.269-2.944-9.542-7a9.97
          9.97 0 0 1 2.292-3.949m1.415-1.415
          A9.96 9.96 0 0 1 12 5c4.478 0 8.269
          2.944 9.542 7a9.972 9.972 0 0 1-4.179
          5.217M15 12a3 3 0 1 1-6 0 3 3 0 0 1
          6 0z" />
          <path d="M3 3l18 18" />`;

        if (input.type === 'password') {
          input.type = 'text';
          svg.innerHTML = eyeClosed;
        } else {
          input.type = 'password';
          svg.innerHTML = eyeOpen;
        }
      });
    });    

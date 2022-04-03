// ! SIDEBAR

const openSidebarBtn = document.querySelector('.open-sidebar-btn');
const closeSidebarBtn = document.querySelector('.close-sidebar-btn');
const sidebar = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

openSidebarBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
  openSidebarBtn.style.display = 'none';
  navbar.style.boxShadow = 'none';
});

closeSidebarBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
  openSidebarBtn.style.display = 'block';
  navbar.style.boxShadow = 'var(--shadow-2)';
});

// ! SLIDER

var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener('load', function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () {
    plusSlides(1);
  }, 3000);
  slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

  slideshowContainer.addEventListener('mouseenter', pause);
  slideshowContainer.addEventListener('mouseleave', resume);
});

function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }

  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlides(n + 2);
    }, 3000);
  } else {
    myTimer = setInterval(function () {
      plusSlides(n + 1);
    }, 3000);
  }
}

function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1);
  }, 3000);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

pause = () => {
  clearInterval(myTimer);
};

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(slideIndex);
  }, 3000);
};

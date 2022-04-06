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

// ! FAQ
// * on récupère les éléments ciblé avec les classes
const btns = document.querySelectorAll('.btn-down');
const answers = document.querySelectorAll('.answers');

// * pour chaque boutons dans le noeud de bouton
btns.forEach((btn) => {
  // * on écoute l'évènement du clique
  btn.addEventListener('click', (e) => {
    // * on cible le data-id du bouton ciblé via l'évènement e et le target
    const questionID = e.target.dataset.id;

    // * pour chaque réponses dans le noeud de réponse
    answers.forEach((answer) => {
      // * on cible le data-id de la réponse
      const answerID = answer.dataset.id;

      // * on vérifie si le data-id de la question est égale au data-id de la réponse
      if (questionID === answerID) {
        // * on ajoute la classe active à la réponse correspondant à la question
        answer.classList.add('active');
      } else {
        // * on retire la classe active à la réponse ne correspondant pas à la question
        answer.classList.remove('active');
      }
    });
  });
});

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
// btnMobile.addEventListener('touchstart', toggleMenu);



function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 100 * i);
  });
}
const p1aparece = document.getElementById('p1-aparece');
const h2aparece = document.getElementById('h2-aparece');
const p2aparece = document.getElementById('p2-aparece');


typeWrite(p1aparece);
typeWrite(h2aparece);
typeWrite(p2aparece);

// scrool
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  }


  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
initScrollSuave();

//jquery

var owl = $('.owl-carousel');
owl.owlCarousel({
  items: 1,
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true
});
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [3000])
})
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})


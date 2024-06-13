//Data Header

const dateBusca = document.querySelector('.dateBusca span')
const dataAtual = new Date();
const dataFormatada = dataAtual.toLocaleDateString();
dateBusca.innerHTML = dataFormatada



//Menu Principal

const imgHamburguer = document.querySelector('.imgHamburguer')
const menuPrincipal = document.querySelector('.menuPrincipal')


imgHamburguer.addEventListener('click',openMenu);

function openMenu() {
    menuPrincipal.classList.toggle('openMenu')
}

window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      menuPrincipal.classList.remove("openMenu");
    }
  });


//Search

const search = document.querySelector('#search')

search.addEventListener('input', function(){
  alert('Ops, ainda estamos trabalhando nisso.')
})

//carrossel

document.addEventListener("DOMContentLoaded", function() {
  let slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  function previous() {
    const firstSlide = slides[0];
    const cloneFirstSlide = firstSlide.cloneNode(true);
    slides[slides.length - 1].after(cloneFirstSlide);
    firstSlide.remove();
    slides = document.querySelectorAll(".slide");
  }

  function next() {
    const lastSlide = slides[slides.length - 1];
    const cloneLastSlide = lastSlide.cloneNode(true);
    slides[0].before(cloneLastSlide);
    lastSlide.remove();
    slides = document.querySelectorAll(".slide");
  }

  prevBtn.addEventListener("click", previous);
  nextBtn.addEventListener("click", next);
});


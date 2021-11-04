const track = document.querySelector('.carousel__track')
const nextButton = document.querySelector('.carousel__button--left')
const prevButton = document.querySelector('.carousel__button--right')
const dotsNav = document.querySelector('.carousel__nav')
const slides = Array.from(track.children)
const dots = Array.from(dotsNav.children)

const slideWidth = slide[0].getBoundingClientRect().width;

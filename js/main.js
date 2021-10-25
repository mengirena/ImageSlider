const slider = document.querySelector('.slider-container'), //QuerySelector return NodeList
      slides = Array.from(document.querySelectorAll('.slide'))
//take an array like object and turn it into array

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0, //request animation frame
    currentIndex = 0

//Prevent the pic from being dragged
slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())
})


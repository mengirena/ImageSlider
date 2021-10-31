const slider = document.querySelector('.slider-container'), //QuerySelector return NodeList
      slides = Array.from(document.querySelectorAll('.slide'))
//take an array like object and turn it into array

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0, //request animation frame
    currentIndex = 0


slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')

    //Prevent the pic from being dragged
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())

    //Touch events
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)
    
    //Mouse events
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
    
})

//Disable context menu, the value of .oncontextmenu is a function which receives an event object as its argument 
// window.oncontextmenu = function (event) {
//     event.preventDefault()
//     event.stopPropagation()
//     return false
// }

function touchStart(index){
    return function(event){
        currentIndex = index
        startPos = getPositionX(event)
        isDragging = true

        //request animation frame, perform an animation, request a call to a specific function
        animationID = requestAnimationFrame(animation) //call it once to kick it off. It also returns an ID which can be used to cancel it. 
        slider.classList.add('grabbing')
    }
}

function touchEnd(){
    isDragging = false
    cancelAnimationFrame(animationID)

    //snap in the next slide
    const movedBy = currentTranslate - prevTranslate
   
    if (movedBy < -100 && currentTranslate < slide.length -1)
    currentTranslate += 1
    
    if (movedBy > 100 && currentTranslate > 0) currentTranslate -= 1
    
    

    slider.classList.remove('grabbing')
}

function touchMove(event){
    if (isDragging){
        console.log("move")
        const currentPosition = getPositionX(event)
        currentTranslate = prevTranslate + currentPosition - startPos
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation(){
    setSliderPosition()
    if (isDragging) requestAnimationFrame(animation) //call the function recursively
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`
}
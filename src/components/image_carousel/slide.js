'use strict'

const slideWrapper = document.querySelector('[data-slide="wrapper"]') 
const slideList = document.querySelector('[data-slide="list"]') 
const navPreviousButton = document.querySelector('[data-slide="slide-btn-prev"]')
const navNextButton = document.querySelector('[data-slide="slide-btn-next"]')
let slideItems = document.querySelectorAll('[data-slide="item"]')


const state = {
    startingPoint: 0,
    savedPosition: 0,
    currentPoint: 0,
    movement: 0,
    currentSlideIndex: 0,
}

function translateSlide({ position }) {
    state.savedPosition = position
    slideList.style.transform = `translateX(${position}px)`
}

function getCenterPosition({ index }) {
    const slideItem = slideItems[index]
    const slideWidth = slideItem.clientWidth
    //const windowWidth = document.body.clientWidth
    const margin = -15
    const position = margin - (index * slideWidth)
    return position
}

function setVisibleSlide({ index, animate }) {
    if(index === 0 || index === slideItems.length - 3) {
        index = state.currentSlideIndex
    }
    const position = getCenterPosition({ index })
    state.currentSlideIndex = index
    slideList.style.transition = animate === true ? 'transform .4s' : 'none'
    translateSlide({position: position})
}

function nextSlide() {
    setVisibleSlide({ index: state.currentSlideIndex + 1, animate: true})
}

function previousSlide() {
    setVisibleSlide({ index: state.currentSlideIndex - 1, animate: true})
}

function createSlideClones() {
    const firstSlide = slideItems[0].cloneNode(true)
    firstSlide.classList.add('slide-cloned')
    firstSlide.dataset.index = slideItems.length

    const secondSlide = slideItems[1].cloneNode(true)
    secondSlide.classList.add('slide-cloned')
    secondSlide.dataset.index = slideItems.length + 1
    
    const thirdSlide = slideItems[2].cloneNode(true)
    thirdSlide.classList.add('slide-cloned')
    thirdSlide.dataset.index = slideItems.length + 2

    const fourthSlide = slideItems[3].cloneNode(true)
    fourthSlide.classList.add('slide-cloned')
    fourthSlide.dataset.index = slideItems.length + 3

    const lastSlide = slideItems[slideItems.length - 1].cloneNode(true)
    lastSlide.classList.add('slide-cloned')
    lastSlide.dataset.index = -1

    const penultimateSlide = slideItems[slideItems.length - 2].cloneNode(true)
    penultimateSlide.classList.add('slide-cloned')
    penultimateSlide.dataset.index = -2
  
    slideList.append(firstSlide)
    slideList.append(secondSlide)
    slideList.append(thirdSlide)
    slideList.append(fourthSlide)

    slideList.prepend(lastSlide)
    slideList.prepend(penultimateSlide)
    

    slideItems = document.querySelectorAll('[data-slide="item"]')
}

function onMouseDown(event, index) {
    const slideItem = event.currentTarget
    state.startingPoint = event.clientX
    state.currentPoint = event.clientX - state.savedPosition
    state.currentSlideIndex = index
    slideList.style.transition = 'none'
    slideItem.addEventListener('mousemove', onMouseMove)
}

//função não usada, serve para deslocar os slides com dragmouse, caso precisar usar, solucionar bug de nao pegar o slide infinito
function onMouseMove(event) {
    //linhas de codigo que fazem com que a transição no drag seja de um e um item do carrosel (arrumar caso necessario o uso)
    /*if (state.movement < -100){
        nextSlide()  
    } else if (state.movement > 100) {
        prevSlide()
    } else {
        setVisibleSlide({state.currentSlideIndex, animate: true})
    }
    state.movement = 0
    const slideItem = event.currentTarget
    state.movement = event.clientX - state.startingPoint
    const position = event.clientX - state.currentPoint
    translateSlide({ position })*/
}

function onMouseUp(event) {
    const slideItem = event.currentTarget
    slideItem.removeEventListener('mousemove', onMouseMove)
}

function onSlideListTransitionEnd() {
    const slideItem = slideItems[state.currentSlideIndex]
    
    if(slideItem.classList.contains('slide-cloned') && Number(slideItem.dataset.index) > 0) {
        setVisibleSlide({ index: 2, animate: false })
    }
    if(slideItem.classList.contains('slide-cloned') && Number(slideItem.dataset.index) < 0) {
        setVisibleSlide({ index: slideItems.length - 5, animate: false })
    }
}


function setListeners() {
    slideItems.forEach(function(slideItem, index) {
        slideItem.addEventListener('dragstart', function(event) {
            event.preventDefault()
        })
        slideItem.addEventListener('mousedown', function(event) {
            onMouseDown(event, index)
        })
        slideItem.addEventListener('mouseup', onMouseUp)

    })
    navNextButton.addEventListener('click', nextSlide)
    navPreviousButton.addEventListener('click', previousSlide)
    slideList.addEventListener('transitionend', onSlideListTransitionEnd)
}

function initSlider() {
    createSlideClones()
    setListeners()
    setVisibleSlide({ index: 2, animate: true })
}

initSlider()
/*------------------------------------------------ START PRODUCTS CAROUSEL --------------------------------------------------*/
const imageCarouselProduct = document.createElement('div');

imageCarouselProduct.innerHTML = `
    <style>   
        .slide-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            justify-content: space-between;
            width: 1110px;
            height: 240px;
            overflow: hidden; 
            position: relative;
        }

        .slide-list {
            display: flex;
        }

        .slide-item {
            flex-shrink: 0;
            padding: 0 15px;
        }

        .slide-content > img {
            width: 100%;
            border-radius: 6px;
        }

        .slide-btn {
            margin-bottom: 65px;
            position: absolute;
            z-index: 1;
            border: none;
            cursor: pointer;
        }

        .slide-btn {
            width: 30px;
            height: 172px;
            background: rgba(217, 217, 217, 0.5);
        }

        .slide-btn-prev {
            left: 0;
            border-radius: 6px 0px 0px 6px;
        }

        .slide-btn-next {
            right: 0;
        }

        .slide-btn-next > img {
            transform: rotate(180deg);
        }
    </style>
  
    <div class="wrapper">
        <div class="slide-wrapper" data-slide="wrapper">
            <button class="slide-btn slide-btn-prev" data-slide="slide-btn-prev">
                <img src="../../assets/icons/btn_slider_left--2.svg" alt="btn previous">
            </button>
            <button class="slide-btn slide-btn-next" data-slide="slide-btn-next">
                <img src="../../assets/icons/btn_slider_left--2.svg" alt="btn next">
            </button>
            <div class="slide-list" data-slide="list">
                <div class="slide-item" data-slide="item" data-index="0">
                    <a href="../../pages/page_product_single/index.html">
                        <div class="slide-content">
                            <img src="../../assets/images/product_slider.svg" alt="Balm Barba de Respeito">
                            <div class="slide-description">
                                <h3 class="font_slide-h2 color_secundary">Balm Barba de Respeito 100g</h3>
                                <p class="font_slide-descri color_gray-dark">R$69,90</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="slide-item" data-slide="item" data-index="1">
                    <a href="../../pages/page_product_single/index.html">
                        <div class="slide-content">
                            <img src="../../assets/images/product_slider.svg" alt="Kit de Hidratação para Barba">
                            <div class="slide-description">
                                <h3 class="font_slide-h2 color_secundary">Kit de Hidratação para Barba</h3>
                                <p class="font_slide-descri color_gray-dark">R$ 76,32</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="slide-item" data-slide="item" data-index="2">
                    <a href="../../pages/page_product_single/index.html">
                        <div class="slide-content">
                            <img src="../../assets/images/product_slider.svg" alt="Kit Deu Match!">
                            <div class="slide-description">
                                <h3 class="font_slide-h2 color_secundary">Kit Deu Match! Para Barba com(Matt...</h3>
                                <p class="font_slide-descri color_gray-dark">R$ 199,99</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="slide-item" data-slide="item" data-index="3">
                    <a href="../../pages/page_product_single/index.html">
                        <div class="slide-content">
                            <img src="../../assets/images/product_slider.svg" alt="Balm para Barba Casa Barros">
                            <div class="slide-description">
                                <h3 class="font_slide-h2 color_secundary">Balm para Barba Casa Barros - 120G</h3>
                                <p class="font_slide-descri color_gray-dark">R$ 65,00 </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="slide-item" data-slide="item" data-index="4">
                    <a href="../../pages/page_product_single/index.html">
                        <div class="slide-content">
                            <img src="../../assets/images/product_slider.svg" alt="Shampoo Escurecedor de Cabelo">
                            <div class="slide-description">
                                <h3 class="font_slide-h2 color_secundary">Shampoo Escurecedor de Cabelo - Th...</h3>
                                <p class="font_slide-descri color_gray-dark">R$ 69,90</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
`;

const bodyElementsProduct = document.getElementsByClassName('carousel-product');

Array.from(bodyElementsProduct).forEach(function (element) {
    const imageCarouselElement = document.createElement('div');
    imageCarouselElement.innerHTML = imageCarouselProduct.innerHTML;
    element.appendChild(imageCarouselElement);

    const sliderProduct = initSlider(imageCarouselElement);
    
});
/*------------------------------------------------ END PRODUCTS CAROUSEL --------------------------------------------------*/ 

/*------------------------------------------------ START BARBERSHOP CAROUSEL --------------------------------------------------*/ 
const imageCarouselBarbershop = document.createElement('div');

imageCarouselBarbershop.innerHTML = `

<style>   
    .slide-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-content: space-between;
        width: 1110px;
        height: 240px;
        overflow: hidden; 
        position: relative;
    }

    .slide-list {
        display: flex;
    }

    .slide-item {
        flex-shrink: 0;
        padding: 0 15px;
    }

    .slide-content > img {
        width: 100%;
        border-radius: 6px;
    }

    .slide-btn {
        margin-bottom: 65px;
        position: absolute;
        z-index: 1;
        border: none;
        cursor: pointer;
    }

    .slide-btn {
        width: 30px;
        height: 172px;
        background: rgba(217, 217, 217, 0.5);
    }

    .slide-btn-prev {
        left: 0;
        border-radius: 6px 0px 0px 6px;
    }

    .slide-btn-next {
        right: 0;
    }

    .slide-btn-next > img {
        transform: rotate(180deg);
    }
</style>
  
    <div class="wrapper">
        <div class="slide-wrapper" data-slide="wrapper">
            <button class="slide-btn slide-btn-prev" data-slide="slide-btn-prev">
                <img src="../../assets/icons/btn_slider_left--2.svg" alt="btn previous">
            </button>
            <button class="slide-btn slide-btn-next" data-slide="slide-btn-next">
                <img src="../../assets/icons/btn_slider_left--2.svg" alt="btn next">
            </button>
            <div class="slide-list" data-slide="list">
                <div class="slide-item" data-slide="item" data-index="0">
                    <a href="../../pages/barbershop_single/index.html">
                        <div class="slide-content">
                            <img src="../../assets/images/barbershop_slider.svg" alt="Barbearia_Perdomo">
                            <div class="slide-description">
                                <h3 class="font_slide-h2 color_secundary">Barbearia Perdomo</h3>
                                <p class="font_slide-descri color_gray-dark">Rua do Magistério, 344, 85875-000,<br>Santa Terezinha de Itaipu</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="slide-item" data-slide="item" data-index="1">
                    <a href="../../pages/barbershop_single/index.html">
                        <div class="slide-content">
                            <img src="../../assets/images/barbershop_slider.svg" alt="Renovo_Barbershop">
                            <div class="slide-description">
                                <h3 class="font_slide-h2 color_secundary">Renovo Barbershop</h3>
                                <p class="font_slide-descri color_gray-dark">Rua Edmundo de Barros,<br>163, 1, 85856-310, Foz do Iguaçu</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="slide-item" data-slide="item" data-index="2">
                    <a href="../../pages/barbershop_single/index.html">
                        <div class="slide-content">
                            <img src="../../assets/images/barbershop_slider.svg" alt="Original_Barbearia-e-Lavacar">
                            <div class="slide-description">
                                <h3 class="font_slide-h2 color_secundary">Original Barbearia e Lavacar</h3>
                                <p class="font_slide-descri color_gray-dark">Rua Emilio de Menezes,<br>497, 85864-240, Foz do Iguaçu</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="slide-item" data-slide="item" data-index="3">
                    <a href="../../pages/barbershop_single/index.html">
                        <div class="slide-content">
                            <img src="../../assets/images/barbershop_slider.svg" alt="Barbearia_Alexandre_Santos">
                            <div class="slide-description">
                                <h3 class="font_slide-h2 color_secundary">Barbearia Alexandre Santos</h3>
                                <p class="font_slide-descri color_gray-dark">Rua Iraque, N 70, 13315-000,<br>Cabreúva</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="slide-item" data-slide="item" data-index="4">
                    <a href="../../pages/barbershop_single/index.html">
                        <div class="slide-content">
                            <img src="../../assets/images/barbershop_slider.svg" alt="Black_White_BarberShop">
                            <div class="slide-description">
                                <h3 class="font_slide-h2 color_secundary">Black White Barber Shop</h3>
                                <p class="font_slide-descri color_gray-dark">Av Felipe Wandscheer, 1426, 85863-730,<br>Foz do Iguaçu</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
`;

const bodyElementsBarbershop = document.getElementsByClassName('carousel-barbershop');

Array.from(bodyElementsBarbershop).forEach(function (element) {
        const imageCarouselElement = document.createElement('div');
        imageCarouselElement.innerHTML = imageCarouselBarbershop.innerHTML;
        element.appendChild(imageCarouselElement);
    
        const sliderBarbershop = initSlider(imageCarouselElement);
});
/*------------------------------------------------ END BARBERSHOP CAROUSEL --------------------------------------------------*/ 

function initSlider(carouselElement) {
    const slideWrapper = carouselElement.querySelector('.slide-wrapper');
    const slideList = carouselElement.querySelector('[data-slide="list"]');
    const navPreviousButton = carouselElement.querySelector('[data-slide="slide-btn-prev"]');
    const navNextButton = carouselElement.querySelector('[data-slide="slide-btn-next"]');
    let slideItems = Array.from(carouselElement.querySelectorAll('[data-slide="item"]'));

    const state = {
        startingPoint: 0,
        savedPosition: 0,
        currentPoint: 0,
        movement: 0,
        currentSlideIndex: 0,
    };

    function translateSlide({ position }) {
        state.savedPosition = position;
        slideList.style.transform = `translateX(${position}px)`;
    }

    function getCenterPosition({ index }) {
        const slideItem = slideItems[index];
        const slideWidth = slideItem.clientWidth;
        const margin = -15;
        const position = margin - index * slideWidth;
        return position;
    }

    function setVisibleSlide({ index, animate }) {
        if (index === 0 || index === slideItems.length - 3) {
            index = state.currentSlideIndex;
        }
        const position = getCenterPosition({ index });
        state.currentSlideIndex = index;
        slideList.style.transition = animate === true ? 'transform .4s' : 'none';
        translateSlide({ position });
    }

    function nextSlide() {
        setVisibleSlide({ index: state.currentSlideIndex + 1, animate: true });
    }

    function previousSlide() {
        setVisibleSlide({ index: state.currentSlideIndex - 1, animate: true });
    }

    function createSlideClones() {
        const firstSlide = slideItems[0].cloneNode(true);
        firstSlide.classList.add('slide-cloned');
        firstSlide.dataset.index = slideItems.length;

        const secondSlide = slideItems[1].cloneNode(true);
        secondSlide.classList.add('slide-cloned');
        secondSlide.dataset.index = slideItems.length + 1;

        const thirdSlide = slideItems[2].cloneNode(true);
        thirdSlide.classList.add('slide-cloned');
        thirdSlide.dataset.index = slideItems.length + 2;

        const fourthSlide = slideItems[3].cloneNode(true);
        fourthSlide.classList.add('slide-cloned');
        fourthSlide.dataset.index = slideItems.length + 3;

        const lastSlide = slideItems[slideItems.length - 1].cloneNode(true);
        lastSlide.classList.add('slide-cloned');
        lastSlide.dataset.index = -1;

        const penultimateSlide = slideItems[slideItems.length - 2].cloneNode(true);
        penultimateSlide.classList.add('slide-cloned');
        penultimateSlide.dataset.index = -2;

        slideItems = [lastSlide, penultimateSlide, ...slideItems, firstSlide, secondSlide, thirdSlide, fourthSlide];
        slideList.innerHTML = '';
        slideItems.forEach((slideItem) => {
            slideList.appendChild(slideItem);
        });
    }

    function onMouseDown(event, index) {
        const slideItem = event.currentTarget;
        state.startingPoint = event.clientX;
        state.currentPoint = event.clientX - state.savedPosition;
        state.currentSlideIndex = index;
        slideList.style.transition = 'none';
        // slideItem.addEventListener('mousemove', onMouseMove);
    }
    //função nao utilizada serve para mover o slide arrastando o mouse (caso usar solucionar bug, slide infinito nao funciona)
    /*
    function onMouseMove(event) {
        const slideItem = event.currentTarget;
        state.movement = event.clientX - state.startingPoint;
        const position = event.clientX - state.currentPoint;
        translateSlide({ position });
    }*/

    function onMouseUp(event) {
        const slideItem = event.currentTarget;
        slideItem.removeEventListener('mousemove', onMouseMove);
    }

    function onSlideListTransitionEnd() {
        const slideItem = slideItems[state.currentSlideIndex];

        if (slideItem.classList.contains('slide-cloned') && Number(slideItem.dataset.index) > 0) {
            setVisibleSlide({ index: 2, animate: false });
        }
        if (slideItem.classList.contains('slide-cloned') && Number(slideItem.dataset.index) < 0) {
            setVisibleSlide({ index: slideItems.length - 5, animate: false });
        }
    }

    function setListeners() {
        slideItems.forEach(function (slideItem, index) {
            slideItem.addEventListener('dragstart', function (event) {
                event.preventDefault();
            });
            slideItem.addEventListener('mousedown', function (event) {
                onMouseDown(event, index);
            });
            slideItem.addEventListener('mouseup', onMouseUp);
        });
        navNextButton.addEventListener('click', nextSlide);
        navPreviousButton.addEventListener('click', previousSlide);
        slideList.addEventListener('transitionend', onSlideListTransitionEnd);
    }

    function initSlider() {
        createSlideClones();
        setListeners();
        setVisibleSlide({ index: 0, animate: true });
    }

    initSlider();

    // Retorna o objeto contendo os elementos e referências relevantes do slide
    return {
        slideWrapper,
        slideList,
        navPreviousButton,
        navNextButton,
        slideItems,
        translateSlide,
        setVisibleSlide,
        nextSlide,
        previousSlide,
        createSlideClones,
        onMouseDown,
        // onMouseMove,
        onMouseUp,
        onSlideListTransitionEnd,
        setListeners,
        initSlider
    };
}



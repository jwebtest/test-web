
function menuClicked(){
    disableScroll();
    var menuscreen = document.getElementById('menuscreen');
    if (menuscreen) {
        menuscreen.classList.add('show');
        menuscreen.classList.remove('disappear');
    }
}

function menuClosed(){
    enableScroll();
    var menuscreen = document.getElementById('menuscreen');
    if (menuscreen) {
        menuscreen.classList.remove('show');
        menuscreen.classList.add('disappear');
    }
}

function menupageClicked(){
    window.location.href = 'menupage.html';
}

function locationpageClicked(){
    window.location.href = 'locationpage.html';
}

function contactpageClicked(){
    window.location.href = 'contactpage.html';
}

function instagrampageClicked(){
    window.location.href = 'https://www.instagram.com';
}

function xpageClicked(){
    window.location.href = 'https://x.com';
}

function home(){
    window.location.href = 'index.html';
}




//Enabling and disabling the screen movement

function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
}




//Make elements appear and disappear

function hideElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
    }
}

function unhideElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'block';
    }
}



// --------------Carrusel
document.addEventListener('DOMContentLoaded', () => {
    const carouselSlides = Array.from(document.querySelectorAll('.carousel-slide'));
    const fullscreenCarousel = document.getElementById('fullscreenCarousel');
    const fullscreenTrack = document.getElementById('fullscreenTrack');
    const closeBtn = document.getElementById('closeBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    const updateFullscreenTrack = (index) => {
        const offset = -index * 100;
        fullscreenTrack.style.transform = `translateX(${offset}%)`;
        updateArrowVisibility();
    };

    const updateArrowVisibility = () => {
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = currentIndex === carouselSlides.length - 1 ? 'none' : 'block';
    };

    const openFullscreen = (index) => {
        currentIndex = index;
        fullscreenTrack.innerHTML = '';
        carouselSlides.forEach((slide, idx) => {
            const slideClone = slide.cloneNode(true);
            slideClone.classList.add('fullscreen-slide');
            if (idx !== index) {
                slideClone.classList.remove('current-slide');
            }
            fullscreenTrack.appendChild(slideClone);
        });
        updateFullscreenTrack(index);
        fullscreenCarousel.style.display = 'flex';
        updateArrowVisibility(); 
    };

    const closeFullscreen = () => {
        fullscreenCarousel.style.display = 'none';
    };

    const showPrevSlide = () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateFullscreenTrack(currentIndex);
            updateArrowVisibility();
        }
    };

    const showNextSlide = () => {
        if (currentIndex < carouselSlides.length - 1) {
            currentIndex++;
            updateFullscreenTrack(currentIndex);
            updateArrowVisibility();
        }
    };

    // Attach event listeners
    carouselSlides.forEach((slide, index) => {
        slide.addEventListener('click', () => openFullscreen(index));
    });

    closeBtn.addEventListener('click', closeFullscreen);
    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);
});



//--------------Loop

var x = 1;
var dragDetect = true;

var swipe = document.getElementById('swipe');

function playLoop() {
    if(dragDetect)
    {
        if(x){
            swipe.classList.add('loop');
            x-=1;
        }
        else{
            swipe.classList.remove('loop');
            x+=1;
        }
    }
}

function stopLoop(){
    dragDetect = false;
    if(!x){
    swipe.classList.remove('loop');
    }

    swipe.classList.add('stoploop');
}

setInterval(playLoop, 2000);




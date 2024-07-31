
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




//--------------Carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const slideMargin = parseFloat(getComputedStyle(slides[0]).marginLeft) * 2; // Margin on both sides

let startX, currentX, isDragging = false, currentIndex = 0, currentTranslate = 0, prevTranslate = 0;

// Arrange slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = (slideWidth + slideMargin) * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (targetIndex) => {
    const amountToMove = (slideWidth + slideMargin) * targetIndex;
    track.style.transform = `translateX(-${amountToMove}px)`;
    slides[currentIndex].classList.remove('current-slide');
    slides[targetIndex].classList.add('current-slide');
    currentIndex = targetIndex;
};

const getPositionX = event => event.touches[0].clientX;

const animation = () => {
    track.style.transform = `translateX(${currentTranslate}px)`;
    if (isDragging) requestAnimationFrame(animation);
};

track.addEventListener('touchstart', (e) => {
    stopLoop();
    startX = getPositionX(e);
    isDragging = true;
    animation();
    track.style.transition = 'none';
    prevTranslate = currentTranslate;
});

track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = getPositionX(e);
    const distance = currentX - startX;
    currentTranslate = prevTranslate + distance;
    
    // Prevent moving past the first slide
    if (currentTranslate > 0) {
        currentTranslate = 0;
    }

    // Prevent moving past the last slide
    const maxTranslate = -((slideWidth + slideMargin) * (slides.length - 1));
    if (currentTranslate < maxTranslate) {
        currentTranslate = maxTranslate;
    }
});

track.addEventListener('touchend', (e) => {
    isDragging = false;
    track.style.transition = 'transform 0.5s ease-out';
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentIndex < slides.length - 1) {
        moveToSlide(currentIndex + 1);
    } else if (movedBy > 50 && currentIndex > 0) {
        moveToSlide(currentIndex - 1);
    } else {
        moveToSlide(currentIndex);
    }
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




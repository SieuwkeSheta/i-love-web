// Bewaar product knop
// Stap 1: selecteer het hartje
const saveButton = document.querySelector('.save-product-button')

// Stap 2: Wacht tot gebruiker op hartje klikt
saveButton.addEventListener('click', saveProduct)

function saveProduct() {
    // Stap 3: toggle classname voor het veranderen van kleur van hartje en laat het bonken
    saveButton.classList.toggle('active')
}


// Media gallerij images
// Stap 1: selecteer de grote en kleine images
const bigImg = document.querySelector('.big-image')
// const smallImg = document.querySelectorAll('.small-image')
const smallImgRadioBtns = document.querySelectorAll('[name="img-thumbnail-active"]')


// Stap 2: Wacht tot gebruiker op een kleine image klikt

// dit niet doen - interactieve elementen gebruiken'
// in dit geval de radio buttons
// smallImg.forEach(function(img){
//     img.addEventListener('click', showbigImg)
// })

smallImgRadioBtns.forEach(
    function(smallImgRadioBtn) {
        smallImgRadioBtn.addEventListener('change', showbigImg)
    }
)

function showbigImg(event) {

    // console.log(event); 
    // let deRadio = event.target;

    // Stap 3: Verander de grote image in een kleine image door de 'src' van de grote image aan te passen 
    // + verander bijbehorende alt-attribuut
    let smallImg = this.nextElementSibling

    bigImg.src = smallImg.src
    bigImg.alt = smallImg.alt
    // console.log(bigImg)
}

// Stap 2 en Stap 3 gecombineerd
// smallImg.forEach(function forEachImage(img) {
//     img.addEventListener("click",function showImage(ev) {
//         bigImg.src = this.src
//     } )
// })


// Media gallerij buttons
// Stap 1: selecteer media gallerij buttons en de media gallerij carousel
const prevBtn = document.querySelector(".prev1");
const nextBtn = document.querySelector(".next1");
const carousel = document.querySelector(".carousel");

// Stap 2: Wacht tot gebruiker op een button klikt
prevBtn.addEventListener("click", toPrevSlide);
nextBtn.addEventListener("click", toNextSlide);

// Stap 3: Laat linker knop de media gallerij carousel naar links sliden
function toPrevSlide() {
    let carouselWidth = carousel.offsetWidth;

    carousel.scrollLeft = carousel.scrollLeft - carouselWidth * .8;
}

// Stap 4: Laat rechter knop de media gallerij carousel naar rechts sliden
function toNextSlide() {
    let carouselWidth = carousel.offsetWidth;

    carousel.scrollLeft = carousel.scrollLeft + carouselWidth * .8;
}
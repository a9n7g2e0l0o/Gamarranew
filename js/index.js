

// sombra del header 
const sombra = document.getElementById("sombraID");


window.onscroll = function (){
    // la pocicion del scroll en determinado momento
    var scroll = document.documentElement.scrollTop;
    if(scroll > 100){//40
        sombra.style.height ="0.1px";
    }else if(scroll < 100){
        sombra.style.height = "40px";
    }
}

// SLIDER 

var slider = document.querySelector(".slider-content");
var sliderIndividual = document.querySelectorAll(".contenido-slider");
var cont = 1;
var width = sliderIndividual[0].clientWidth; // tomar el ancho de cada contenido
var intervalo = 3000; // ms   
var intervaloTiempo =2500;

window.addEventListener('resize',() =>{
    width = sliderIndividual[0].clientWidth; 
});

setInterval( () =>{
    slides();
},intervalo);

function slides(){
    slider.style.transform = 'translate('+(- width * cont)+'px)';
    slider.style.transition = 'transform 1s';
    cont ++;
    if(cont == sliderIndividual.length){
        cont =0;
        setTimeout(() =>{
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s ease';
        },intervaloTiempo);
    }
}

/**********Ejecutando funciones**********/

// de busqueda 
document.getElementById("main-searchID").addEventListener("click",showSearch);

document.getElementById("xTimesID").addEventListener("click",hideSearchShopping);

// cuenta de usuario
document.getElementById("main-userID").addEventListener("click",showUserMail);

document.getElementById("main-user__SquareCloseID").addEventListener("click",hideUserMail);

/****************Buscador de contenido*************** */

const searchShopping = document.getElementById("main-search__shoppingID");
// oscuro
const  coverSearch = document.getElementById("cover-searchID");
// icon de X
const xTime = document.getElementById("xTimesID")

var inputSearch = document.getElementById("inputSearch");

// show search
   
function showSearch () {
    searchShopping.style.top = "0px";
    coverSearch.style.display ="flex";
    xTime.style.display ="flex";
    inputSearch.focus();
}

// function ocultar

function hideSearchShopping (){
    coverSearch.style.display = "none";
    searchShopping.style.top = "-200px";
    xTime.style.display = "none";
    
}

/*** ************Cuenta de usuario****************** */

const userMail = document.getElementById("main-user__accountID");

// show user
function showUserMail () {
    coverSearch.style.display ="flex";
    userMail.style.display ="flex";
}

// hidden user
function hideUserMail () {
    coverSearch.style.display = "none";
    userMail.style.display ="none";
}


//*************SLIDER COVERPAGE****************** */

const sliderEtiquetaAUno = document.querySelector(".contenido--sliderTagAUno").children;
const sliderEtiquetaADos = document.querySelector(".contenido--sliderTagADos").children;
const sliderEtiquetaATres = document.querySelector(".contenido--sliderTagATres").children;
const sliderEtiquetaACuatro = document.querySelector(".contenido--sliderTagACuatro").children;
// icons 
const iconLeft = document.querySelector(".iconLeftUno");
const iconRight = document.querySelector(".iconRightUno");
const iconLeftDos = document.querySelector(".iconLeftDos");
const iconRightDos = document.querySelector(".iconRightDos");
const iconLeftTres = document.querySelector(".iconLeftTres");
const iconRightTres = document.querySelector(".iconRightTres");
const iconLeftCuatro = document.querySelector(".iconLeftCuatro");
const iconRightCuatro = document.querySelector(".iconRightCuatro"); 
var ind = 0;
var indDos = 0;
var indTres = 0;
var indCuatro = 0;

iconLeft.addEventListener('click', () =>{
    moveBoxLeftUno();
});

iconRight.addEventListener('click',() =>{
    moveBoxRightUno();
});

function moveBoxRightUno(){
    if(ind == sliderEtiquetaAUno.length-1){
        ind = 0;
    }else{
        ind++;
    }
    moveSliderUno();
}

function moveBoxLeftUno(){
    if(ind == 0){
        ind = sliderEtiquetaAUno.length-1;
    }else{
        ind--;
    }
    moveSliderUno();
}
    

function moveSliderUno(){
    for(var i=0; i<sliderEtiquetaAUno.length-1; i++){
        sliderEtiquetaAUno[i].classList.remove("active");
    }

    sliderEtiquetaAUno[ind].classList.add("active");
    sliderEtiquetaAUno[ind+1].classList.add("active");
}
// DOS
iconLeftDos.addEventListener('click',() =>{
    moveBoxLeftDos();
});
iconRightDos.addEventListener('click',() =>{
    moveBoxRightDos();
});

function moveBoxRightDos(){
    if(indDos == sliderEtiquetaADos.length-1){
        indDos = 0;
    }else{
        indDos++;
    }
    moveSliderDos();
}

function moveBoxLeftDos(){
    if(indDos == 0){
        indDos = sliderEtiquetaADos.length-1;
    }else{
        indDos--;
    }
    moveSliderDos();
}
    

function moveSliderDos(){
    for(var j=0; j<sliderEtiquetaADos.length-1; j++){
        sliderEtiquetaADos[j].classList.remove("active");
    }

    sliderEtiquetaADos[indDos].classList.add("active");
    sliderEtiquetaADos[indDos+1].classList.add("active");
}

// tres

iconLeftTres.addEventListener('click',() =>{
    moveBoxLeftTres();
});
iconRightTres.addEventListener('click',() =>{
    moveBoxRightTres();
});

function moveBoxRightTres(){
    if(indTres == sliderEtiquetaATres.length-1){
        indTres = 0;
    }else{
        indTres++;
    }
    moveSliderTres();
}

function moveBoxLeftTres(){
    if(indTres == 0){
        indTres = sliderEtiquetaATres-1;
    }else{
        indTres--;
    }
    moveSliderTres();
}
    

function moveSliderTres(){
    for(var k=0; k<sliderEtiquetaATres.length-1; k++){
        sliderEtiquetaATres[k].classList.remove("active");
    }

    sliderEtiquetaATres[indTres].classList.add("active");
    sliderEtiquetaATres[indTres+1].classList.add("active");
}

// CUATRO

iconLeftCuatro.addEventListener('click',() =>{
    moveBoxLeftCuatro();
});
iconRightCuatro.addEventListener('click',() =>{
    moveBoxRightCuatro();
});

function moveBoxRightCuatro(){
    if(indCuatro == sliderEtiquetaACuatro.length-1){
        indCuatro = 0;
    }else{
        indCuatro++;
    }
    moveSliderCuatro();
}

function moveBoxLeftCuatro(){
    if(indCuatro == 0){
        indCuatro = sliderEtiquetaACuatro.length-1;
    }else{
        indCuatro--;
    }
    moveSliderCuatro();
}
    

function moveSliderCuatro(){
    for(var p=0; p<sliderEtiquetaACuatro.length-1; p++){
        sliderEtiquetaACuatro[p].classList.remove("active");
    }

    sliderEtiquetaACuatro[indCuatro].classList.add("active");
    sliderEtiquetaACuatro[indCuatro+1].classList.add("active");
}
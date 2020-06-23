let posicionInicial = window.pageYOffset;
const btn_up = document.querySelector('.up');
window.addEventListener('scroll', () => {
    menu()
    up()
})
function up() {
    html = document.documentElement
    let posicionAhora = html.scrollTop;
    if (posicionAhora >= 450) {
        btn_up.classList.add('pop')
    } else {
        btn_up.classList.remove('pop')
        btn_up.classList.add('pop_down')
        // btn_up.style.transform = 'scale(0)'
    }
}
btn_up.addEventListener('click', () => {
    const body = document.body;
    const html = document.documentElement
    html.scrollTop = 0;
    body.scrollTop = 0;
})
function menu() {
    const nav = document.querySelector('.nav');
    const logo = document.querySelector('.logo img')
    let posicionAhora = window.pageYOffset;
    if (posicionInicial >= posicionAhora) {
        nav.style.top = '0px';
        if (posicionInicial < 300) {
            nav.classList.remove('nav_2');
            nav.classList.add('nav_1')
            logo.src = "img/pagPrincipal/samsa.jpg"
        }
    } else {
        if (posicionInicial >= 300) {
            nav.style.top = '-90px';
            nav.classList.remove('nav_1');
            nav.classList.add('nav_2')
            setTimeout(function () {
                logo.src = "img/pagPrincipal/samsa.jpg"
            }, 500)
        }
    }
    posicionInicial = posicionAhora;
}
//  funcion para ampliar la imagen 
const image_light_box = document.querySelector('.mostrar_fondo img');
const fondo_light_box = document.querySelector('.mostrar_fondo');
const clothes = document.querySelector('.cotenido_producto')
clothes.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        // console.log(event.target);
        image_light_box.src = event.target.src;
        fondo_light_box.classList.add('active');
    }
})
fondo_light_box.addEventListener('click', (event) => {
    if (event.target.tagName != 'IMG') {
        fondo_light_box.classList.remove('active')
    }
})
window.addEventListener('load', () => {
    menu();
    up();
})
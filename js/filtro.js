const form_color = document.querySelector('.filtro_color');
const form_tipo = document.querySelector('.filtro_tipo');
let productos = Array.from(document.getElementsByClassName('content'));
let checkbox_color = Array.from(document.querySelectorAll('.form_color input'))
let checkbox_tipo = Array.from(document.querySelectorAll('.form_tipo input'))
form_color.addEventListener('click', (event) => {
    if (event.target.nodeName === 'INPUT') {
        let cantidad = 0
        checkbox_color.forEach((btn_check) => {
            if (btn_check.checked == false) {
                cantidad++;
            }
        })
        if (cantidad === checkbox_color.length) {
            productos.forEach((ropa) => {
                ropa.style.visibility = 'visible';
                ropa.classList.remove('remover')
            })
        } else {
            checkbox_color.forEach((btn_check) => {
                if (btn_check.checked) {
                    let valor = btn_check.getAttribute('data-color');
                    visible(valor)
                }
            })
            // second part ocultar ropa
            checkbox_color.forEach((btn_check) => {
                if (btn_check.checked == false) {
                    let valor = btn_check.getAttribute('data-color');
                    ocultar(valor)
                }
            })
        }
    }
    // productos.forEach((element) => {
    //     if (event.target.checked) {
    //         if (element.classList.contains(valor)) {
    //             element.style.visibility = 'visible';
    //             element.classList.remove('remover')
    //         }
    //     } else {
    //         if (element.classList.contains(valor)) {
    //             element.style.visibility = 'hidden';
    //             element.classList.add('remover')
    //         }
    //     }
    // })
})
form_tipo.addEventListener('click', (event) => {
    if (event.target.nodeName === 'INPUT') {
        let cantidad = 0
        checkbox_tipo.forEach((btn_check) => {
            if (btn_check.checked == false) {
                cantidad++;
            }
        })
        if (cantidad === checkbox_tipo.length) {
            productos.forEach((ropa) => {
                ropa.style.visibility = 'visible';
                ropa.classList.remove('remover')
                ropa.classList.remove('ver')
            })
        } else {
            checkbox_tipo.forEach((btn_check) => {
                if (btn_check.checked) {
                    let valor = btn_check.getAttribute('data-tipo');
                    visible(valor)
                }
            })
            // second part ocultar ropa
            checkbox_tipo.forEach((btn_check) => {
                if (btn_check.checked == false) {
                    let valor = btn_check.getAttribute('data-tipo');
                    ocultar(valor)
                }
            })
        }
    }
})
function visible(valor) {
    productos.forEach((ropa) => {
        if (ropa.classList.contains(valor)) {
            ropa.style.visibility = 'visible';
            ropa.classList.add('ver');
            ropa.classList.remove('remover');

        }
    })
}
function ocultar(valor) {
    productos.forEach((ropa) => {
        if (ropa.classList.contains(valor)) {
            ropa.style.visibility = 'hidden';
            ropa.classList.add('remover')

        }
    })
}
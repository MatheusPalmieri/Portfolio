'use strict'

var button = document.querySelector('.button-home')
var home = document.querySelector('.home')
    home.addEventListener('mouseover', () => {
        button.insertAdjacentHTML(
            'afterbegin',
            `
                <i class="fa-solid fa-angles-up"></i>
            `
        )
    })

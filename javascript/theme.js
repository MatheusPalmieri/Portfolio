var body = document.querySelector('body');
var switchTheme = document.getElementById('theme');
var imageTheme = document.getElementById('image-theme')

switchTheme.addEventListener('click', check);

function check() {
    if(switchTheme.checked){
        // console.log("true - dark")
        body.classList.remove('theme-light')
        body.classList.add('theme-dark')
        imageTheme.src = 'image/Sol.svg'
    } else {
        // console.log("else")
        body.classList.remove('theme-dark')
        body.classList.add('theme-light')
        imageTheme.src = 'image/Lua.svg'
    }
}
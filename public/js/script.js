// ---------- Dark Theme mode ---------- //

// Get Elements
const navBar = document.querySelector('#navbar')
const navLogo = document.querySelector('#nav-logo')
const btnDark = document.querySelector('#btn-dark')

// Change Dark Mode
btnDark.addEventListener('click', () => {
    navBar.classList.toggle('bg-dark')
    navLogo.classList.toggle('classic-color-2')
    btnDark.classList.toggle('invert-color')
})

// ---------- Text Slide ---------- //

// Texts Hero
const hero1 = document.querySelector('#hero-txt1')
const hero2 = document.querySelector('#hero-txt2')
const hero3 = document.querySelector('#hero-txt3')
const hero4 = document.querySelector('#hero-txt4')

// Time of text
const time = 4000

// Show Hero 1
function showh1() {
    setTimeout(() => {
        hero1.style.opacity = 1
        hero1.style.left = '2rem'
        // Hide Hero 1
        setTimeout(() => {
            hero1.style.opacity = 0
            return showh2()
        }, time)
    }, 1500)
}
showh1()

// Show Hero 2
function showh2() {
    hero2.style.opacity = 1
    // Hide Hero 2
    setTimeout(() => {
        hero2.style.opacity = 0
        return showh3()
    }, time);
}

// Show Hero 3
function showh3() {
    hero3.style.opacity = 1
    setTimeout(() => {
        // Hide Hero 3
        hero3.style.opacity = 0
        return showh4()
    }, time);
}

// Show Hero 4
function showh4() {
    hero4.style.opacity = 1
    setTimeout(() => {
        // Hide Hero 4
        hero4.style.opacity = 0
        return showh1()
    }, time);
}
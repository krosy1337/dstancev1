const button = document.querySelector('.mobile-menu')
const menu = document.querySelector('.menu-sidebar')


button.addEventListener('click', () => {
    button.classList.toggle('active')
    menu.classList.toggle('active')
})
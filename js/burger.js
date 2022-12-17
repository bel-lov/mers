const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')

//функция снимает или добавляет класс activ
const toggleMenu = () => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('.humburger-menu-active')
}
burger.addEventListener('click', () => {
    toggleMenu()
})
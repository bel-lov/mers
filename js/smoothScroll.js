const linksHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('.main__scroll')
newArray = [...linksHead, mainScroll]

console.log(seamless)
newArray.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const ID = e.target.getAttribute('href').substring(1)
        console.log(ID)

        //не является кроссбраузерным решением
        // document.getElementById(ID).scrollIntoView({
        //     behavior: "smooth",
        //     block: "start"
        // })

        //кроссбраузерное решение плавного скрола при помощи библиотеки seamless-scroll-polyfill

    })
})


const tabsHendlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')
const title = document.querySelectorAll('.design__title')

console.log(title)
// for (let btn of tabsHendlerElems) {
//     btn.addEventListener('click', (e) => {
//         tabsHendlerElems.forEach(item => item.classList.remove('design-list__item_active'))
//         btn.classList.add('design-list__item_active')

//         tabsContentElems.forEach(content => {
//             if (content.dataset.tabsField === btn.dataset.tabsHandler) {
//                 content.classList.remove('hidden')
//             }
//             else {
//                 content.classList.add('hidden')
//             }
//         })
//         //не самый лучший переключатель заголовка
//         title.forEach((titleElem) => {
//             titleElem.classList.toggle('hidden')
//         })
//     })
// }

tabsHendlerElems.forEach((btn, btnIdx) => {
    btn.addEventListener('click', (e) => {
        tabsHendlerElems.forEach(item => item.classList.remove('design-list__item_active'))
        btn.classList.add('design-list__item_active')

        tabsContentElems.forEach(content => {
            if (content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove('hidden')
            }
            else {
                content.classList.add('hidden')
            }
        })
        //оптимальный переключатель заголовка
        title.forEach((titleElem, titleIdx) => {
            titleElem.classList.add('hidden')
            if (btnIdx === titleIdx) {
                titleElem.classList.remove('hidden')
            }
        })
    })
})


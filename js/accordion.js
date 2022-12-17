const btns = document.querySelectorAll('.feature__link')
const lists = document.querySelectorAll('.feature-sub')

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', () => console.log(btns[i]))
// }

// btns.forEach((btnItem, index) => {
//     btnItem.addEventListener('click', () => console.log(btnItem))
// })
// btns.forEach((btnItem, index) => {
//     btnItem.addEventListener('click', () => {
//         btns.forEach((btnItem) => {
//             btnItem.classList.remove('feature__link_active')
//         })
//         btnItem.classList.add('feature__link_active')

//         lists.forEach((listitem) => {
//             listitem.classList.add('hidden')
//         })
//         lists[index].classList.remove('hidden')
//     })
// })

btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        btnItem.classList.toggle('feature__link_active')
        lists[index].classList.toggle('hidden')
    })
})

btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {

        lists.forEach((listItem) => {
            listItem.classList.add('hidden')
        })
        if (btnItem.classList.contains("feature__link_active") === true) {
            btnItem.classList.remove('feature__link_active')
        } else {
            btns.forEach((btnItem) => {
                btnItem.classList.remove('feature__link_active')
            })
            btnItem.classList.add('feature__link_active')
            lists[index].classList.remove('hidden')
        }

    })
})

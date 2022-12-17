const form = document.querySelector('.form-test-drive')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let data = {}
    //собираем все элементы формы
    // for (let el of form) {
    //     if (el.name) {
    //         console.log(el.value)
    //     }
    // }
    for (let { name, value } of form.elements) {
        if (name) {
            console.log(value)
        }
    }
})
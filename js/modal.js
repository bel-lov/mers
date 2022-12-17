const modalBtn = document.querySelector('.more')//узнать больше
const modal = document.querySelector('.modal')// модальное окно

modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

//modal__close закрываем окно по подложке и крестику модального окна
modal.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('modal__close') || target.classList.contains('overlay')) {
        modal.classList.add('hidden')
    }
})
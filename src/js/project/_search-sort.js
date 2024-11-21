const searchSort = () => {
    const buttons = document.querySelectorAll('.search-result__sort');

    if (buttons) {
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                button.classList.toggle('search-result__sort--down')
            })
        })
    }
}

searchSort();
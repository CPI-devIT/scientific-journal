const searchSort = () => {
    const buttons = document.querySelectorAll('.search-result__sort');

    if (buttons) {
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                button.classList.toggle('search-result__sort--down');

                if (button.classList.contains('search-result__sort--down')) {
                    button.setAttribute('aria-sort', 'descending')
                    const currentDescr = button.getAttribute('data-descending')
                    button.setAttribute('aria-label', currentDescr)
                } else {
                    button.setAttribute('aria-sort', 'ascending')
                    const currentDescr = button.getAttribute('data-ascending')
                    button.setAttribute('aria-label', currentDescr)
                }
            })
        })
    }
}

searchSort();
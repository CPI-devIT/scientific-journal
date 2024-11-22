const searchNavigateButtons = () => {
    const form = document.querySelector('[data-form-search]');
    const radioButtons = document.querySelectorAll('.search-navigate__hidden');
    const searchField = form?.querySelector('.form__field--search');
    const submitButton = form?.querySelector('.form__button--search');

    const changeValueHandler = (event) => {
        const value = event.currentTarget.value
        if (!!value) {
            submitButton.removeAttribute('disabled')
        } else {
            submitButton.setAttribute('disabled', 'true')
        }
    }

    if (searchField && submitButton) {
        searchField.addEventListener('input', changeValueHandler)
    }

    if (radioButtons && searchField) {
        radioButtons.forEach((radioButton) => {
            radioButton.addEventListener('change', (event) => {
                let newPlaceholder = '';
                switch (event.currentTarget.value) {
                    case 'website':
                        newPlaceholder = 'Искать по сайту'
                        break
                    case 'authors':
                        newPlaceholder = 'Искать по авторам'
                        break
                    case 'articles':
                        newPlaceholder = 'Искать по статьям'
                        break
                }
                searchField.placeholder = newPlaceholder
            })
        })
    }
}


searchNavigateButtons()
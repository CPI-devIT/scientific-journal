const searchNavigateButtons = () => {
    const form = document.querySelector('[data-form-search]')
    const buttons = document.querySelectorAll('.search-navigate__button');
    const searchField = form.querySelector('.form__field--search');
    const submitButton = form.querySelector('.form__button--search');

    const changeValueHandler = (event) => {
        const value = event.currentTarget.value
        console.log(value)
        if (!!value) {
            submitButton.removeAttribute('disabled')
        } else {
            submitButton.setAttribute('disabled', 'true')
        }
    }

    console.dir(searchField)

    if (form && buttons && searchField) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            console.log('form submitted')
        })

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                searchField.value = button.innerText
            })
        })

        searchField.addEventListener('input', changeValueHandler)
    }
}


searchNavigateButtons()
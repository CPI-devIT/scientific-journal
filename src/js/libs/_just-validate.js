import JustValidate from "just-validate";

const forms = document.querySelectorAll("[data-form-validate]")

forms.forEach(form => {
    const buttonSubmit = form.querySelector('.form__button');

    const validation = new JustValidate(form, {
        validateBeforeSubmitting: true,
        errorFieldCssClass: 'form__field--error',
        errorsContainer: form.querySelector('.form__error'),
    });

    validation.addField('input[type="email"]', [
        {
            rule: 'email',
            errorMessage: 'Введите корректный email',
        },
        {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
        },
    ]);

    if (buttonSubmit) {
        validation.onValidate(({
            isValid,
            isSubmitted,
            fields,
        }) => {

            if (isValid) {
                buttonSubmit.removeAttribute('disabled');
            } else {
                buttonSubmit.setAttribute('disabled', 'true');
            }

            for (let key in fields) {
                const element = fields[key].elem
                if (fields[key].isValid) {
                    element.removeAttribute('aria-invalid');
                } else {
                    if (!element.hasAttribute('aria-invalid')) {
                        element.setAttribute('aria-invalid', 'true');
                    }
                }
            }
        });
    }
});
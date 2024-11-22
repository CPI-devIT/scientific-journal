import JustValidate from "just-validate";

const forms = document.querySelectorAll("[data-form-validate]")

forms.forEach(form => {
    const buttonSubmit = form.querySelector('.form__button');

    const validation = new JustValidate(form, {
        validateBeforeSubmitting: true,
        errorFieldCssClass: 'form__field--error',
    });

    if (form.querySelector('input[type="email"]')) {
        const allEmailFields = form.querySelectorAll('input[type="email"]')

        allEmailFields.forEach((item) => {
            const errorElement = item.nextElementSibling

            validation.addField(item, [
                {
                    rule: 'email',
                    errorMessage: 'Введите корректный email',
                },
                {
                    rule: 'required',
                    errorMessage: 'Поле обязательно для заполнения',
                },
            ], {
                errorsContainer: errorElement,
            });
        })
    }


    if (form.querySelector('input[type="password"]')) {
        const allPasswordFields = form.querySelectorAll('input[type="password"]')
        allPasswordFields.forEach((item) => {
            const errorElement = item.nextElementSibling
            validation.addField(item, [
                {
                    rule: 'strongPassword',
                    errorMessage: 'Пароль должен содержать не менее 8-ми символов, минимум одну заглавную и одну строчную букву, минимум одну цифру и один специальный символ',
                },
                {
                    rule: 'required',
                    errorMessage: 'Поле обязательно для заполнения',
                },
            ], {
                errorsContainer: errorElement,
            });
        })
    }

    validation.onValidate(({
        isValid,
        isSubmitted,
        fields,
    }) => {


        if (buttonSubmit) {
            if (isValid) {
                buttonSubmit.removeAttribute('disabled');
            } else {
                buttonSubmit.setAttribute('disabled', 'true');
            }
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
});
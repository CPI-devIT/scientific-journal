import mixitup from 'mixitup';
import Choices from 'choices.js'

const applyMixitupWithSelect = (containerClass, selectId) => {
    if (document.querySelector(containerClass)) {
        const select = document.getElementById(selectId)
        const container = document.querySelector(containerClass)
        const buttons = container.querySelectorAll('[data-filter]')
        let choicesSelect;

        // инициализируем кастомный селект
        if (select && select.hasAttribute('data-choice')) {
            choicesSelect = new Choices(select, {
                searchEnabled: false,
                searchChoices: false,
                shouldSort: false,
            });
        }

        let mixer = mixitup(containerClass, {
            callbacks: {
                onMixStart: () => {
                    // меняем атрибут aria-pressed у кнопок
                    if (buttons) {
                        buttons.forEach((button) => {
                            if (button.classList.contains('mixitup-control-active')) {
                                button.setAttribute('aria-pressed', true)
                            } else {
                                button.setAttribute('aria-pressed', false)
                            }
                        })
                    }

                    // нужно, чтобы при выборе категории на десктопе, эта же категория была выбрана в select на мобиле
                    if (select) {
                        // это на тот случай, если у нас обычный (не кастомный) селект
                        let activeValue = ''
                        const options = Array.from(select.options)
                        options.forEach((option) => {
                            option.removeAttribute('selected');
                            option.removeAttribute('aria-selected');

                            if (option.classList.contains('mixitup-control-active')) {
                                option.setAttribute('selected', true)
                                option.setAttribute('aria-selected', true)
                                activeValue = option.value
                            }
                        })
                        select.value = activeValue

                        if (choicesSelect) {
                            choicesSelect.setChoiceByValue([activeValue])
                            const items = document.querySelectorAll('.choices__item')
                            if (items) {
                                items.forEach((item) => {
                                    
                                    item.removeAttribute('aria-selected');
                                    item.classList.remove('is-highlighted')

                                    if (item.dataset.value === activeValue) {
                                        item.classList.add('is-highlighted')
                                        item.setAttribute('aria-selected', true);
                                    }
                                })
                            }
                        }
                    }
                }
            }
        });


        if (select) {
            select.addEventListener('change', function () {
                const filterValue = this.options[this.selectedIndex].getAttribute('data-filter');
                mixer.filter(filterValue);
            });
        }
    }
}

applyMixitupWithSelect('.releases-page', 'releases-years');
applyMixitupWithSelect('.release-page', 'release-category');
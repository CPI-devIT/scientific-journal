import mixitup from 'mixitup';
import Choices from 'choices.js'

const applyMixitupWithSelect = (containerClass, selectId) => {
    if (document.querySelector(containerClass)) {
        const select = document.getElementById(selectId)
        // let choicesSelect;

        // if (select && select.hasAttribute('data-choice')) {
        //     choicesSelect = new Choices(select, {
        //         searchEnabled: false,
        //         searchChoices: false,
        //         shouldSort: false,
        //     });
        // }

        let mixer = mixitup(containerClass, {
            // callbacks: {
            //     onMixStart: () => {
            //         if (select) {
            //             let activeValue = ''
            //             const options = Array.from(select.options)
            //             options.forEach((option) => {
            //                 // option.removeAttribute('selected');
            //                 // option.removeAttribute('aria-selected');

            //                 if (option.classList.contains('mixitup-control-active')) {
            //                     // option.setAttribute('selected', true)
            //                     // option.setAttribute('aria-selected', true)
            //                     activeValue = option.value
            //                 }
            //             })
            //             select.value = activeValue

            //             if (choicesSelect) {
            //                 choicesSelect.setChoiceByValue([activeValue])
            //             }
            //         }
            //     }
            // }
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
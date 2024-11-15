import Choices from 'choices.js'
const selects = document.querySelectorAll('[data-choice]');
selects.forEach((select) => {
    new Choices(select, {
        searchEnabled: false,
        searchChoices: false,
        shouldSort: false,
    });
});

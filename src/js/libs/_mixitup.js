import mixitup from 'mixitup';

if (document.querySelector('.releases-page')) {
    let mixer = mixitup('.releases-page');

    const select = document.getElementById('releases-years')
    if (select) {
        select.addEventListener('change', function () {
            var filterValue = this.options[this.selectedIndex].getAttribute('data-filter');
            mixer.filter(filterValue);
        });

    }
}

if (document.querySelector('.release-page')) {
    mixitup('.release-page');
}

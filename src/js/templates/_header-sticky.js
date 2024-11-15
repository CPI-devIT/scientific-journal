import { throttle } from '../utils/index.js';

const stickyHeader = () => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    let heroHeight = hero ? hero.offsetHeight : 500;
    const burgerMenu = header.querySelector('.burger-menu');

    if (header) {
        const changeClasses = () => {
            if (!burgerMenu.classList.contains('burger-menu--active')) {
                const scrollDistance = window.scrollY;

                if (scrollDistance > heroHeight) {
                    header.classList.add('header--fixed');
                } else {
                    header.classList.remove('header--fixed');
                }
            }
        }

        changeClasses();

        const changeClassesTrottle = throttle(changeClasses);
        window.addEventListener('scroll', changeClassesTrottle);
    };
};

stickyHeader();
window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    function tabs() {

        let tabClass = '.info-header-tab',
            tabsWrapper = '.info-header',
            contentClass = '.info-tabcontent',

            tab = document.querySelectorAll(tabClass),
            info = document.querySelector(tabsWrapper),
            tabContent = document.querySelectorAll(contentClass);

        function hideTabContent(a) {
            for( let i = a; i < tabContent.length; i++ ) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if(tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener( 'click', function(event) {
            let target = event.target;
            if(target && target.classList.contains('info-header-tab')) {
                for(let i = 0; i < tab.length; i++) {
                    if(target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }

    tabs();

});
'use strict';

jQuery(document).ready(function(){

    searchDropdown();
    stickyHeader();
    sliderMain();
    rsThreeShuffle();

});
/*
* Dropdown for search form
*
* Drowpdown search form by clicking on the icon
*
* Activate button should have a class 'fa-search'
* Dropdown should have a class 'search_closed'
*
* */
function searchDropdown(){

    /* elements */
    var dropdown = jQuery('.search');               // element with dropdown effect
    var btn = jQuery('.activate-search');           // element for activate search dropdown
    var btnIcon = jQuery('.activate-search__icon'); // element with icon

    /* css classes */
    var dropdownClosed = 'search_closed';       // class for closed dropdown element
    var dropdownOpened = 'search_opened';       // class for opened dropdown element
    var iconClosed = 'fa-search';               // class for closed icon
    var iconOpened = 'fa-times';                // class for opened icon

    var openDetect = 0;     // detect open dropdown

    btn.bind({
        click: function(e){

           e.preventDefault();  // disable default link functionality

            /* dropdown closed */
            if(openDetect == 0){
                dropdown.removeClass(dropdownClosed).addClass(dropdownOpened);
                btnIcon.removeClass(iconClosed).addClass(iconOpened);
                dropdown.animate({
                    height: 'show'
                }, 200);
                openDetect = 1;
            }
            /* dropdown opened */
            else if(openDetect == 1){
                dropdown.removeClass(dropdownOpened).addClass(dropdownClosed);
                btnIcon.removeClass(iconOpened).addClass(iconClosed);
                dropdown.animate({
                    height: 'hide'
                }, 200);
                openDetect = 0;
            }

        }
    });


}
/*
*   Sticky header
*
*   Sticky header after page scrolling
*
* */
function stickyHeader(){

    //  .header element
    var header = jQuery('.header');

    jQuery(window).bind({

        scroll: function(){

            if(jQuery(window).scrollTop() > 0){

                if(!jQuery('div').is('.sticky-spacer')){

                    header.before('<div class="sticky-spacer"></div>');
                    jQuery('.sticky-spacer').css('height', header.innerHeight());

                }

                header.addClass('header_fixed');

            } else{

                header.removeClass('header_fixed');
                jQuery('.sticky-spacer').remove();

            }

        }

    });

}

function sliderMain(){

    var slider = jQuery('.slider__items');

    slider.owlCarousel({

        items: 1,
        loop: true,
        nav: true,
        navText: ["<span class='controls__icon fa fa-angle-left'>",
            "<span class='controls__icon fa fa-angle-right'>"],
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });

    slider.on('translate.owl.carousel', function(e){

        jQuery('.slider .owl-prev, .slider .owl-next').addClass('controls__btn-disabled');

    });


    slider.on('translated.owl.carousel', function(e){

        jQuery('.slider .owl-prev, .slider .owl-next').removeClass('controls__btn-disabled');

    });

}

function rsThreeShuffle(){

    var Shuffle = window.Shuffle;
    var element = document.querySelector('.rs-three__items');

    var shuffleInstance = new Shuffle(element, {
        itemSelector: '.rs-three__item'
    });

    jQuery('.rs-three__menu .menu__item').click(function(){

        var clickedItemDataAttr = jQuery(this).attr('data-groups');

        shuffleInstance.filter(clickedItemDataAttr);

    });

}
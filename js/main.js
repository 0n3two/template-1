'use strict';

jQuery(document).ready(function(){

    searchDropdown();
    stickyHeader();
    sliderMain();
    rsThreeShuffle();
    sliderRsFive();
    counterUpRsSix();
    sliderClientsAboutUs();
    sliderClients();

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

/*
*   Slider: main
*
* */
function sliderMain(){

    //  slider items
    var slider = jQuery('.slider__items');

    //  slider init
    slider.owlCarousel({

        items: 1,
        loop: true,
        nav: true,
        navText: ["<span class='controls__icon fa fa-angle-left'>",
            "<span class='controls__icon fa fa-angle-right'>"],
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });

    /*
    *   Disable controls prev/next while sliding
    *
    * */
    slider.on('translate.owl.carousel', function(e){

        jQuery('.slider .owl-prev, .slider .owl-next').addClass('controls__btn-disabled');

    });


    slider.on('translated.owl.carousel', function(e){

        jQuery('.slider .owl-prev, .slider .owl-next').removeClass('controls__btn-disabled');

    });

}

/*
*   Sorting by menu for .rs-three
*
* */
function rsThreeShuffle(){

    var Shuffle = window.Shuffle;
    var container = document.querySelector('.rs-three__items');

    var shuffleInstance = new Shuffle(container, {
        itemSelector: '.rs-three__item' //  class of used items
    });

    var items = jQuery('.rs-three__menu .menu__item');

    items.click(function(){

        //  get the attr value
        var clickedItemDataAttr = jQuery(this).attr('data-groups');

        //  filter items
        shuffleInstance.filter(clickedItemDataAttr);

        //  remove active class from all items
        items.each(function(){

            jQuery(this).removeClass('menu__item_active');

        });

        //  add active class for clicked item
        jQuery(this).addClass('menu__item_active');



    });

}

/*
*   Slider for .rs-five
*
* */
function sliderRsFive(){

    //  slider items wrapper
    var slider = jQuery('.rs-five__items');

    //  slider init
    slider.owlCarousel({

        items: 4,
        loop: true,
        nav: true,
        dots: false,
        margin: 12,
        navText: ["<span class='controls__icon fa fa-angle-left'>",
            "<span class='controls__icon fa fa-angle-right'>"]

    });

}

function counterUpRsSix(){

    jQuery('.rs-six__amount').counterUp({

        delay: 10,
        time: 1500

    });

}

/*
*   Slider for 'clients about us'
*
* */
function sliderClientsAboutUs(){

    //  slider items wrapper
    var slider = jQuery('.rs-eight__items');

    slider.owlCarousel({

        items: 1,
        nav: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'

    })

}

/*
*   Slider for clients logo
*
* */
function sliderClients(){

    //  slider items wrapper
    var slider = jQuery('.rs-nine');

    slider.owlCarousel({

        items: 5,
        nav: false,
        dots: false,
        loop: true,
        margin: 0

    });


}
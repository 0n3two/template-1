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
    navMobile();

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

    if(window.innerWidth > 900){

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

        //  sets by from number up
        responsive: {

            0: {
                items: 3
            },

            769: {
                items: 4
            }

        },
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

        responsive: {
            0: {
                items: 3
            },
            769: {
                items: 5
            }
        },
        nav: false,
        dots: false,
        loop: true,
        margin: 0

    });


}

/*
*   open/close mobile navigation
*
* */
function navMobile(){

        //  button for open
    var buttonOpen = jQuery('.nav-open__button'),

        //  button for close
        buttonClose = jQuery('.nav-main .action-close__button'),

        //  main navigation element
        nav = jQuery('.nav-main'),

        //  opened navigation css class
        navOpenedClass = 'nav-main_opened',

        // element with subnav
        itemToggle = jQuery('.nav-main__nav > .nav__item.nav__item_has-subnav'),

        //  subnav selector
        subnavItemSelector = '.nav__subnav',

        //  opened item css class
        itemOpenedClass = 'nav__item_has-subnav_opened',

        //  element link selector
        linkSelector = '.nav__link';

    //  disable links inside elements with subnav
    itemToggle.children(linkSelector).click(function(e){

        e.preventDefault();

    });

    // open navigation
    var navOpen = function(){

        nav.animate({
            width: 'show'
        }, 300);
        nav.addClass(navOpenedClass);

        //  disable scroll for main area
        jQuery('body').css('overflow', 'hidden');

        //  add overlay for main area
        jQuery('body').prepend('<div class="overlay-main"></div>');


    };

    //  close navigation
    var navClose = function(){

        nav.animate({
            width: 'hide'
        }, 300);
        nav.removeClass(navOpenedClass);

        // enable scroll for main area
        jQuery('body').css('overflow', 'visible');

        //  remove overlay
        jQuery('.overlay-main').remove();

    };

    //  open navigation
    buttonOpen.click(function(){

        navOpen();

    });

    //  close navigation by button
    buttonClose.click(function(){

        navClose();

    });

    //  close navigation by click on overlay
    jQuery(document).on('click', '.overlay-main', function(){

        navClose();

    });

    //  toggle submenu
    itemToggle.click(function(){

        //  check for menu opened
        if(nav.hasClass(navOpenedClass)){

            if(jQuery(this).hasClass(itemOpenedClass)){

                jQuery(this).removeClass(itemOpenedClass);

            }
            else{

                jQuery(this).addClass(itemOpenedClass);

            }

        }

    });

    jQuery(window).resize(function(){

        //  check the breakpoint for mobile menu
        if(jQuery(this).innerWidth() > 900){

            //  remove display: none hide animation
            nav.removeAttr('style');

            nav.removeClass(navOpenedClass);

            // enable scroll for main area
            jQuery('body').css('overflow', 'visible');

            //  remove overlay
            jQuery('.overlay-main').remove();

        }

    });


}
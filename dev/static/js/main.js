$(document).ready(function () {
    svg4everybody({});

    let mainSubnavHover = () => {
        $('.catalog-nav__item').hover(
            function () {
                let parentList = $(this).closest('.catalog-nav__list');
                if($(this).children('.catalog-nav__list').length) {
                    let catNavHeight = $(this).children('.catalog-nav__list').outerHeight();
                    if(parentList.outerHeight() < catNavHeight){
                        parentList.css('height', catNavHeight);
                    }
                    parentList.css('width', '720');
                }
            }, function () {
                let parentList = $(this).closest('.catalog-nav__list');
                parentList.css('height', 'auto');
                parentList.css('width', 'auto');
            }
        )
    };

    let openSearchForm = () => {
        $(document).on('click', '.search__icon', '.icon-search', function () {
           $(this).parent().addClass('search--open');

            let self = $(this);

            $('body').click(function (e) {
                if (!$(e.target).closest('.search__body').length) {
                    self.parent().removeClass('search--open');
                }
            });
        });



    };

    let clearSearchForm = () => {
        $(document).on('click', '.search__clear', function () {
            $('.search__input').val('');
        });
    };

    let bannerSlider = () => {
        $('.js-banner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '.banner__navigation--prev',
            nextArrow: '.banner__navigation--next',
            dots: true,
            appendDots: '.banner__dots',
            customPaging : function(slider, i) {
                return '<div href="#" class="banner__dot"></div>';
            },
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false
                    }
                }
            ]
        })
    };

    let tabs = () => {
        $('.tabs-navigation__item').click(function() {
            let tabName = $(this).attr('show-tab'),
                tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
                tab = $(tabsBody).find('.' + tabName);
            $(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
            $('.tabs__body .' + tabName).addClass('tab--active').siblings().removeClass('tab--active');
            if('.tabs__body .' + tabName + ' .js-products-line-slider'){
                $('.js-products-line-slider').each(function () {
                    $(this).slick('refresh');
                });
                $('.js-product-prev__slider').each(function () {
                    $(this).slick('refresh');
                })
            }
        });
    };

    let productPrevSlider = () => {
        $('.js-product-prev__slider').each(function (idx) {
            let productPrevSliderClass = "product-prev-slider-" + idx;
            this.closest('.product-prev').classList.add(productPrevSliderClass);
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                swipe: false,
                infinite: false,
                appendDots: '.' + productPrevSliderClass + ' .product-prev__colors',
                customPaging: function (slider, i) {
                    let color = $(slider.$slides[i]).data('color');
                    if(color === '#ffffff')
                        return '<div class="product-prev__color product-prev__color--white" style="background-color:' + color +'"></div>';
                    else
                        return '<div class="product-prev__color" style="background-color:' + color +'"></div>';
                }
            });
        });
    };

    let productLineSlider = () => {
        $('.js-products-line-slider').each(function (idx) {
            let productsLineSliderId = "products-line-slider-" + idx;
            this.closest('.products-line-slider').id = productsLineSliderId;
            $(this).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                dots: true,
                swipe: true,
                appendDots: '#' + productsLineSliderId + ' .products-line-slider__dots',
                prevArrow: '#' + productsLineSliderId + ' .products-line-slider__btn--prev',
                nextArrow: '#' + productsLineSliderId + ' .products-line-slider__btn--next',
                customPaging: function (slider, i) {
                    return '<div class="products-line-slider__dot" ></div>';
                },
                responsive: [
                    {
                        breakpoint: 1139,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 550,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        });
    };

    let productLineBorderSlider = () => {
        $('.js-products-line-border-slider').each(function (idx) {
            let productsLineBorderSliderId = "products-line-border-slider-" + idx;
            this.closest('.products-line-border-slider').id = productsLineBorderSliderId;
            $(this).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                swipe: true,
                prevArrow: '#' + productsLineBorderSliderId + ' .products-line-border-slider__btn--prev',
                nextArrow: '#' + productsLineBorderSliderId + ' .products-line-border-slider__btn--next',
                responsive: [
                    {
                        breakpoint: 1139,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 550,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        });
    };

    let categorySlider = () => {
        $('.js-category-slider').slick({
            slidesToShow: 6,
            dots: true,
            arrows: false,
            infinite: false,
            appendDots: '.category-slider__dots',
            customPaging : function(slider, i) {
                return '<div class="category-slider__dot"></div>';
            },
            responsive: [
                {
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]

        });
    };

    let mobileMenu = () => {
      $(document).on('click', '.mobile-menu__toggle', function () {
          $(this).parent().addClass('mobile-menu--open');
          if($(window).width() < 768){
              $('html').addClass('fixed');
              $('.wrapper').addClass('mobile-menu-open')
          }

      });

        $(document).on('click', '.mobile-menu__close', function () {
            $(this).closest('.mobile-menu').removeClass('mobile-menu--open');
            if($(window).width() < 768){
                $('html').removeClass('fixed');
                $('.wrapper').removeClass('mobile-menu-open')
            }
        })
    };


    let tabletSubnavMenu = () => {
        $(document).on('click','.inform-nav__tablet-toggle', function () {
           $(this).toggleClass('inform-subnav--open');
        });

    };

    let select = () => {
        $(document).on('click', '.select__header', function () {
           $(this).parent().toggleClass('select--open')
        });
        $(document).on('click', '.select-list__item', function () {
            let current = $(this).closest('.select').find('.select__current')[0]
            $(this).closest('.select').removeClass('select--open');
            $(current).text($(this).text());
        });

    };


    let filterToggle = () => {
        $(document).on('click', '.filter-mobile__toggle', function () {
           $('.filter').addClass('filter--open');
        });

        $(document).on('click', '.filter-mobile__close', function () {
            $('.filter').removeClass('filter--open');
        });

    };

    let productSlider = () => {

        $('.js-product-slider-dots').slick({
            asNavFor: '.js-product-slider',
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '.product-slider-dots__btn--prev',
            nextArrow: '.product-slider-dots__btn--next',
            vertical: true,
            infinite: false,
            focusOnSelect: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: 'unslick'
                }
            ]

        });

        $('.js-product-slider').slick({
            asNavFor: '.js-product-slider-dots',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: false
        });
    };

    let colorClicked = () => {
        $(document).on('click', '.color-list__item', function () {
            $(this).addClass('color-list__item--active').siblings().removeClass('color-list__item--active');
        });
    };


    let scrollToElement = () => {
        $('.scroll-link')
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (event) {
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 50
                        }, 1000, function () {
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                return false;
                            } else {
                                $target.attr('tabindex', '-1');
                                $target.focus();
                            }
                        });
                    }
                }
            });
    };

    let productDetailWidth = () => {
        let detailArr = $('.product-details-navigation__item'),
            detailWidth = 0;
        for (let i = 0; i < detailArr.length; i++){
            detailWidth = detailWidth + detailArr[i].offsetWidth;
        }

        $('.product-details-navigation').css('min-width', detailWidth);
    };

    let productFooterTablet = () => {
        if(window.innerWidth < 1140){
            $('.product-info__advantages').appendTo('.product__header');
        }
    };

    let productDetailTablet = () => {
        if(window.innerWidth < 1140){
            $('.product-info__advantages').appendTo('.product__header');
            $('.product-info__header').prependTo('.product__header');
        }
    };

    mainSubnavHover();
    openSearchForm();
    clearSearchForm();
    bannerSlider();
    tabs();
    productPrevSlider();
    productLineSlider();
    productLineBorderSlider();
    categorySlider();
    mobileMenu();
    tabletSubnavMenu();
    select();
    filterToggle();
    productSlider();
    colorClicked();
    scrollToElement();
    productDetailWidth();
    productFooterTablet();
    productDetailTablet();
});


$(window).on('load', function () {
   $('#cube-loader').fadeOut();
   $('.preloader').delay(1000).fadeOut('slow');
   $('html').removeClass('fixed');
});

$(window).on('resize', function () {
    let brandInfo = () => {
        if(window.innerWidth < 1140 && window.innerWidth > 767)
            $('.brand__certificates').appendTo('.brand-info__tablet');
        else
            $('.brand__certificates').appendTo('.brand-info');

    };
    brandInfo();
});
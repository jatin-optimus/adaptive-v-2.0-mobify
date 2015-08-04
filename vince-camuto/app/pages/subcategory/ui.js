define([
    '$',
    'hijax',
    'pinny',
    'sheet-bottom'
],
function(
    $,
    Hijax,
    pinny,
    sheetBottom
) {

    // VC-6: Defining global variable to implement the functionlaity of not opening the "refine pinny"
    // when sorting is done as opposed to the Desktop.
    var isSortButtonClicked = '';

    // // initializes filter pinny
    // var refinePinny = function(pinnyClass) {
    //     var $refinePinny = $('.' + pinnyClass);
    //     // initializes pinny
    //     $refinePinny.pinny({
    //         effect: sheetBottom,
    //         structure: {
    //             header: 'REFINE'
    //         },
    //         appendTo: '.c-filter-section',
    //         coverage: '85%',
    //         cssClass: 'c-filter-pinny',
    //         close: function() {
    //             // VC-6: Since we are holding pinny at its position when ajax is replacing it with new pinny
    //             // and content, we are removing the open pinny attribute and class added at ajax run in "interceptInitProductTile"
    //             // to make the body scrollable and functioning as expected
    //             $('.c-filter-pinny').removeClass('c-hijaxLoad pinny--is-open').next().removeClass('shade--is-open');
    //             $('.lockup__container').removeClass('lockup--is-locked').removeAttr('style');
    //             $('html').removeAttr('style');
    //             $('.pinny__content').scrollTop(0);
    //             isSortButtonClicked = 'yes';
    //         }
    //     });

    //     var $filterPinnyTitle = $('.c-filter-pinny').find('.pinny__title');
    //     if (pinnyClass === 'search-results-refinements') {
    //         $filterPinnyTitle.text('REFINE').end()
    //             .addClass('c-refine-pinny').removeClass('c-sortBy-pinny');
    //         var $viewButton = $('<div class="pinny__close c-viewResult c-viewResultDisabled">VIEW RESULTS</div>');
    //         if ($('.c-viewResult').length === 0) {
    //             $('.c-filter-pinny').find('.pinny__content')
    //                 .append($viewButton).prepend($viewButton.clone());
    //
    //             // Enablibg the "view result" button if any of the checkbox is checked in refine pinny.
    //             if ($('.search-results-refinements li').hasClass('selected')) {
    //                 $('.c-viewResult').removeClass('c-viewResultDisabled');
    //             }
    //         }
    //     } else {
    //         $filterPinnyTitle.text('SORT').end()
    //             .addClass('c-sortBy-pinny').removeClass('c-refine-pinny');
    //     }
    //
    //     $('.pinny__close').on('click', function() {
    //         $('.pinny__content').scrollTop(0);
    //     });
    // };

    // Intilalizing refine pinny and open it on Refine button click.
    // var filterPinnyInitialization = function() {
    //     $('.c-refine').on('click', function() {
    //         refinePinny('search-results-refinements');
    //         $('.search-results-refinements').pinny('open');
    //         isSortButtonClicked = 'no';
    //     });
    //
    //     // Intilalizing sortby pinny and open it on sortby button click.
    //     $('.c-sortBy').on('click', function() {
    //         refinePinny('sort-by');
    //         $('.sort-by').pinny('open');
    //         isSortButtonClicked = 'yes';
    //     });
    // };

    // Group "Size" in refine pinny according to mockup
    // var sizeGroupForRefinePinny = function() {
    //     var sizeClassGroup = '';
    //     var column1 = [];
    //     var column2 = [];
    //     var column3 = [];
    //     var $innerDivWrapper = '<div class="c-column1 c-sizeGroup"></div><div class="c-column2 c-sizeGroup"></div><div class="c-column3 c-sizeGroup"></div>';
    //     $('.refinement-list.swatches').children().filter(function() {
    //         sizeClassGroup = String($(this).attr('class')).split(/\s/).pop().split('-').pop();
    //         // column2Regex matches number range (25-48) or same range followed by a character
    //         var column2Regex = /\b(2[5-9]|3[0-9]|4[0-8]|2[5-9]|3[0-9]|4[0-8][a-z])\b/gi;
    //         // column3Regex matches string starting with Alphabet
    //         var column3Regex = /\b[a-z_]+\b/gi;
    //
    //         if (sizeClassGroup.match(column2Regex) !== null) {
    //             column2.push(this);
    //         } else if ( sizeClassGroup.match(column3Regex) !== null && !sizeClassGroup.match(/(na)|(o_s)/gi) ) {
    //             column3.push(this);
    //         } else {
    //             column1.push(this);
    //         }
    //     });
    //     $('.refinement-list.swatches').empty().append($innerDivWrapper);
    //
    //     $('.c-column1').append(column1);
    //     $('.c-column2').append(column2);
    //     $('.c-column3').append(column3);
    // };

    // Code for removing empty list items
    var removeEmptyList = function() {
        $('.grid-tile').map(function() {
            var $self = $(this);
            if ($self.find('.product-tile').length === 0) {
                $self.remove();
            }
        });
    };

    // Replacing image src parameter "$productDetail$" with "$Zoom$" as per the "Vince Camuto Design Handoff"
    var searchResultRestructuring = function() {
        $('.product-tile').removeAttr('data-itemid');
        var $srcAttr = $(this).attr('src');
        $('.search-result-items img').each( function() {
            if ($srcAttr !== undefined) {
                $(this).attr('src', $srcAttr.replace(/\?\$(.*)\$/i, '?$Zoom$'));
            }
        });

        // Restructuring pagination section to match the mockup
        var $pagination = $('.search-result-options');
        $('.next').after($pagination.find('.pagination ul'));
        if ($pagination.find('.previous').length === 0) {
            $('.next').before($('<div class="first-last previous c-disabledPage">PREVIOUS</div>'));
        } else if ($pagination.find('.next').length === 0) {
            $('.previous').after($('<div class="first-last next c-disabledPage">NEXT</div>'));
        }

        // Code for removing empty list items on ajax load
        removeEmptyList();

        // Changing text from "Previous Page"/"Next Page" to "PREVIOUS"/"NEXT" in pagination section
        // to match the mockup
        $('.prev-page-label').text('PREVIOUS');
        $('.next-page-label').text('NEXT');

        // Removing "+" sign from "more color" to match the mockup
        $('.swatches-toggle').text( function() {
            return $(this).text().replace(/\+/g, '');
        });

        // Group "Size" in refine pinny according to mockup on ajax call
        //sizeGroupForRefinePinny();
    };

    // // Adding class "c-expanded" for styling puroposes
    // var addClassToRefinePinnySection = function() {
    //     var $self = $(this);
    //     $('h3.toggle').each( function() {
    //         if ($self.next().css('display') === 'block') {
    //             $self.addClass('c-expanded');
    //         } else {
    //             $self.removeClass('c-expanded');
    //         }
    //     });
    //     $('.refinement > h3').on('click', function() {
    //         $(this).toggleClass('c-expanded');
    //     });
    // };

    var bindHijaxEvent = function() {
        var hijax = new Hijax();
        hijax.set(
            'filterAjax',
            function(url) {
                return /(\W|^)(start|pmid|search\?|prefn1|sz)(\W|$)/gi.test(url);
            },
            {
                beforeSend: function() {
                    $('.c-fixedOverlay').show();
                },
                complete: function(data) {
                    $('.c-fixedOverlay').hide();

                    // Make tapable/linkable area bigger for product tiles
                    $('.search-result-items').find('.product-tile').each(function() {
                        var $product = $(this);
                        var productLink = $product.find('.thumb-link').attr('href');
                        var productName = $product.find('.product-name').text();

                        $product.find('.product-name').html(productName);
                        $product.find('.swatch-list-wrapper').remove();
                        $product.find('.product-info').wrap('<a href="' + productLink + '" class="t-subCategoryList__product"></a>');
                    });
                }
            }
        );
    };

    var interceptInitProductTile = function() {

        // Group "Size" in refine pinny according to mockup on page load
        //sizeGroupForRefinePinny();
        var $internalStructure = '<div class="c-filter-section"> <div class="c-refine">REFINE</div><div class="c-sortBy">SORT</div></div>';
        var _productTileInit = window.VC.searchRefinements.init;
        window.VC.searchRefinements.init = function() {

            // Appending Filter section iff it is not present in DOM since ajax call from search section(in nav) adds
            // duplicate Filter Section.
            if ($('.c-filter-section').length === 0) {
                $('.search-result-options').first().wrap('<div hidden></div>');

                // Inserting "Filter Section" depending on different condition
                var $brandBanner = $('.brand-listing-banner');

                // use tenary operator and if ($brandBanner.length) can be used in place of if ($brandBanner.length > 0)
                if ($brandBanner.length > 0) {
                    $brandBanner.after($internalStructure);
                } else {
                    $('.search-result-utilbar').after($internalStructure);
                }

                // Wrapping all applied filters into a div and inserting it after Filter Section to match the mockup.
                $('.breadcrumb-refinement-value').wrapAll('<div class="c-refinementValue"></div>');
                $('.c-refinementValue').insertAfter('.c-filter-section');

                // Initializing refine pinny section if ajax content is loaded inside from refine pinny
                // to prevent it from disappearing while choosing different options in refine pinny and make it look static.
                // if (isSortButtonClicked === 'no') {
                //     refinePinny('search-results-refinements');
                // } else {
                //     $('html').removeAttr('style');
                //     $('.lockup__container').removeClass('lockup--is-locked').removeAttr('style');
                // }
                //
                // // Enablibg the "view result" button if any of the checkbox is checked in refine pinny.
                // if ($('.search-results-refinements li').hasClass('selected')) {
                //     $('.c-viewResult').removeClass('c-viewResultDisabled');
                // }
                // filterPinnyInitialization();
                // $('.c-filter-pinny').addClass('c-hijaxLoad pinny--is-open').next().addClass('shade--is-open');
            }
            // Adding class "c-expanded" for styling puroposes on ajax load
            //addClassToRefinePinnySection();
            var productTitle = _productTileInit.apply(this, arguments);
            searchResultRestructuring();
            return productTitle;
        };
    };

    var onPageLoadEvents = function() {

        //refinePinny('search-results-refinements');
        //refinePinny('sort-by');

        // Code for removing empty list items on page load
        removeEmptyList();

        // Adding class "c-expanded" for styling puroposes on page load
        //addClassToRefinePinnySection();

        // Removing "+" sign from "more color" to match the mockup
        $('.swatches-toggle').text( function() {
            return $(this).text().replace(/\+/g, '');
        });
    };

    var subCategoryListUI = function() {
        onPageLoadEvents();
        bindHijaxEvent();
        interceptInitProductTile();
        //filterPinnyInitialization();
    };

    return subCategoryListUI;
});

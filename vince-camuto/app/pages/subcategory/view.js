define([
    '$',
    'translator',
    'global/baseView',
    'dust!pages/subcategory/template'
],
function(
    $,
    translator,
    baseView,
    template
) {
    // Restructructing  for search result section.
    var searchResultRestructuring = function() {
        var $searchResult =  $('.search-result-utilbar');
        var $internalStructure = '<div class="c-filter-section"><div class="c-refine">REFINE</div><div class="c-sortBy">SORT</div></div>';
        $('.search-result-options').first().wrap('<div hidden></div>');
        $searchResult.after($internalStructure);
        $searchResult.after($('.brand-listing-banner'));
        $('.product-tile').removeAttr('data-itemid');

        // Make tapable/linkable area bigger for product tiles
        $('.search-result-items').find('.product-tile').each(function() {
            var $product = $(this);
            var productLink = $product.find('.thumb-link').attr('href');
            var productName = $product.find('.product-name').text();

            $product.find('.product-name').html(productName);
            $product.find('.swatch-list-wrapper').remove();
            $product.find('.product-info').wrap('<a href="' + productLink + '" class="t-subCategoryList__product"></a>');
        });
    };

    var paginationTextChange = function() {
        // Changing text from "Previous Page"/"Next Page" to "PREVIOUS"/"NEXT"
        // in pagination section to match the mockup
        $('.prev-page-label').text('PREVIOUS');
        $('.next-page-label').text('NEXT');
    };

    return {
        template: template,
        extend: baseView,
        context: {
            templateName: 'subCategoryList',
            productImages: function() {
                searchResultRestructuring();
                // Restructuring pagination section to match the mockup
                var $pagination = $('.search-result-options');
                $('.next').after($pagination.find('.pagination ul'));
                if ($pagination.find('.previous').length === 0) {
                    $('.next').before($('<div class="first-last previous c-disabledPage">' +
                        translator.translate('previous') +  '</div>'));
                } else if ($pagination.find('.next').length === 0) {
                    $('.previous').after($('<div class="first-last next c-disabledPage">' +
                        translator.translate('next') + '</div>'));
                }
                paginationTextChange();
                return $('#primary');
            }
        }
    };
});

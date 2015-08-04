/**
 * Home View
 */

define([
    '$',
    'global/baseView',
    'dust!pages/pdp/template'
],
function($, baseView, template) {
  // Get the index of iteration of images in scooch starting with "1".
    var getImageCounter = function() {
        if ($('.main-image').length > 1) {
            return $('.main-image').map( function(index) {
                return index + 1;
            });
        }
    };

    return {
        template: template,
        extend: baseView,
        context: {
            // Code Review
            // - the template name here should be treated in the same manner
            //   as a CSS class and should be dash-spaced not camelCase
            templateName: 'productDetail',
            productSummary: function() {
                return {
                    productName: $('.product-name'),
                    productPrice: $('.product-detail .product-price'),
                    styleCode: $('.attribute div:contains(Style)').clone().end().remove()
                };
            },
            breadCrumb: function() {
                return $('.breadcrumb');
            },
            productScooch: function() {
                return {
                    image: $('.main-image img'),
                    counter: getImageCounter()
                };
            },
            reviewSection: function() {
                return $('.pr_snippet_product');
            },
            productVariations: function() {
                return $('.product-variations');
            },
            addToCartSection: function() {
                return $('.product-add-to-cart');
            },
            accordianSection: function() {
                return {
                    productDetail: $('.tab-content'),
                    shareWithFriend: $('.pdpSocial'),
                };
            }
        }
    };
});

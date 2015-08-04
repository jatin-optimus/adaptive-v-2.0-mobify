/**
 * Home View
 */

define([
    '$',
    'global/baseView',
    'dust!pages/home/template',
    'components/newsletter/view'
],
function($, baseView, template, newsletter) {
    return {
        template: template,
        includes: {
            newsletter: newsletter
        },
        extend: baseView,
        context: {
            templateName: 'home',
            productImages: function() {
                var $content = $('#primary');

                // VC-109: Don't bring in social content
                $content.find('.home-hero-social').remove();

                return $content;
            }
        }

        /**
         * If you wish to override preProcess/postProcess in this view, have a
         * look at the documentation:
         *
         * http://adaptivejs.mobify.com/v1.0/docs/views
         */
    };
});

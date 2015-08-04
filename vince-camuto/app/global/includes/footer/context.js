define(['$', 'translator'], function($, translator) {

    // Get the New Letter form data.
    // var getnewsLetter = function() {
    //     var $newsLetter = $('#leftNav .newsletter');
    //     // Remove the placeholder attribute to match the mockup.
    //     $newsLetter.find('.emailAddress').removeAttr('placeholder').end()
    //     // Add value of 'JOIN' text to match the mockup.
    //         .find('.newsletterSubmit').val(translator.translate('join'));
    //     // Remove the '-' text in this character 'Newsletter Sign-Up' to match
    //     // the mockup.
    //     $newsLetter.each(function() {
    //         $(this).html($(this).html().replace('-', ''));
    //     });
    //     return $newsLetter;
    // };
    return {
        context: {
            shippingBanner: function() {
                var $item;
                var name = '';
                if ($('.subfooter .html-slot-container, .help .html-slot-container').length > 0) {
                    $('.subfooter .html-slot-container p, .help .html-slot-container p').map(function(_, item) {
                        $item = $(item);
                        $item.html($item.html().replace('1 (866) 239 0643', ''));
                        $item.html($item.html().replace(/<br>/gi, '<div class="c-remove-break"></div>'));
                        $item.html($item.html().
                            replace(/customerservice@vincecamuto.com/gi, '<a class="c-email" href=mailto:customerservice@vincecamuto.com>customerservice@vincecamuto.com</a>'));
                        $item.html($item.html().
                            replace(/1-866-239-0643/gi, '<a href=tel:1-866-239-0643 class=c-number>1-866-239-0643</a>'));
                    });
                    $item = $('.subfooter .html-slot-container p, .help .html-slot-container p');
                    name = 'c-new-banner';
                } else {
                    $item = $('.html-slot-container', $('.header-banner'));
                    name = '';
                }

                return {
                    footerBanner: $item,
                    class: name
                };

            },
            // newsLetterForm: function() {
            //     return getnewsLetter();
            // },
            socialLinks: function() {
                var $socialIcons = $('.socialicons');
                return {
                    instagram: $socialIcons.find('.inst'),
                    facebook: $socialIcons.find('.fb'),
                    twitter: $socialIcons.find('.twit'),
                    pinterest: $socialIcons.find('.pin'),
                    youtube: $socialIcons.find('.yt')
                };
            },
            homeLink: function() {
                return $('.primary-logo a').attr('href');
            }
        }
    };
});

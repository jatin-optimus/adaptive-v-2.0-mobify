define(['$', 'translator'], function($, translator) {
    return {
        context: {
            newsLetterForm: function() {
                var $newsLetter = $('#leftNav .newsletterSubscribe');
                $newsLetter.find('.newsletterSubmit').val('join');
                return $newsLetter;
            }
        }
    };
});

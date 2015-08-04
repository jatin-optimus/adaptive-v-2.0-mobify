define(['$'], function($) {
    return {
        context: {
            brandNav: function() {
                return $('#brandnav li');
            },
            activeBrandClass: function() {
                return $('#brandnav li.active').attr('class');
            },
            homeLink: function() {
                return $('.primary-logo a').attr('href');
            },
            // menulist: function() {
            //     var $menu = $('#navigation');
            //     $menu.find('.header-search-container').remove();
            //     return $menu.find('.menu-category > li > a');
            // }
        }
    };
});

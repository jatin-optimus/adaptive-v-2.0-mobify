define(['$'], function($) {

    return {
        context: {
            // data for main nav section
            // menuCategory: function() {
            //     var $nav = $('#navigation .menu-category');
            //     return $nav.find('>li').map(function(_, item) {
            //         var $item = $(item);
            //         return {
            //             navHeading: $item.find('> a').addClass('c-nav-heading'),
            //             subItems: $item.find('> .level-2 li').map(function(_, subItem) {
            //                 var $subItem = $(subItem);
            //                 return {
            //                     subItemHeading: $subItem.find('a')
            //                 };
            //             })
            //         };
            //     });
            // },
            // subNavigation: function() {
            //     var $subNav = $('.subnav');
            //     $subNav.prepend($subNav.find('li a:contains(Find a Store)').parent());
            //     // VC-116: Inserted press page link after "Find a Store".
            //     $subNav.find('li a:contains(Find a Store)').parent().after($('[href*=press]').parent());
            //     return $subNav.find('a:contains(Blog)').remove().end()
            //         .find('a').addClass('c-subNav').end();
            // },
            // data for My Account drop down
            accountDropdown: function() {
                var $accountDropdown = $('.header-account-dropdown');
                $accountDropdown.find('li span').addClass('c-myAccount');
                return $accountDropdown;
            }
            // headerSearch: function() {
            //     $('#q').addClass('c-placeholder');
            //     return $('.header-search-container').find('legend, label').remove().end();
            // }
        }
    };
});

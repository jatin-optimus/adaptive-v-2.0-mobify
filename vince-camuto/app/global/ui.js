define([
    '$',
    'pikabu',
    'fastclick',
    'deckard'
],
function(
    $,
    Pikabu,
    fastclick
) {

    // Pikabu initialization.
    var initPikabu = function() {
        var pikabu = new Pikabu({
            widths: {
                left: '85%'
            },
            // Removing the "m-pikabu-hidden" class on page load for smooth opening of
            // Pikabu sidebar.
            onClosed: function() {
                $('.m-pikabu-sidebar').removeClass('m-pikabu-hidden');
                $('.menu-utility-user').css('display', 'none');
            }
        });
        $('.m-pikabu-sidebar').removeClass('m-pikabu-hidden');
    };

    // Contains all click events
    var bindClickEvent = function() {
        // Closing bellows on pikabu close
        // $('.m-pikabu-overlay').on('click', function() {
        //     $('.c-nav-bellows').bellows('closeAll');
        // });
    };

    var globalUI = function() {
        // Remove 300ms tap delay using FastClick
        fastclick.attach(document.body);

        // Enable active states for CSS
        $(document).on('touchstart', function() {});

        // Add any scripts you would like to run on ALL pages here
        //initPikabu();
        //bindClickEvent();
    };

    return globalUI;

});

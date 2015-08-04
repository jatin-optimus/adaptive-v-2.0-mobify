define([
    '$'
],
function($) {
    // By applying the appropriate zoom to the image map, we scale the
    // image itself, preserving the click target.
    var resizeImageMaps = function() {
        var $promos = $('#Map area');

        var applyZoom = function() {
            // Using desktop's jQuery because unlike Zepto it implements width
            // correctly (i.e. without padding)
            var availableWidth = window.jQuery('#x-root').width();

            var $img = $('img[usemap="#Map"]');

            if ($img.length === 0) {
                return;
            }

            var zoom = availableWidth / $img[0].naturalWidth;

            $img.css({
                'zoom': zoom
            });
        };

        $(window).on('orientationchange', applyZoom);

        applyZoom();
    };
    var homeUI = function() {
        resizeImageMaps();
    };

    return homeUI;
});

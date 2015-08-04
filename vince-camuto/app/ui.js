/**
 * Scripts required here will be combined into ui.js
 */

require([
    'global/ui',
    'pages/home/ui',
    'pages/subcategory/ui',
    'pages/pdp/ui'
    // Add additional UI scripts here
],
function(
    globalUI,
    home,
    subcategory,
    pdp
) {

    // This file gets pre-loaded so we dont' want to explicitly execute
    //  anything here. Instead we will wait for a require statement run
    //  in our template

}, null, true); // relPath, forceSync

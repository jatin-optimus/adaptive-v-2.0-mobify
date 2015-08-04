define([
    '$',
    'adaptivejs/router',
    'pages/home/view',
    'pages/subcategory/view',
    'pages/pdp/view'
],
function($, Router, Home, Subcategory, Pdp) {
    var router = new Router();

    router
        .add(Router.selectorMatch('.home-hero'), Home)
        .add(Router.selectorMatch('.search-result-utilbar, .no-hits-search'), Subcategory)
        .add(Router.selectorMatch('#pdpMain'), Pdp);

    return router;
});

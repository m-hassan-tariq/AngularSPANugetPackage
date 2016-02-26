(function () {
    'use strict';

    angular
        .module('myWebsite', [
            'myWebsite.Core',
            'myWebsite.SharedModule',
            'myWebsite.CustomModule'
        ]);

    // Injected Dependency list of All Core 3rd Party Libraries
    angular
        .module('myWebsite.Core', [
            'ui.router',
            'ngMaterial',
            'ngMessages',
            'ui.bootstrap',
            'oc.lazyLoad',
            'ngAnimate'
        ]);

    // Injected Dependency list of All Modules
    angular
        .module('myWebsite.CustomModule', [
            'myWebsite.home',
            'myWebsite.temp'
        ]);

    angular
        .module('myWebsite.SharedModule', [
            'myWebsite.layout'
        ]);

})();

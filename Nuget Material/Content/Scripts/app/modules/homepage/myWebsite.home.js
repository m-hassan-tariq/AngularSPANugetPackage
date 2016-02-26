
(function () {
    'use strict';

    angular
        .module('myWebsite.home', ['myWebsite.home.controllers', 'myWebsite.home.services'])
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: '/Scripts/app/modules/homepage/views/myWebsite.home.html',
                resolve: {
                    foo: foo
                }
            });

        function foo(HomeService) {
            return 1;//HomeService.get();
        }
    }

})();

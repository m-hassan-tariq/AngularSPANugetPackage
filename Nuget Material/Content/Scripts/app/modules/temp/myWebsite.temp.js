
(function () {
    'use strict';

    angular
        .module('myWebsite.temp', ['myWebsite.temp.controllers', 'myWebsite.temp.services'])
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('temp', {
                url: '/temp',
                controller: 'TempController',
                controllerAs: 'vm',
                templateUrl: '/Scripts/app/modules/temp/views/myWebsite.temp.html'
            });
    }

})();

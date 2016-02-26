(function () {
    'use strict';

    angular
        .module('myWebsite.home.services', [])
        .factory('HomeService', homeService);

    homeService.$inject = ['webApi'];

    function homeService(webApi) {

        var factory = {
            get: get,
            save: save
        };

        return factory;

        ////////////////////////////Implementation//////////////////////////////////////

        function get() {
             return webApi.nonParameter('GET', 'api/Controller/Action', '');
         }

         function save(obj) {
             return webApi.withParameter('POST', 'api/Controller/Action', obj);
         }

    };

})();

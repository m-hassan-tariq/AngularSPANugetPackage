(function () {
    'use strict';

    angular
        .module('myWebsite.temp.services', [])
        .factory('TempService', tempService);

    tempService.$inject = ['webApi'];

    function tempService(webApi) {

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

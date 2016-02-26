(function () {
    'use strict';

    angular
        .module('myWebsite')
        .factory('tempDataService', tempDataService);

    tempDataService.$inject = [];

    function tempDataService() {

        var obj = {};

        var service = {
            setTechData: setTechData,
            getTechData: getTechData
        };

        return service;

        ////////////////////////////Implementation//////////////////////////////////////

        function setTechData(data) {
            obj.list = data;
        }

        function getTechData() {
            return obj.list;
        }

    }

})();
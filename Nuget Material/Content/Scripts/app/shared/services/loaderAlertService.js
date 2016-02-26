(function () {
    'use strict';

    angular
        .module('myWebsite')
        .factory('loaderService', loaderService);

    loaderService.$inject = [];

    function loaderService() {

        var loaderStatus = "";

        var service = {
            showLoader: showLoader,
            hideLoader: hideLoader,
            getLoaderValue: getLoaderValue
        };

        return service;

        ////////////////////////////Implementation//////////////////////////////////////

        function showLoader() {
            loaderStatus = "indeterminate";
            return loaderStatus;
        }

        function hideLoader() {
            loaderStatus = "";
            return loaderStatus;
        }

        function getLoaderValue() {
            return loaderStatus;
        }
    }

})();
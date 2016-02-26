
(function () {

    'use strict';
    angular
        .module('myWebsite')
        .factory("webApi", webApi);

    webApi.$inject = ['$http', '$templateCache', '$q', '$mdToast'];

    function webApi($http, $templateCache, $q, $mdToast) {

        var factory = {
            withParameter: withParameter,
            nonParameter: nonParameter
        };

        return factory;

        ////////////////////////////Implementation//////////////////////////////////////

        function withParameter(methodType, webApiUrl, parameterObject) {
            console.log(parameterObject)
            var deferred = $q.defer();
            $http({
                method: methodType,
                url: webApiUrl, //window.location.protocol + '//' + window.location.host + window.location.pathname +
                data: JSON.stringify(parameterObject),
                cache: false
            })
            .success(deferred.resolve)
            .error(function (result) {
                $mdToast.show($mdToast.simple().content(result));
                deferred.reject;
            });
            return deferred.promise;
        }

        function nonParameter(methodType, webApiUrl, parameterObject) {
            var deferred = $q.defer();
            $http({
                method: methodType,
                url: webApiUrl,//window.location.protocol + '//' + window.location.host + window.location.pathname + webApiUrl,
                cache: false,
                params: parameterObject
            })
            .success(deferred.resolve)
            .error(function (result) {
                $mdToast.show($mdToast.simple().content(result));
                deferred.reject;                
            });
            return deferred.promise;
        }
    };

})();

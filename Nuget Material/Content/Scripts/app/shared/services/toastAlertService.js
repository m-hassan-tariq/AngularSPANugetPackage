(function () {
    'use strict';

    angular
        .module('myWebsite')
        .factory('toastAlert', toastAlert);

    toastAlert.$inject = ['$mdToast'];

    function toastAlert($mdToast) {

        var service = {
            showToaster: showToaster
        };

        return service;

        ////////////////////////////Implementation//////////////////////////////////////

        function showToaster(content) {
            $mdToast.show(
              $mdToast.simple()
                .textContent(content)
                .position('bottom right')
                .hideDelay(3000)
            );
        }

    }

})();
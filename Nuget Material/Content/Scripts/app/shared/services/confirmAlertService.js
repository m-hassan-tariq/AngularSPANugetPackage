(function () {
    'use strict';

    angular
        .module('myWebsite')
        .factory('confirmAlert', confirmAlert);

    confirmAlert.$inject = ['$mdDialog'];

    function confirmAlert($mdDialog) {

        var service = {
            confirmBoxResponse: confirmBoxResponse
        };

        return service;

        ////////////////////////////Implementation//////////////////////////////////////

        function confirmBoxResponse(title, content, confirmText, successCb, successCbParam) {
            var confirm = $mdDialog.confirm()
                      .title(title)
                      .textContent(content)
                      .ariaLabel('Lucky day')
                      .ok(confirmText)
                      .cancel('Cancel');

            $mdDialog.show(confirm).then(function () {
                successCb(successCbParam);
            }, function () {
                //pressed cancel
            });
        }

    }

})();
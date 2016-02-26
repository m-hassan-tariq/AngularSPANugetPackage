(function () {
    'use strict';

    angular
        .module('myWebsite.home.controllers', [])
        .controller('HomeController', homeController);

    homeController.$inject = ['HomeService', '$scope', '$filter', 'confirmAlert',
                                 'toastAlert', 'loaderService'];

    function homeController(HomeService, $scope, $filter, confirmAlert,
                               toastAlert, loaderService) {
        var vm = this;

        init();

        function init() {

            vm.showLoader = loaderService.getLoaderValue();

            vm.foo = foo;

            toastAlert.showToaster('Toast Activated');
            
        }

        ////////////////////////////Implementation//////////////////////////////////////

        function foo() {

            vm.showLoader = loaderService.showLoader();

            ajaxCompletedResponse('Ajax completed');

        }

        ////////////////////////////Helping Function//////////////////////////////////////

        function bar() {

        }

        function ajaxCompletedResponse(message) {
            toastAlert.showToaster(message);
            vm.showLoader = loaderService.hideLoader();
        }

    };

})();

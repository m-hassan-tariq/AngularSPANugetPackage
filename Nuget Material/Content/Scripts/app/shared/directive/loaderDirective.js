(function () {
    'use strict';

    angular
        .module('myWebsite')
        .directive('loader', loader);

    function loader() {
        var directive = {
            restrict: 'EA',
            templateUrl: '/scripts/app/shared/directive/template/loaderDirective.html',
            //scope: {
            //},
            //controller: loaderController,
            //controllerAs: 'vm'
        };

        return directive;
    }

    loaderController.$inject = [];

    function loaderController() {

        var vm = this;

        init();

        /////////////////////Implementation///////////////////////////////

        function init() {
           
        }
    }

})();

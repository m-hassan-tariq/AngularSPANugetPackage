(function () {
    'use strict';

    angular
        .module('myWebsite')
        .directive('tempDirective', tempDirective);

    function searchCombotempDirective() {
        var directive = {
            restrict: 'EA',
            templateUrl: '/scripts/app/shared/directive/template/tempDirective.html',
            scope: {
                data: '=',
                filtersearch: '&'
            },
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }

    Controller.$inject = [];

    function Controller() {

        var vm = this;

        init();

        /////////////////////Implementation///////////////////////////////

        function init() {
            vm.datalist = vm.data;
            vm.filterSearch = vm.filtersearch;
         
            vm.selectedItemChange = selectedItemChange;

        }

        function selectedItemChange(item) {
            vm.filterSearch()(vm.parameterName);
        }

    }

})();

(function () {
    'use strict';

    angular
        .module('myWebsite.temp.controllers', [])
        .controller('TempController', tempController);

    tempController.$inject = ['TempService', '$scope', '$filter', ];

    function tempController(TempService, $scope, $filter) {
        var vm = this;

        init();

        function init() {

            vm.foo = foo;
            
        }

        ////////////////////////////Implementation//////////////////////////////////////

        function foo() {

        }

        ////////////////////////////Helping Function//////////////////////////////////////

        function bar() {

        }

    };

})();


(function () {
    'use strict';

    angular
        .module('myWebsite.layout.controllers', [])
        .controller('ShellController', shellController);

    shellController.$inject = ['$state'];

    function shellController($state) {
        var vm = this;

        init();

        function init() {
            vm.foo = foo;

        }

        function foo(stateName) {
            $state.go(stateName);
        }

    };

})();

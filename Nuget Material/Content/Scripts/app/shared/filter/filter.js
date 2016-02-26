
(function () {

    'use strict';
    angular
        .module('myWebsite')
        .filter("dateTimeFormating", dateTimeFormating);

    function dateTimeFormating() {

        return function (input) {
            return new Date(input);
        }

    };

})();

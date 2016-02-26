(function () {
    'use strict';

    angular
        .module('myWebsite')
        .config(config)
        .run(runBlock);

    runBlock.$inject = ['$state'];

    function runBlock($state) {
        // $state.go('home');
    };

    config.$inject = ['$stateProvider', '$locationProvider'];

    function config($stateProvider, $locationProvider) {
        //.state('plurarlSettings', {
        //    url: '/pluralsight-setting',
        //    controller: 'SettingController',
        //    controllerAs: 'vm',
        //    templateUrl: '/Scripts/app/modules/PluralSight/Setting/views/pluralsight.setting.html',
        //    resolve: {
        //        search: function ($ocLazyLoad) {
        //            return $ocLazyLoad.load([
        //                {
        //                    name: 'pluralsight.setting',
        //                    files: ['/Scripts/app/modules/PluralSight/Setting/pluralsight.setting.js'],
        //                    cache: false
        //                },
        //                {
        //                    name: 'pluralsight.setting.controllers',
        //                    files: ['/Scripts/app/modules/PluralSight/Setting/js/pluralsight.setting.controllers.js'],
        //                    cache: false
        //                },
        //                {
        //                    name: 'pluralsight.setting.services',
        //                    files: ['/Scripts/app/modules/PluralSight/Setting/js/pluralsight.setting.services.js'],
        //                    cache: false
        //                }
        //            ]);
        //        }
        //    }
        //});

        //$locationProvider.html5Mode({ enabled: true, requireBase: false });   
    }

})();

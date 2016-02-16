define(['angular', 'fzTranslate', 'pascalprecht.translate', 'angular.translate', 'tmh.dynamiclocale'], function (angular) {
    'use strict';
    return angular.module("fzTranslate").factory("fzTranslatorService", function ($q, $translate, $translatePartialLoader, tmhDynamicLocale, $rootScope, $filter) {
       
        var fzTranslatorService = {
            setLanguage: function (cultureString,moduleName) {
                $translatePartialLoader.addPart(moduleName);
                //$translate.refresh();
                tmhDynamicLocale.set(cultureString);
                $translate.use(cultureString);
            }
        };
        $rootScope.$on('$translateChangeSuccess', function (event, data) {
            $filter('currencys');
        });
        return fzTranslatorService;
    });
});


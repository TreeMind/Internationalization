define(['angular', 'pascalprecht.translate','tmh.dynamiclocale'], function (angular) {
    var fzTranslate = angular.module("fzTranslate", ['pascalprecht.translate', 'tmh.dynamicLocale']).
    config(['$translateProvider', '$translatePartialLoaderProvider','tmhDynamicLocaleProvider', function ($translateProvider, $translatePartialLoaderProvider,tmhDynamicLocaleProvider ) {
        /*$translateProvider.useStaticFilesLoader({
            prefix: "localization_resources/resource-",
            suffix: '.json'
        });*/
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'Resources/FZ/{lang}/{part}/resource-{lang}.json'
        });
        // Tell the module what language to use by default
        tmhDynamicLocaleProvider.localeLocationPattern('../lib/angular-i18n/angular-locale_{{locale}}.js');
        $translateProvider.preferredLanguage('en_US');

       // $translateProvider.useLocalStorage();
    }])
    .filter('currencys', ['$filter', '$locale',
    function ($filter, $locale) {
        return function (num) {
            debugger
            var sym = $locale.NUMBER_FORMATS.CURRENCY_SYM;
            return $filter('currency')(num, '<span>' + sym + '</span>');
        };
    }
    ]);
    return fzTranslate;
});
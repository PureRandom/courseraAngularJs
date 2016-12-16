(() => {
    'use strict';

    angular.module('data')
        .component('categories', {
            templateUrl: 'components/categories.html',
            bindings: {
                items: '<',
            },
        });
})();

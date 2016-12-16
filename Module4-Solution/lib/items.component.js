(() => {
    'use strict';

    angular.module('data')
        .component('categoryItems', {
            templateUrl: 'components/items.html',
            bindings: {
                items: '<',
            },
        });
})();

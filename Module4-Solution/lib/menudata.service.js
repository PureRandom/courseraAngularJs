(() => {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        const MenuData = this;

        MenuData.getAllCategories = () => {
            $http({
                method: 'GET',
                url: (`${ApiBasePath}/categories.json`),
            }).then(result => {
                return result.data;
            },
                result => {
                    return console.error(result);
                });
        };

        MenuData.getItemsForCategory = (categoryShortName) => {
            $http({
                method: 'GET',
                url: (`${ApiBasePath}/menu_items.json?category=${categoryShortName}`),
            }).then(result => result.data);
        };
    }
})();

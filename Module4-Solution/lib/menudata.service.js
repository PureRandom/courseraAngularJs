(() => {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        const MenuData = this;

        // Get all categories
        MenuData.getAllCategories = () => $http({
            method: 'GET',
            url: (`${ApiBasePath}/categories.json`),
        }).then(result => result.data, result => console.error(result));

        // Get items for category
        MenuData.getItemsForCategory = categoryShortName => $http({
            method: 'GET',
            url: (`${ApiBasePath}/menu_items.json?category=${categoryShortName}`),
        }).then(result => result.data, result => console.error(result));
    }
})();

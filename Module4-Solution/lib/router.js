(() => {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            // Home Page
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
            })

            // Categories Page
            .state('categories', {
                url: '/categories',
                templateUrl: 'templates/categories.html',
                controller: 'CategoriesListController as CategoriesList',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) { 
                        return MenuDataService.getAllCategories();
                    }
                    ],
                },
            })

            // Categories list page
            .state('categoryItem', {
                url: '/category-item/{itemShortName}',
                templateUrl: 'templates/items.html',
                controller: 'CategoriesItemListController as item',
                resolve: {
                    items: ['MenuDataService', '$stateParams', (MenuDataService, $stateParams) => MenuDataService.getItemsForCategory($stateParams.itemShortName)],
                },
            });
    }
})();

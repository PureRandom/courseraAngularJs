(() => {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', 'http://davids-restaurant.herokuapp.com')
        .directive('foundItems', MenuListDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        const narrowItController = this;
        narrowItController.foundItems = [];
        narrowItController.error = '';
        narrowItController.searchTerm = '';

        narrowItController.searchItems = () => {
            const promise = MenuSearchService.getMatchedMenuItems(narrowItController.searchTerm);

            promise.then((response) => {
                narrowItController.foundItems = response;
                if (narrowItController.searchTerm.length < 1 || response.length < 1) {
                    narrowItController.error = 'Nothing found';
                } else {
                    narrowItController.error = '';
                }
                console.log(response);
            })
                .catch((error) => {
                    console.error(error);
                    narrowItController.error = 'Nothing found';
                });
        };

        narrowItController.removeItem = (index) => {
            narrowItController.foundItems.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        const searchService = this;

        searchService.getMatchedMenuItems = searchTerm =>
            $http({
                method: 'GET',
                url: (`${ApiBasePath}/menu_items.json`),
            }).then((result) => {
                let foundItems = [];
                const returnItems = [];

                if (typeof searchTerm !== 'undefined' && searchTerm.length > 0) {
                    foundItems = foundItems.concat(result.data.menu_items);
                    const searchTermLocal = searchTerm.toLowerCase();
                    foundItems.forEach((item) => {
                        if (item.description.toLowerCase().indexOf(searchTermLocal) > 1) {
                            returnItems.push(item);
                        }
                    });
                }

                // return processed items
                return returnItems;
            });
    }

    function MenuListDirective() {
        const ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&',
            },
            controller: NarrowItDownController,
            controllerAs: 'list',
            bindToController: true,
        };

        return ddo;
    }
})();

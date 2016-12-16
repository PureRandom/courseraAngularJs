(() => {
    'use strict';

    angular.module('data')
        .controller('CategoriesItemsListController', CategoriesItemsListController);

    CategoriesItemsListController.$inject = ['items'];
    function CategoriesItemsListController(items) {
        const categoriesItems = this;
        categoriesItems.items = items;
    }
})();

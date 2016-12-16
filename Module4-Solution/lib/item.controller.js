(() => {
    'use strict';

    angular.module('data')
        .controller('CategoriesItemListController', CategoriesItemListController);


    CategoriesItemListController.$inject = ['items'];
    function CategoriesItemListController(items) {
        const mainList = this;
        console.log(items);
    }
})();

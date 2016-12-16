(() => {
    'use strict';

    angular.module('data')
        .controller('CategoriesListController', CategoriesListController);


    CategoriesListController.$inject = ['items'];
    function CategoriesListController(items) {
        const mainList = this;
        mainList.items = items;
    }

})();

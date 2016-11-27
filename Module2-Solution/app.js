(() => {
    'use strict';

    angular.module('shoppingApp', [])
        .controller('ToBuyController', ToBuyController)
        // .controller('AlreadyBoughtController', AlreadyBoughtController)
        .provider('toBuy', toBuyProvider)
        // .provider('broughtProvider', broughtProvider)
        .config(toBuyConfig);

    toBuyConfig.$inject = ['toBuyProvider'];
    function toBuyConfig(toBuyProvider) {
        toBuyProvider.defaults = [
            {
                itemName: 'Cookeies',
                itemQuantity: 5,
            },
            {
                itemName: 'Coke',
                itemQuantity: 2,
            },
            {
                itemName: 'Chips',
                itemQuantity: 1,
            },
            {
                itemName: 'Pillows',
                itemQuantity: 4,
            },
            {
                itemName: 'Books',
                itemQuantity: 10,
            },
            {
                itemName: 'DVDs',
                itemQuantity: 20,
            },
        ];
    }

    ToBuyController.$inject = ['toBuy'];
    function ToBuyController(toBuy) {
        const ToBuyItems = this;

        ToBuyItems.toBuyItems = toBuy.getItems;

        ToBuyItems.itemBrought = (itemIndex) => {
            toBuy.removeItem(itemIndex);
        };
    }

    // AlreadyBoughtController.$inject = ['$scope', 'arrayFactory'];
    // function AlreadyBoughtController($scope, arrayFactory) {

    // }

    function arrayService(defaults) {
        const arrService = this;
        const arrItems = defaults || [];

        arrService.addItem = (itemName, itemQuantity) => {
            const item = {
                itemName,
                itemQuantity,
            };
            arrItems.push(item);
        };

        arrService.removeItem = (itemIndex) => {
            arrItems.splice(itemIndex, 1);
        };

        arrService.getItems = arrItems;
    }

    function toBuyProvider() {
        const provider = this;

        provider.defaults = [];

        provider.$get = () => {
            return new arrayService(provider.defaults);
        };
    }

    // function broughtProvider() {
    //     const provider = this;

    //     provider.$get = () => {
    //         return new arrayService(provider.defaults);
    //     };
    // }
})();

(() => {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        const ToBuyItems = this;
        // Get Buy Items
        ToBuyItems.toBuyItems = ShoppingListCheckOffService.buyItems;
        // Remove Buy Items and add to Brought Items
        ToBuyItems.itemBrought = (itemIndex) => {
            ShoppingListCheckOffService.updateBroughtList(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        const BroughtItems = this;
        // Get Buy Items
        BroughtItems.itemsBrought = ShoppingListCheckOffService.broughtItems;
    }

    function ShoppingListCheckOffService() {
        const shoppingListService = this;
        // Set up array items for Buy and Brought
        const buyItems = [
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
        const broughtItems = [];
        // Remove Buy Items and add to Brought Items
        shoppingListService.updateBroughtList = (itemIndex) => {
            const item = buyItems[itemIndex];
            broughtItems.push(item);
            this.removeBuyItem(itemIndex);
        };
        // Remove Buy Item
        shoppingListService.removeBuyItem = (itemIndex) => {
            buyItems.splice(itemIndex, 1);
        };
        // Add array items to service
        shoppingListService.buyItems = buyItems;
        shoppingListService.broughtItems = broughtItems;
    }
})();

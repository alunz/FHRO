var addressCollection;

var Router = Backbone.Router.extend({
    routes: {
        "new": "createAddress",
        "edit/:id": "editAddress",
        "delete/:id": "deleteAddress",
        "list": "listAddress",
        "*actions": "listAddress"
    }
});

var router = new Router();

router.on('route:createAddress', function() {
    $('.addressTable').remove();

    var addressModel = new AddressModel();
    var addressFormView = new AddressFormView({model: addressModel});
    addressFormView.render();
});

router.on('route:editAddress', function(id) {
    $('.addressTable').remove();

    var addressModel = addressCollection.get(id);
    var addressFormView = new AddressFormView({model: addressModel});
    addressFormView.render();
});

router.on('route:deleteAddress', function(id) {
    if (!addressCollection) {
        addressCollection = new AddressCollection();
        addressCollection.fetch();
    }
    addressCollection.get(id).destroy();
});

router.on('route:listAddress', function() {
    addressCollection = new AddressCollection();
    var view = new AddressCollectionView({model: addressCollection});
    addressCollection.fetch();
});

Backbone.history.start();
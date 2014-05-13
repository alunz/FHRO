define(['backbone', 'addressModel', 'addressFormView', 'addressCollection', 'addressCollectionView', 'app'],
    function(Backbone, AddressModel, AddressFormView, AddressCollection, AddressCollectionView, app) {
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

            var addressModel = app.addressCollection.get(id);
            var addressFormView = new AddressFormView({model: addressModel});
            addressFormView.render();
        });

        router.on('route:deleteAddress', function(id) {
            if (!app.addressCollection) {
                app.addressCollection = new AddressCollection();
                app.addressCollection.fetch();
            }
            app.addressCollection.get(id).destroy();
        });

        router.on('route:listAddress', function() {
            app.addressCollection = new AddressCollection();
            var view = new AddressCollectionView({model: app.addressCollection});
            app.addressCollection.fetch();
        });

        return router;
    });


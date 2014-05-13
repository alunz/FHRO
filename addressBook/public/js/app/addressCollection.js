define(['backbone', 'addressModel'], function(Backbone, AddressModel) {
    var AddressCollection = Backbone.Collection.extend({
        model: AddressModel,
        url: 'address'
    });
    return AddressCollection;
});

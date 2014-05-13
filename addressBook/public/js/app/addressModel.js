define(['backbone'], function(Backbone) {
    var AddressModel = Backbone.Model.extend({
        urlRoot: '/address'
    });
    return AddressModel;
});

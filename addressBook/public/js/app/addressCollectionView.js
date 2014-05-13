define(['backbone', 'addressView', 'text!addressCollection.tpl', 'app'], function(Backbone, AddressView, template, app) {
    var AddressCollectionView = Backbone.View.extend({

        tagName: 'div',

        className: 'addressTable',

        events: {
            'click .btnNew': 'createAddress'
        },

        template: template,

        initialize: function() {
            this.listenTo(this.model, "add", this.render);
            this.listenTo(this.model, "add", this.bindViews);
            this.listenTo(this.model, "destroy", this.bindViews)
        },

        bindViews: function(model, collection) {
            $('.addressTable tbody').empty();
            collection.each(function(item) {
                var addressView = new AddressView({model: item});
                addressView.render();
            });
        },

        render: function() {
            $('.addressForm').remove();
            $('.addressTable').remove();

            $('body').append(this.$el.html(this.template));
            this.delegateEvents();
        },

        createAddress: function() {
            app.router.navigate('/new', {trigger: true});
        }

    });
    return AddressCollectionView;
});

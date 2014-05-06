var AddressCollectionView = Backbone.View.extend({

    tagName: 'div',

    className: 'addressTable',

    events: {
        'click .btnNew': 'createAddress'
    },

    template: '<table><thead>' +
        '<tr>' +
        '<td>Gender</td>' +
        '<td>Firstname</td>' +
        '<td>Lastname</td>' +
        '<td>Street</td>' +
        '<td>Postcode</td>' +
        '<td>Place</td>' +
        '<td>Edit</td>' +
        '<td>Delete</td>' +
        '</tr>' +
        '</thead><tbody></tbody></table><button class="btnNew">Neu</button>',

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
        router.navigate('/new', {trigger: true});
    }

});
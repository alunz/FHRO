var AddressView = Backbone.View.extend({

    tagName: "tr",

    template: '<td><%= gender %></td>' +
        '<td><%= firstname %></td>' +
        '<td><%= lastname %></td>' +
        '<td><%= street %></td>' +
        '<td><%= postcode %></td>' +
        '<td><%= place %></td>' +
        '<td><a href="#delete/<%= id %>">delete</a></td>' +
        '<td><a href="#edit/<%= id %>">edit</a></td>',

    initialize: function() {
        this.listenTo(this.model, "change", this.render);
    },

    render: function() {

        var values = {
            id: this.model.get('id'),
            gender: this.model.get('gender'),
            firstname: this.model.get('firstname'),
            lastname: this.model.get('lastname'),
            street: this.model.get('street'),
            postcode: this.model.get('postcode'),
            place: this.model.get('place')
        };

        $('.addressTable table tbody').append(this.$el.html(_.template(this.template, values)));

    }

});
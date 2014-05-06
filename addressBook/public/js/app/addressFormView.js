var AddressFormView = Backbone.View.extend({
    tagName: 'div',
    className: 'addressForm',

    events: {
        'click #btnSave': 'save',
        'click #btnCancel': 'cancel'
    },

    template: '<div id="form">' +
    '<table>' +
        '<tr>' +
            '<td>Gender:</td>' +
            '<td>' +
                '<select id="gender">' +
                    '<option>male</option>' +
                    '<option>female</option>' +
                '</select>' +
            '</td>' +
        '</tr>' +
        '<tr>' +
            '<td>Firstname:</td>' +
            '<td><input type="text" id="firstname"></td>' +
            '</tr>' +
            '<tr>' +
                '<td>Lastname:</td>' +
                '<td><input type="text" id="lastname"></td>' +
                '</tr>' +
                '<tr>' +
                    '<td>Street:</td>' +
                    '<td><input type="text" id="street"></td>' +
                    '</tr>' +
                    '<tr>' +
                        '<td>Postcode:</td>' +
                        '<td><input type="text" id="postcode"></td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td>Place:</td>' +
                            '<td><input type="text" id="place"></td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td colspan="2"><button id="btnSave">Save</button></td>' +
                                '<td colspan="2"><button id="btnCancel">Cancel</button></td>' +
                            '</tr>' +
                        '</table>' +
                    '</div>',

    render: function() {
        $('body').append(this.$el.html(this.template));

        $('#gender').val(this.model.get('gender'));
        $('#firstname').val(this.model.get('firstname'));
        $('#lastname').val(this.model.get('lastname'));
        $('#street').val(this.model.get('street'));
        $('#postcode').val(this.model.get('postcode'));
        $('#place').val(this.model.get('place'));
    },

    save: function() {
        this.model.set('gender', $('#gender').val());
        this.model.set('firstname', $('#firstname').val());
        this.model.set('lastname', $('#lastname').val());
        this.model.set('street', $('#street').val());
        this.model.set('postcode', $('#postcode').val());
        this.model.set('place', $('#place').val());


        if (this.model.isNew()) {
            addressCollection.add(this.model);
        }
        this.model.save();
        router.navigate('list', {trigger: true});
    },

    cancel: function() {
        router.navigate('list', {trigger: true});
    }
});
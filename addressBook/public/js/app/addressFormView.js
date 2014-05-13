define(['backbone', 'text!addressForm.tpl', 'app'], function(Backbone, template, app) {
    var AddressFormView = Backbone.View.extend({
        tagName: 'div',
        className: 'addressForm',

        events: {
            'click #btnSave': 'save',
            'click #btnCancel': 'cancel'
        },

        template: template,

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
                debugger;
                app.addressCollection.add(this.model);
            }
            this.model.save();
            app.router.navigate('list', {trigger: true});
        },

        cancel: function() {
            app.router.navigate('list', {trigger: true});
        }
    });
    return AddressFormView;
});
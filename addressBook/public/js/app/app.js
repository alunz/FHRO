require(['app/address', 'app/util', 'jquery'], function(Address, util, $) {
    "use strict";
    $(document).on('ready', function () {
        Address.getList();

        $('#btnNew').on('click', function() {
            util.toggleVisibility($('#table'), $('#btnNew'), $('#form'));
        });

        $('#btnCancel').on('click', function() {
            util.clearForm();
            util.toggleVisibility($('#table'), $('#btnNew'), $('#form'));
        });

        // edit & delete
        $('#addressTable').on('click', function(e) {
            var id = e.target.id.substr(3);
            var mode = e.target.id.substr(0,3);

            if (mode === 'del') {
                var address = new Address(id);
                address.delete(id);
            } else {
                util.edit(id, e.target.parentElement.parentElement.children);
            }
        });

        // save
        $('#btnSave').on('click', function() {
            var data = {
                gender: $('#gender').val(),
                firstname: $('#firstname').val(),
                lastname: $('#lastname').val(),
                street: $('#street').val(),
                postcode: $('#postcode').val(),
                place: $('#place').val()
            };

            var id = $('#id').val();

            var address = new Address(id, data);

            var valid = address.isValid();
            $('.error').css('display', 'none');
            if (valid === true) {
                address.save();
            } else {
                for (var i = 0; i < valid.length; i++) {
                    $('#err' + valid[i]).css('display', 'block');
                }
            }


        });
    });
})





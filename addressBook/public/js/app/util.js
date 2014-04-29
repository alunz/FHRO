define(['jquery'], function($) {
    var util = {
        toggleVisibility: function(table, newButton, form) {
            var addrTbl = table.css('display');
            if (addrTbl === 'block') {
                $('.error').css('display', 'none');
                table.css('display', 'none');
                newButton.css('display', 'none');
                form.css('display', 'block');
            } else {
                table.css('display', 'block');
                newButton.css('display', 'block');
                form.css('display', 'none');
            }
        },
        clearForm: function() {
            $('#id').val('');
            $('#gender').val('female');
            $('#firstname').val('');
            $('#lastname').val('');
            $('#street').val('');
            $('#postcode').val('');
            $('#place').val('');
        },
        fillForm: function(id, row) {
            var id = id;
            $('#id').val(id);
            var gender = row[0].innerHTML;
            $('#gender').val(gender);
            var firstname = row[1].innerHTML;
            $('#firstname').val(firstname);
            var lastname = row[2].innerHTML;
            $('#lastname').val(lastname);
            var street = row[3].innerHTML;
            $('#street').val(street);
            var postcode = row[4].innerHTML;
            $('#postcode').val(postcode);
            var place = row[5].innerHTML;
            $('#place').val(place);
        },
        edit: function(id, row) {
            this.fillForm(id, row);
            this.toggleVisibility($('#table'), $('#btnNew'), $('#form'));
        }
    }

    return util;
});


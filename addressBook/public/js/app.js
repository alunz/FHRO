// get

function getList() {
    "use strict";

    $.ajax({url: 'address'}).done(function(data) {

        $('#addressTable tbody').empty();

        var data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {
            var tr = $('<tr>');
            tr.append('<td>' + data[i].gender + '</td>');
            tr.append('<td>' + data[i].firstname + '</td>');
            tr.append('<td>' + data[i].lastname + '</td>');
            tr.append('<td>' + data[i].street + '</td>');
            tr.append('<td>' + data[i].postcode + '</td>');
            tr.append('<td>' + data[i].place + '</td>');
            tr.append('<td><button id="del' + data[i].id + '">delete</button></td>');
            tr.append('<td><button id="edi' + data[i].id + '">edit</button></td>');
            $('#addressTable tbody').append(tr);
        }
    });
};

function fillForm(id, row) {
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
};

function clearForm() {
    $('#id').val('');
    $('#gender').val('');
    $('#firstname').val('');
    $('#lastname').val('');
    $('#street').val('');
    $('#postcode').val('');
    $('#place').val('');
};


$(document).on('ready', function () {
    getList();

    $('#btnNew').on('click', function() {
        toggleVisibility();
    });

    $('#btnCancel').on('click', function() {
        toggleVisibility();
    });

    $('#addressTable').on('click', function(e) {
        var id = e.target.id.substr(3);
        var mode = e.target.id.substr(0,3);

        if (mode === 'del') {
            $.ajax({
                url: 'address/id/' + id,
                method: 'DELETE'
            }).done(function(data) {
                getList();
            });
        } else {
            fillForm(id, e.target.parentElement.parentElement.children);
            toggleVisibility();
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

        if (id) {
            var method = 'PUT';
            var url = 'address/id/' + id;
        } else {
            var method = 'POST'
            var url = 'address';
        }

        $.ajax({
            url: url,
            method: method,
            data: data
        }).done(function() {
            getList();
            toggleVisibility();
        });
    });
});


toggleVisibility = function() {
    var addrTbl = $('#table').css('display');
    if (addrTbl === 'block') {
        $('#table').css('display', 'none');
        $('#btnNew').css('display', 'none');
        $('#form').css('display', 'block');
    } else {
        $('#table').css('display', 'block');
        $('#btnNew').css('display', 'block');
        $('#form').css('display', 'none');
    }
}
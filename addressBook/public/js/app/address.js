var Address = function(id, data) {
    this.id = id;
    this.data = data;
};

Address.getList = function() {
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

Address.prototype.delete = function() {
    $.ajax({
        url: 'address/id/' + this.id,
        method: 'DELETE'
    }).done(function(data) {
        Address.getList();
    });
};

Address.prototype.save = function() {
    if (this.id) {
        var method = 'PUT';
        var url = 'address/id/' + this.id;
    } else {
        var method = 'POST'
        var url = 'address';
    }

    $.ajax({
        url: url,
        method: method,
        data: this.data
    }).done(function() {
        Address.getList();
        util.toggleVisibility($('#table'), $('#btnNew'), $('#form'));
    });
}
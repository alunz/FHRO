var fields = ['id', 'salutation', 'firstname', 'lastname', 'street', 'postcode', 'place', 'country'];
var addrs = {};

function fetchLocalStorage() {
    var key;
    for (var i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        addrs[key] = JSON.parse(localStorage.getItem(key));
    }
    return addrs;
}

function showAddrs(addrs) {
    $('table', '#list').remove();

    if (addrs && Object.keys(addrs).length > 0) {
        $('#emptyList').hide();
    } else {
        $('#emptyList').show();
        return;
    }


    var structure = '<tr>' +
        '<td>ID</td>' +
        '<td>Anrede</td>' +
        '<td>Vorname</td>' +
        '<td>Nachname</td>' +
        '<td>Straße</td>' +
        '<td>PLZ</td>' +
        '<td>Ort</td>' +
        '<td>Land</td>' +
        '</tr>';


    var table = $('<table>' + structure + '</table>');


    for (var i in addrs) {
        showAddr(table, addrs[i]);
    }

    $('#list').append(table);

}

function showAddr(table, addr) {
    var tr = $('<tr>');

    fields.forEach(function(field) {
        var td = $('<td>'+ addr[field] + '</td>');
        tr.append(td);
    });

    var td;
    td = $('<td><button onclick="showForm('+ addr.id+')">edit</td>');
    tr.append(td);
    td = $('<td><button onclick="del('+ addr.id+')">delete</button></td>');
    tr.append(td);

    table.append(tr);
}

function del(id) {
    delete addrs[id];
    localStorage.removeItem(id);

    showAddrs(addrs);
}

function save() {

    var data = {};

    fields.forEach(function(field) {
        data[field] = $('#' + field).val();
    });

    if (!data.id) {
        data.id = getNextId()
    }
    addrs[data.id] = data;
    localStorage.setItem(data.id, JSON.stringify(data));

    showAddrs(addrs);
    hideForm();
}

function getNextId() {
    var max = 0;
    for (var i in addrs) {
        if (i > max) {
            max = i;
        }

    }
    return parseInt(max) + 1;
}

function showForm(id) {
    fields.forEach(function(field) {
        var val = '';
        if (id) {
            val = addrs[id][field];
        }
        $('#' + field).val(val);
    });

    $('#form').show();
    $('#list').hide();
}

function hideForm() {
    $('#form').hide();
    $('#list').show();
}

$(function() {
    addrs = fetchLocalStorage();


    if (addrs) {
        showAddrs(addrs);
    }

    $('#new').on('click', showForm.bind(null, undefined));
    $('#save').on('click', save);
});


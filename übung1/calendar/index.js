var year = 2015;


function createMonth(month) {
    month = month - 1;
    var first = new Date(year, month, 1);
    var dow = first.getDay();

    var table = initTable();

    var tr = $("<tr>");
    var td;

    for (var i = 0; i < dow; i++) {
        td = $("<td>");
        tr.append(td);
    }
    var i = dow;
    var day = 1;
    while (i < 7) {
        td = $("td").html(day++);
        i++;
        tr.append(td);
    }
    table.append(tr);

    tr = $("<tr>");


    var init = day -1;

    for (var i = 0; i < daysInMonth(month, year) - init; i++) {
        if (i % 7 === 0) {
            table.append(tr);
            $("<tr>");
        }
        td = $("<td>").html(day++);
        tr.append(td);
    }
    table.append(tr);

    return table;
}

function daysInMonth(month,year) {
    var isLeap = ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0));
    return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

function initTable() {
    var table = $('<table>');
    var tr = $("<tr>");
    var days = ['S', 'M', 'D', 'M', 'D', 'F', 'S'];
    var td;
    for (var i = 0; i < days.length; i++) {
        td = $("<td>").html(days[i]);
        tr.append(td);
    }
    table.append(tr);

    return table;
}

var months = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
];

months.forEach(function(month, nr) {
    $('body').append($('<div style="float:left; margin: 10px;">' +
    '<h4>' + month + '</h4>' +
        createMonth(nr + 1).outerHTML +
    '</div>'));
    if ((nr +1) % 3 === 0) {
        $('body').append('<div style="clear: both;"></div>');
    }
});


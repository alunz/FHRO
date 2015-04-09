function kalender(){
    var current = new Date('01-01-2015 12:00:00');

    for(var i = 0; i < 12; i++){
        monat(current);
    }
}

function monat(current){
    var currentMonth = current.getMonth();
    var calender = document.querySelector('#task-4 .calender');
    var table = document.createElement('table');
    calender.appendChild(table);

    table.appendChild(createMonthHeader(current));


    while(current.getMonth() == currentMonth){

        table.appendChild(week(current));

    }

}

function week(current){
    var today = new Date();
    var currentMonth = current.getMonth();
    var frag = document.createDocumentFragment();
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var td;

    frag.appendChild(tbody);
    tbody.appendChild(tr);

    for(var i = 0; i < current.getDay(); i++){
        td = document.createElement('td');
        tr.appendChild(td);
    }

    for(var i = current.getDay(); i < 7 && currentMonth == current.getMonth(); i++){

        td = document.createElement('td');
        td.textContent = current.getDate();

        if(current.getMonth() === today.getMonth() && current.getDate() === today.getDate() && current.getFullYear() === today.getFullYear()){
            td.style.backgroundColor = 'yellow';
        }

        tr.appendChild(td);

        current.setDate(current.getDate() + 1); // Einen Tag weiter springen
    }

    return frag;

}

function createMonthHeader(current){

    var frag = document.createDocumentFragment();
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th, td;

    frag.appendChild(thead);
    thead.appendChild(tr);

    th = document.createElement('th');
    th.colSpan = 7;
    th.textContent = translateMonth(current.getMonth());
    tr.appendChild(th);

    var tr = document.createElement('tr');
    thead.appendChild(tr);

    for(var i = 0; i < 7; i++){
        tr.appendChild(createDayHeader(i));
    }

    return frag;

}

function createDayHeader(day){
    var td = document.createElement('th');
    td.textContent = translateDay(day);

    return td;
}

function translateDay(day){
    switch(day){
        case 0: return 'So';
        case 1: return 'Mo';
        case 2: return 'Di';
        case 3: return 'Mi';
        case 4: return 'Do';
        case 5: return 'Fr';
        case 6: return 'Sa';
    }
}

function translateMonth(month){

    switch(month){
        case 0: return 'Januar';
        case 1: return 'Februar';
        case 2: return 'März';
        case 3: return 'April';
        case 4: return 'Mai';
        case 5: return 'Juni';
        case 6: return 'Juli';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'Oktober';
        case 10: return 'November';
        case 11: return 'Dezember';
    }

}

(function run(){
    /** @todo  Trigger evtl. anpassen */
    document.querySelector('#task-4 button').addEventListener('click', kalender);
})();

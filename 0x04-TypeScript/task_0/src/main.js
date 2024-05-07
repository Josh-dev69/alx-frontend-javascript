var student1 = {
    firstName: 'Ebube',
    lastName: 'Joshua',
    age: 29,
    location: 'Onitsha'
};
var student2 = {
    firstName: 'Ebuka',
    lastName: 'Solomon',
    age: 31,
    location: '30'
};
var studentsList = [student1, student2];
var renderTable = function (students) {
    var table = document.createElement('table');
    var headerRow = table.insertRow();
    var header1 = document.createElement('th');
    var header2 = document.createElement('th');
    header1.textContent = 'First Name';
    header2.textContent = 'Last Name';
    headerRow.append(header1);
    headerRow.append(header2);
    students.forEach(function (student) {
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
        row.appendChild(cell1);
        row.appendChild(cell2);
    });
    document.body.appendChild(table);
};
renderTable(studentsList);

document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('#multiplication-table tbody');

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.textContent = '5';
        const cell2 = document.createElement('td');
        cell2.textContent = 'x';
        const cell3 = document.createElement('td');
        cell3.textContent = `5 x ${i} = ${5 * i}`;
        
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        tableBody.appendChild(row);
    }
});
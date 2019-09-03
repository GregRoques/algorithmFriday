// =================================================================
// Apply columnheader

const columns = document.querySelector('#car>tbody>tr:nth-child(1)').getElementsByTagName('td')

for (let i = columns.length-1; i>=0; i--){
    columns[i].setAttribute('role', 'columnheader')
}
console.log(document.querySelector('#car>tbody>tr:nth-child(1)'))

// =================================================================
// Apply rowheader

const table = document.querySelectorAll('#car>tbody>tr>td:nth-child(1)')

for (let i = table.length-1; i>0; i--){
    table[i].setAttribute('role', 'rowheader')
}

console.log(document.querySelectorAll('#car>tbody>tr>td:nth-child(1)'))






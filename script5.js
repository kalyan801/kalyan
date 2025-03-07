let medicines = [];

document.getElementById('add-medicine-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const qty = parseInt(document.getElementById('qty').value);
    const photo = document.getElementById('photo').files[0];
    
    if (name && price && qty && photo) {
        const medicine = {
            name,
            price,
            qty,
            photo: URL.createObjectURL(photo)
        };
        
        medicines.push(medicine);
        loadMedicines();
        document.getElementById('add-medicine-form').reset();
    } else {
        alert('Please fill all fields');
    }
});

function loadMedicines() {
    const tableBody = document.querySelector('#medicine-table tbody');
    tableBody.innerHTML = '';
    
    medicines.forEach((medicine, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${medicine.name}</td>
            <td>${medicine.qty}</td>
            <td>${medicine.price.toFixed(2)}</td>
            <td><img src="${medicine.photo}" alt="${medicine.name}"></td>
            <td><button onclick="addToBill(${index})">Add to Bill</button></td>
        `;
        tableBody.innerHTML += row;
        
    });
}

function addToBill(index) {
    const medicine = medicines[index];
    // Add logic to handle adding to bill
    alert(`Added ${medicine.name} to bill`);
}
document.getElementById('add-medicine-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const qty = document.getElementById('qty').value;
    const photo = document.getElementById('photo').files[0];
    
    const table = document.getElementById('medicine-table').getElementsByTagName('tbody')[0];
    const rowCount = table.rows.length;
    const row = table.insertRow(rowCount);
    
    row.insertCell(0).innerHTML = rowCount + 1;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = qty;
    row.insertCell(3).innerHTML = price;
    row.insertCell(4).innerHTML = photo ? `<img src="${URL.createObjectURL(photo)}" alt="${name}">` : '';
    const actionCell = row.insertCell(5);
    actionCell.innerHTML = '<button>Add to bill</button>';
    
    document.getElementById('add-medicine-form').reset();
});
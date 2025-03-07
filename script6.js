let medicines = [];
let billItems = [];

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
        
        tableBody.appendChild(row);
    });
}
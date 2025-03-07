// You can add any dynamic functionality here if needed
// For example, calculating the total dynamically

const items = [
    { name: 'PARACETAMOL 500MG', qty: 50, price: 15 },
    { name: 'TAPOZ-100', qty: 50, price: 3 },
    { name: 'ADVIL 200MG', qty: 18, price: 25 }
];

let total = items.reduce((sum, item) => sum + (item.qty * item.price), 0);
let gst = total * 0.0215; // Assuming 2.15% GST
let totalAmount = total + gst;

document.getElementById('gst').textContent = `${gst.toFixed(2)}/-`;
document.getElementById('totalAmount').textContent = `${totalAmount.toFixed(2)}/-`;

function printInvoice() {
    window.print();
}
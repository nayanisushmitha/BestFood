// Sample data for items
const items = [
    { name: 'Item 1', cost: 25.99 },
    { name: 'Item 2', cost: 14.99 },
    { name: 'Item 3', cost: 35.50 },
    // Add more items here
];

const itemList = document.getElementById('itemList');
const sortSelect = document.getElementById('sortSelect');

// Function to generate the item list
function displayItems(itemArray) {
    itemList.innerHTML = ''; // Clear the existing list

    itemArray.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.cost.toFixed(2)}`;
        itemList.appendChild(li);
    });
}

// Initial display
displayItems(items);

// Event listener for sorting
sortSelect.addEventListener('change', () => {
    const selectedValue = sortSelect.value;

    if (selectedValue === 'lowToHigh') {
        items.sort((a, b) => a.cost - b.cost);
    } else if (selectedValue === 'highToLow') {
        items.sort((a, b) => b.cost - a.cost);
    }

    displayItems(items);
});

async function getData() {
    const url = "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json";
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json(); 
        console.log(data);
        
        wypelnij(data);
        filtruj(data);
    } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
    }
}

function createRow(product) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${product.title}</td>
        <td>${product.type}</td>
        <td>${product.description}</td>
        <td>${product.filename}</td>
        <td>${product.height}</td>
        <td>${product.width}</td>
        <td>${product.price}</td>
        <td>${product.rating}</td>
    `;
    return row;
}

function wypelnij(products) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    products.forEach(product => {
        const row = createRow(product);
        tableBody.appendChild(row);
    });
}

// Filtrowanie
function filtruj(products) {
    const input = document.getElementById("filtr");

    const filterData = () => {
        const text = input.value.toLowerCase();
        const przefiltrowane = products.filter(product =>
            product.title.toLowerCase().includes(text)
        );
        wypelnij(przefiltrowane);
    };

    wypelnij(products);
    input.addEventListener("input", filterData);
}

document.addEventListener("DOMContentLoaded", getData);

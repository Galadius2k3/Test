fetch('https://localhost:7066/api/products')
    .then(response => response.json())
    .then(products => {

        console.log(products);
    })
    .catch(error => console.error('Error:', error));


const productId = 1;
fetch(`https://localhost:7066/api/products/${productId}`)
    .then(response => response.json())
    .then(product => {
        console.log(product);
    })
    .catch(error => console.error('Error:', error));


const newProduct = {
    name: 'New Product',
    price: 100,
    description: 'A new product',
};
fetch('https://localhost:7066/api/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
})
    .then(response => response.json())
    .then(createdProduct => {
        console.log(createdProduct);
    })
    .catch(error => console.error('Error:', error));


const productIdToUpdate = 1;
const updatedProduct = {
    id: productIdToUpdate,
    name: 'Updated Product',
    price: 150,
    description: 'An updated product',
};
fetch(`https://localhost:7066/api/products/${productIdToUpdate}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedProduct),
})
    .then(response => {
        if (response.status === 204) {
            console.log('Product updated successfully.');
        } else {
            console.error('Failed to update product.');
        }
    })
    .catch(error => console.error('Error:', error));


const productIdToDelete = 1;
fetch(`https://localhost:7066/api/products/${productIdToDelete}`, {
    method: 'DELETE',
})
    .then(response => {
        if (response.status === 204) {
            console.log('Product deleted successfully.');
        } else {
            console.error('Failed to delete product.');
        }
    })
    .catch(error => console.error('Error:', error));
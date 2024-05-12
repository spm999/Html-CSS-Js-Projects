document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
  try {
    const response = await fetch('https://dummyjson.com/products');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear previous data
  
    if (Array.isArray(data.products)) {
      data.products.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('product');
  
        const titleElement = document.createElement('h2');
        titleElement.textContent = product.title;
        productContainer.appendChild(titleElement);
  
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = product.description;
        productContainer.appendChild(descriptionElement);
  
        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${product.price}`;
        productContainer.appendChild(priceElement);
  
        const thumbnailElement = document.createElement('img');
        thumbnailElement.src = product.thumbnail;
        thumbnailElement.alt = product.title;
        productContainer.appendChild(thumbnailElement);
  
        container.appendChild(productContainer);
      });
    } else {
      const errorElement = document.createElement('p');
      errorElement.textContent = 'Invalid data format';
      container.appendChild(errorElement);
    }
  }
  

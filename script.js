function fetchData(apiUrl) {
    return fetch(apiUrl).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    });
}

function fetchCarBrands() {
    const apiUrl = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';
    return fetchData(apiUrl);
}

function displayCarBrands(carBrands) {
    const carBrandsDiv = document.getElementById('carBrands');
    carBrands.forEach(brand => {
        const brandInfo = document.createElement('div');
        brandInfo.innerHTML = `
            <h2>${brand.nome}</h2>
            
            <hr>
        `;
        carBrandsDiv.appendChild(brandInfo);
    });
}

fetchCarBrands()
    .then(carBrands => {
        displayCarBrands(carBrands);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
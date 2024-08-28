async function obtenerCervezas() {
    const apiUrl = 'https://api.sampleapis.com/beers/ale';
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Ocurrió un error al obtener los datos de la API');
      }
      const data = await response.json();
  
      const beerTableBody = document.getElementById('tabla-cervezas-body');
      data.forEach(beer => {
        const row = document.createElement('tr');
        row.innerHTML = `
  
          <td width="75px">${beer.name}</td>
          <td>${beer.price}</td>
          <td>${beer.rating.average}</td>
          <td>${beer.rating.reviews}</td>
          <td><img src="${beer.image}" alt="${beer.name}" width="100"></td>
        `;
        beerTableBody.appendChild(row);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  obtenerCervezas();
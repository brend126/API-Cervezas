async function obtenerCervezas() {
  const apiUrl = 'https://api.sampleapis.com/beers/ale';

  try {
    const data = await fetchCervezas(apiUrl);
    if (data && Array.isArray(data)) {
      mostrarCervezas(data);
    } else {
      console.error('Datos inesperados:', data);
    }
  } catch (error) {
    console.error('Error al obtener cervezas:', error);
  }
}

async function fetchCervezas(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Ocurrió un error al obtener los datos de la API');
  }
  return response.json();
}

function mostrarCervezas(cervezas) {
  const beerTableBody = document.getElementById('tabla-cervezas-body');
  beerTableBody.innerHTML = ''; 

  cervezas.forEach(beer => {
    const row = document.createElement('tr');

    const imageSrc = beer.image ? beer.image : 'ruta_a_imagen_de_reemplazo.jpg'; // Imagen de reemplazo si no hay URL
    const imageAlt = beer.name ? beer.name : 'Imagen no disponible';

    row.innerHTML = `
      <td width="75px">${beer.name || 'Sin nombre'}</td>
      <td>${beer.price || 'Sin precio'}</td>
      <td>${beer.rating?.average || 'Sin calificación'}</td>
      <td>${beer.rating?.reviews || 'Sin reseñas'}</td>
      <td><img src="${imageSrc}" alt="${imageAlt}" width="100"></td>
    `;

    beerTableBody.appendChild(row);
  });
}

obtenerCervezas();

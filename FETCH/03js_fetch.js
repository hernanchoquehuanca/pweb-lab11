// Ejemplo 3: Manejar errores al realizar una petición con fetch
fetch('https://jsonplaceholder.typicode.com/posts/1000')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log("Datos obtenidos:", data))
  .catch(error => console.error("Error al obtener datos:", error.message));
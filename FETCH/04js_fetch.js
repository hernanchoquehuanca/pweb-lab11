// Ejemplo 4: Trabajar con JSON y parámetros de la petición con fetch
const userId = 1;

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then(response => response.json())
  .then(data => console.log("Datos obtenidos:", data))
  .catch(error => console.error("Error al obtener datos:", error));
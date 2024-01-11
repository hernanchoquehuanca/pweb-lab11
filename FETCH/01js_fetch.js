// Ejemplo 1: Obtener datos de una API con fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log("Datos obtenidos:", data))
  .catch(error => console.error("Error al obtener datos:", error));
// Ejemplo 2: Enviar datos mediante POST con fetch
const postData = {
  title: 'Nuevo Post',
  body: 'Contenido del nuevo post',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
.then(response => response.json())
.then(data => console.log("Datos enviados:", data))
.catch(error => console.error("Error al enviar datos:", error));
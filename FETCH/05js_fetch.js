// Ejemplo 6: Descargar un archivo usando fetch
fetch('https://example.com/download/file.pdf')
  .then(response => response.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(new Blob([blob]));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'archivo.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  })
  .catch(error => console.error("Error al descargar el archivo:", error));
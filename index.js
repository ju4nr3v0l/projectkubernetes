const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola Profe, este es un mensaje de prueba para la entrega de nuestro proyecto de CI/CD');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hola profe este es nuestro proyecto demo para el entregable de CI/CD');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

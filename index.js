const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from grupo2diplomado con el cambio final para que escuche argocd por fin!!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

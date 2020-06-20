const express = require('express');

const log = require('./middlewares/Log');

const app = express();

app.use(express.json());
app.use(log);

app.use(require('./routes')) ;

app.listen(3333, () => {
    console.log('Servidor rodando na rota http://localhost:3333');

});


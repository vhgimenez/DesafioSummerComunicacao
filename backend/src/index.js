const express = require('express');
const cors = require('cors');
const { product } = require('./routes');
const  routes  = require('./routes/routes'); 
const path = require('path')

const app = express();
app.use(express.json());

const PORT = 3001 | process.env.API_PORT

app.use(cors());

app.use('/product', product);
app.use('/', routes);

app.use(express.static(path.resolve(__dirname, '..', 'images')));

app.listen(PORT, () => {
    console.log(`Application running at localhost:${PORT}`);
  }
);

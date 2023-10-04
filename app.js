const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./util/database');

const app = express();

const formRoutes = require('./routes/form');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(formRoutes);

sequelize.sync()
.then((result) => {
    app.listen(5000);
})
.catch(err => console.log(err));


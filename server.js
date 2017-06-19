'use strict';
const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(3000,_=>{
    console.log('servidor encendido en el puerto 3000');

});

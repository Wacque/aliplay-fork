const express = require('express')
const app = new express();

app.use(express.static('./'))

app.listen(3000)

console.log('app run in http://localhost:3000')
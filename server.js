const express = require('express');

const app = express();
const PORT = 3001; 

app.use(express.static('public'));

app.get('/', (req,res) => res.send('welcome'));

app.listen(PORT, () => {
    console.log(`Express server listening at http://localhost:${PORT}`)
});
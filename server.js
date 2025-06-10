const express = require('express');
const app = express();
const PORT = 8080;
const AUTHOR = 'Mikołaj Kozłowski';
const currentDate = new Date().toISOString();

console.log(`Aplikacja uruchomiona: ${currentDate}`);
console.log(`Autor: ${AUTHOR}`);
console.log(`Nasłuch na porcie: ${PORT}`);

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});

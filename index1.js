// index.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Forma ma'lumotlarini ishlash uchun middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Statik fayllar uchun ommaviy papkani sozlash
app.use(express.static(path.join(__dirname, 'public')));

// MySQL bilan ulanish
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'temurids'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL bilan bog‘lanish muvaffaqiyatli');
});

// Formani ishlash uchun marshrut
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const query = 'INSERT INTO users (name) VALUES (?)';

    db.query(query, [name], (err, result) => {
        if (err) throw err;
        res.send('Yangi yozuv muvaffaqiyatli qo\'shildi');
    });
});

// Serverni ishga tushirish
app.listen(port, () => {
    console.log(Server http://localhost:${port} da ishlamoqda);
)});
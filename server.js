const express = require('express');
const path = require('path');
const oracledb = require("oracledb");
const dbConfig = require("./dbconfig");

const app = express();

async function testConnection() {
    try {
        await oracledb.getConnection(dbConfig);
        console.log('Veritabanı bağlantısı başarılı!');
    } catch (err) {
        console.error('Veritabanı bağlantı hatası:', err);
    }
}

testConnection();
app.use(express.static('public'));

// EJS'yi view engine olarak ayarla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Statik dosyaları sunmak için public klasörünü kullan
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

console.table({ad:"sevval",soyad:"gencel"});


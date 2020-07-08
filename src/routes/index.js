//PARA TENER EL CODIGO MAS LIMPIO TRAEMOS LAS RUTAS OTRO ARCHIVO Y UTILIZAMOS TAMBIEN EL FRAMEWORK EXPRESS Y SUS
//METODOS PARA HACERLO.

const express = require('express');
const router = express.Router();


//ROUTES
//POR CADA PAGINA QUE TENGAMOS HAY QUE HACER UNA RUTA
router.get('/', (req, res) => {
    //res.sendFile(path.join( __dirname, 'views/index.ejs'));
    res.render('index.html', { title: "Technical Architecture" }); // ES EL ARCHIVO index.ejs DE LA CARPETA VIEWS- ademas le ponemos como segundo parametro un dato como para probar como funca
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: "Contact Page" });
});

router.get('/services', (req, res) => {
    res.render('services.html', { title: "Services Page" });
});


//EXPORTAMOS RUTAS
module.exports = router;
//MODULOS
const express = require('express');
const app = express();
var morgan = require('morgan');
var path = require('path');



//SETTINGS
//NOMBRE DE APLICACION
app.set('appName', 'WEB-PAGE NODE');
//NUMERO DE PUERTO
app.set('port', 3000);
//MOTOR DE PLANTILLAS LLAMADO EJS
app.set('view engine', 'ejs');
//PARA QUE LOS ARCHIVOS HTML DE LAS VISTAS PUEDAN PROCESARSE COMO EJS
app.engine('html', require('ejs').renderFile);
//PARA QUE NODE ENCUENTRE EL EJS DENTRO DE LA VIEWS YA QUE SE ESTA EJECUTANDO EL DIRECTORIO SRC
app.set('views', path.join(__dirname, 'views'));
//CREAMOS SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Server on Port ' + app.get('port'));
    console.log(app.get('appName'));
});


//MIDDLEWARES
app.use(morgan('dev'));

app.use(multer({
    dest: './uploads/',
    rename: function (fieldname, filename) {
        return filename;
    },
}));



//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));




//DATA-BASE

require('./database');



//RUTAS

app.use(require('./routes/index'));


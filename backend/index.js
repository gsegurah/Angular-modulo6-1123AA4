//index.js
const express = require('express');
const morgan = require('morgan');
const cors= require('cors');
const app = express();
const {mongoose} = require('./database'); // Importa la conexión a la base de datos

// Configuración
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev')); // Para ver las solicitudes HTTP en la consola
app.use(express.json()); // Para que Express entienda los cuerpos de solicitud JSON
app.use(cors({origin :'http://localhost:4200'})); // Permite solicitudes desde tu frontend Angular

// Rutas (¡ya la tienes configurada para empleados!)
app.use('/api/empleados', require('./routes/empleado.routes'));

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor activo en el puerto', app.get('port'));
});
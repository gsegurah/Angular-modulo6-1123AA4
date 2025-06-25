//empleado.routes.js
const express = require('express');
const router = express.Router();

const empleadoCtrl = require('../controllers/empleado.controller');

// Rutas CRUD para empleados
router.get('/', empleadoCtrl.getEmpleados);
router.post('/', empleadoCtrl.createEmpleado);
router.get('/:id', empleadoCtrl.getEmpleado);
router.put('/:id', empleadoCtrl.editEmpleado);
router.delete('/:id', empleadoCtrl.deleteEmpleado);

//línea para manejar solicitudes PATCH (actualización parcial)
router.patch('/:id', empleadoCtrl.patchEmpleado); 

module.exports = router;
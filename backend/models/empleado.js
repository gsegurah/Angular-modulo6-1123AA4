// empleado.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmpleadoSchema = new Schema({
    cedula: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    puesto: { type: String, required: true },
    oficina: { type: String, required: true },
    salario: { type: Number, required: true }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);

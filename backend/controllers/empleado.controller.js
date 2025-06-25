// backend/controllers/empleado.controller.js

const Empleado = require('../models/empleado'); 
const empleadoCtrl = {};

// Obtener todos los empleados
empleadoCtrl.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo empleado
empleadoCtrl.createEmpleado = async (req, res) => {
    const { cedula, nombre, puesto, oficina, salario } = req.body;
    const newEmpleado = new Empleado({ cedula, nombre, puesto, oficina, salario });
    try {
        await newEmpleado.save();
        res.status(201).json({ message: 'Empleado guardado exitosamente' });
    } catch (error) {
        // Manejar el error de cedula duplicada si usas MongoDB/Mongoose con unique: true
        if (error.code === 11000) { // Código de error para duplicados en MongoDB
            return res.status(400).json({ message: 'La cédula ya existe.' });
        }
        res.status(400).json({ message: error.message });
    }
};

// Obtener un solo empleado por ID
empleadoCtrl.getEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.findById(req.params.id);
        if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un empleado por ID (PUT - actualización completa)
empleadoCtrl.editEmpleado = async (req, res) => {
    const { cedula, nombre, puesto, oficina, salario } = req.body;
    try {
        const updatedEmpleado = await Empleado.findByIdAndUpdate(req.params.id, {
            cedula,
            nombre,
            puesto,
            oficina,
            salario
        }, { new: true, runValidators: true }); // new: true devuelve el documento actualizado; runValidators: true ejecuta las validaciones del esquema
        if (!updatedEmpleado) return res.status(404).json({ message: 'Empleado no encontrado' });
        res.json({ message: 'Empleado actualizado exitosamente', empleado: updatedEmpleado });
    } catch (error) {
        // Manejar el error de cedula duplicada si la cédula se actualiza a una ya existente
        if (error.code === 11000) {
            return res.status(400).json({ message: 'La cédula ya existe.' });
        }
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un empleado por ID (PATCH - actualización parcial)**
empleadoCtrl.patchEmpleado = async (req, res) => {
    const { id } = req.params;
    const updates = req.body; // 'updates' contendrá solo los campos que se envían para actualizar

    try {
        // Encuentra el empleado por ID y actualiza solo los campos presentes en 'updates'
        // { new: true } devuelve el documento después de la actualización.
        // { runValidators: true } ejecuta las validaciones del esquema de Mongoose.
        // { context: 'query' } es útil para ciertas validaciones con 'unique'.
        const updatedEmpleado = await Empleado.findByIdAndUpdate(id, { $set: updates }, {
            new: true,
            runValidators: true,
            context: 'query'
        });

        if (!updatedEmpleado) {
            return res.status(404).json({ message: 'Empleado no encontrado.' });
        }
        res.json({ message: 'Empleado actualizado parcialmente.', empleado: updatedEmpleado });
    } catch (error) {
        // Manejar error de validación o de cédula duplicada
        if (error.code === 11000) {
            return res.status(400).json({ message: 'La cédula ya existe.' });
        }
        res.status(400).json({ message: error.message });
    }
};


// Eliminar un empleado por ID
empleadoCtrl.deleteEmpleado = async (req, res) => {
    try {
        const deletedEmpleado = await Empleado.findByIdAndDelete(req.params.id);
        if (!deletedEmpleado) return res.status(404).json({ message: 'Empleado no encontrado' });
        res.json({ message: 'Empleado eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = empleadoCtrl;
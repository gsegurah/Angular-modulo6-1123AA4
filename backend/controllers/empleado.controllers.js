const Empleado = require('../models/empleado');
const empleadoCtrl = {};

// Obtener todos los empleados
empleadoCtrl.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener empleados', error });
    }
};

// Crear un nuevo empleado
empleadoCtrl.createEmpleado = async (req, res) => {
    const { cedula, nombre, puesto, oficina, salario } = req.body;
    const newEmpleado = new Empleado({ cedula, nombre, puesto, oficina, salario });
    try {
        await newEmpleado.save();
        res.status(201).json({ status: 'Empleado guardado' });
    } catch (error) {
        if (error.code === 11000) { // Error de clave duplicada
            res.status(400).json({ message: 'La cédula ya existe.', error });
        } else {
            res.status(500).json({ message: 'Error al guardar empleado', error });
        }
    }
};

// Obtener un solo empleado por ID
empleadoCtrl.getEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.findById(req.params.id);
        if (!empleado) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener empleado', error });
    }
};

// Actualizar un empleado
empleadoCtrl.editEmpleado = async (req, res) => {
    const { id } = req.params;
    const { cedula, nombre, puesto, oficina, salario } = req.body;
    try {
        await Empleado.findByIdAndUpdate(id, { cedula, nombre, puesto, oficina, salario });
        res.json({ status: 'Empleado actualizado' });
    } catch (error) {
        if (error.code === 11000) { // Error de clave duplicada
            res.status(400).json({ message: 'La cédula ya existe.', error });
        } else {
            res.status(500).json({ message: 'Error al actualizar empleado', error });
        }
    }
};

// Eliminar un empleado
empleadoCtrl.deleteEmpleado = async (req, res) => {
    try {
        await Empleado.findByIdAndDelete(req.params.id);
        res.json({ status: 'Empleado eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar empleado', error });
    }
};

module.exports = empleadoCtrl;
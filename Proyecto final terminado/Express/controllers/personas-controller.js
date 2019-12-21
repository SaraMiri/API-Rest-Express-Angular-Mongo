// Incluir el fichero con la definición de la BD
var db = require('../db/db');
var ObjectId = require('mongodb').ObjectId;
const validationResult = require('express-validator').validationResult;


// Mostrar la lista de personas
module.exports.personas_list = function (req, res, next) {
    if (db.get() === null) {
        next(new Error('La conexión no está establecida'));
        return;
    }
    db.get().db('apidb').collection('personas').find().toArray(function (err, result) {
        if (err) {
            next(new Error('Fallo en el listado de personas'));
            return;
        } else {
            // Si todo fue bien, devolver el resultado al cliente
            res.send(result);
        }
    });
};

module.exports.personas_getById = function (req, res, next) {
    if (db.get() === null) {
        next(new Error('La conexión no está establecida'));
        return;
    }
    console.log('req: ', req.params.id);

    db.get().db('apidb').collection('personas').find({ _id: ObjectId(req.params.id) }).toArray(function (err, result) {
        if (err) {
            next(new Error('Fallo en el listado de personas'));
            return;
        } else {
            // Si todo fue bien, devolver el resultado al cliente
            res.send(result);
        }
    });
};

// Crear una persona
module.exports.personas_create = function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
    }

    const persona = {};
    persona.name = req.body.name;
    persona.apellidos = req.body.apellidos;
    persona.edad = req.body.edad;
    persona.dni = req.body.dni;
    persona.dob = req.body.dob;
    persona.color = req.body.color;
    persona.gender = req.body.gender;
    persona.notas = req.body.notas;
    

    if (db.get() === null) {
        next(new Error('La conexión no está establecida'));
        return;
    }

    db.get().db('apidb').collection('personas').insertOne(persona, function
        (err, result) {
        if (err) {
            next(new Error('Fallo en la inserción del persona'));
            return;
        } else {
            res.send(result);
        }
    });
};

// Actualizar personas
module.exports.personas_update_one = function (req, res, next) {
    if (db.get() === null) {
        next(new Error('La conexión no está establecida'));
        return;
    }

    const filter = { _id: ObjectId(req.params.id) };
    const update = {
        $set: {
            name: req.body.name,
            apellidos: req.body.apellidos,
            edad: req.body.edad,
            dni: req.body.dni,
            dob: req.body.dob,
            color: req.body.color,
            gender: req.body.gender,
            notas: req.body.notas,
        }
    };
    // Insertar un documento
    db.get().db('apidb').collection('personas').updateOne(filter, update,
        function (err, result) {
            // Si se produjo un error, enviar el error a la siguiente función
            if (err) {
                next(new Error('Fallo en la actualización con la BD'));
                return;
            } else {
                // Si todo fue bien, devolver el resultado al cliente
                res.send(result);
            }
        });
};

// Borrar personas
module.exports.personas_delete_one = function (req, res, next) {
    if (db.get() === null) {
        next(new Error('La conexión no está establecida'));
        return;
    }
    const filter = { _id: ObjectId(req.params.id) };
    // Eliminar un documento
    db.get().db('apidb').collection('personas').deleteOne(filter, function
        (err, result) {
        // Si se produjo un error, enviar el error a la siguiente función
        if (err) {
            next(new Error('Fallo en el borrado con la BD'));
            return;
        } else {
            // Si todo fue bien, devolver el resultado al cliente
            res.send(result);
        }
    });
};
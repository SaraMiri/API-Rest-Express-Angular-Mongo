var express = require('express');
var router = express.Router();
var persona_controller = require('../controllers/personas-controller')
const { check } = require('express-validator');


/* Validation rules */
const valid_user = [

    check('name','Nombre incorrecto. Mínimo 3 caracteres  no numéricos.')
    .isLength({ min: 3 })
    .isAlpha(),

    check('apellidos', 'Apellidos incorrectos. Mínimo 3 caracteres no numéricos.')
    .isLength({min:3})
    .custom((value,{req})=>{
       if(isNaN(value)){
           return true;
       } 
       else{
           throw new Error('Apellidos no válidos. Los números no son admitidos.')
              }
               }),

     check('edad','Edad incorrecta. Valores entre 0 y 125 son admitidos.')
     .isInt({ min: 0 }, { max : 125 }),

     check('dni', 'DNI no válido. Cadena alfanumérica de 9 caracteres necesaria')
     .isAlphanumeric()
     .isLength( {min:9}, {max:9}),

     check('dob', 'Fecha no válida. Formato válido YYYY-MM-DD.')
     .isISO8601(),

     check('color', 'Color incorrecto. Mínimo 3 caracteres no numéricos')
     .isLength({min:3})
     .isAlpha(),

     check('gender', 'Valor no válido. Solo admite: hombre, mujer, otro o no especificado')
     .isIn(['Hombre', 'Mujer', 'Otro', 'No especificado'])
   ]; 


//CREATE
router.post('/', valid_user, persona_controller.personas_create)
//READ
router.get('/:id',persona_controller.personas_getById);
router.get('/',persona_controller.personas_list);
/* UPDATE */
router.put('/:id', valid_user, persona_controller.personas_update_one);
/* DELETE */
router.delete('/:id',persona_controller.personas_delete_one);

module.exports = router;

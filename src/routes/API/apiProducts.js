const express = require('express');
const router = express.Router();
const apiProductsControllers = require('../../controllers/api/apiProductsControllers');

//Todos los productos//
router.get('/', apiProductsControllers.index);


//Detalle de producto//
router.get('/:id', apiProductsControllers.detail);



module.exports = router
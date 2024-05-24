const express = require('express');
const router = express.Router();
// const apiProductsControllers = require('../../controllers/api/apiProductsControllers');

// Define your routes here
router.get('/', (req, res) => {
    res.send('API Products Endpoint');
  });

//Todos los productos//
// router.get('/', apiProductsControllers.index);


//Detalle de producto//
// router.get('/:id', apiProductsControllers.detail);



module.exports = router
const { Productos } = require('../../database/models');
const {Op} = require('sequelize');

// module.exports = {
//     /* Muestra todos los productos */
//     index : async (req,res) => {
//         try {
//             const products = await Productos.findAll();
//             if (products.length >0) {
//                 let results = { 
//                     count: {
//                         // status:200,
//                         quantity: products.length
//                     },
//                     data: { products }
//                 }
//                 res.json(results)
//             }
//         } catch(error){
//               res.send(error);
//               console.log(error);
//         }
//     },
//     detail: async (req,res) => {
//         try {
//             const {id} = req.params;
//             const productDetail = await Product.findByPk(id, {
                
//             });   
//             if(productDetail){
//                 let results = { 
//                     metadata:{
//                       status:200,
//                      },
//                      data:{ productDetail }
//                 }
            
//                 res.json(results)
//             };
            
//         } catch (error) {
//             res.send(error);
//             console.log(error); 
//         }
//     },
// }

module.exports = {
    /* Muestra todos los productos */
    index: async (req, res) => {
        try {
            const products = await Productos.findAll();
            if (products.length > 0) {
                let results = {
                    count: {
                        quantity: products.length
                    },
                    data: { products }
                };
                res.json(results);
            } else {
                res.status(404).json({ message: 'No se encontraron productos.' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al buscar los productos.' });
        }
    },
    detail: async (req, res) => {
        try {
            const { id } = req.params;
            const productDetail = await Productos.findByPk(id);
            if (productDetail) {
                let results = {
                    metadata: {
                        status: 200
                    },
                    data: { productDetail }
                };
                res.json(results);
            } else {
                res.status(404).json({ message: 'Producto no encontrado.' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al buscar el producto.' });
        }
    },
};
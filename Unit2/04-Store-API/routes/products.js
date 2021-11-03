const express = require("express")
const router = express.Router();
const {getAllProducts, getAllProductsStatic} = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)


//get all products (filtered list)

//get all products staticly (unfiltered)

module.exports = router
const express = require('express');
const masterProduct = require('./controllers/masterProductController');

const router = express.Router();


router.get('/', masterProduct.getAllMasterProduct);
router.get('/product/:id', masterProduct.getMasterProductById);
router.post('/product/add', masterProduct.addMasterProduct);
router.put('/product/edit/:id', masterProduct.editMasterProduct);
router.delete('/product/delete/:id', masterProduct.deleteMasterProduct);



module.exports = router;
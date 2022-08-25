const express =require('express')
const router=express.Router()

const ProductController =require('./controllers/ProductController')

router.get('/products',ProductController.getAll)
router.get('/product/:id',ProductController.getFind)
router.post('/product',ProductController.store)
router.put('/product/:id',ProductController.update)
router.delete('/product/:id',ProductController.destroy)

module.exports=router
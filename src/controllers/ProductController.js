const ProductModel = require('../models/ProductModel')

module.exports = {

    // *------------------- GET ALL PRODUCTS---------------------------------*
    getAll: async (req, res) => {
        let json = {
            error: '',
            result: []
        }

        let products = await ProductModel.getAll()

        for (let i in products) {
            json.result.push({
                id: products[i].id,
                code: products[i].code,
                name: products[i].name,
                price: products[i].price,
                image: products[i].image
            })
        }
        res.json(json)
    },


    // *----------------------- GET FIND PRODUCT ------------------------------*
    getFind: async (req, res) => {
        let json = { error: '', result: {} }
        let id = req.params.id

        let product = await ProductModel.getFind(id)

        if (product) {
            json.result = product
        }

        res.json(json)
    },

    //*-------------------------------- SAVE PRODUCT -------------------------*
    store: async (req, res) => {
        let json = { error: '', result: {} }

        let code = req.body.code
        let name = req.body.name
        let price = req.body.price
        let image = req.body.image
        if (code && name && price && image) {

            let productId = await ProductModel.store(code, name, price)

            json.result = {
                id: productId,
                code,
                name,
                price,
                image
            }
        } else {
            json.error = 'Fill in all fields'
        }

        res.json(json)
    },


    //*-------------------------------- UPDATE PRODUCT ----------------------*
    update: async (req, res) => {
        let json = { error: '', result: {} }

        let id = req.params.id
        let code = req.body.code
        let name = req.body.name
        let price = req.body.price
        let image = req.body.image

        if (id && code && name && price && image) {

            await ProductModel.update(id, code, name, price)

            json.result = {
                id,
                code,
                name,
                price,
                image
            }
        } else {
            json.error = 'Fill in all fields'
        }
        res.json(json)

    },


    //*------------------------------- DELETE PRODUCT ---------------------------*
    destroy: async (req, res) => {

        let json = { error: '', results: {} }

        let id = req.params.id

        let productStatus = await ProductModel.destroy(id)

        if (productStatus) {
            json.results = "Product sucessifyll deleted"
        } else {
            json.error = 'Error on delete prouct'
        }

        res.json(json)

    }

}
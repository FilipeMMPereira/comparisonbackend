const db = require('../db')
module.exports = {
    // *---------------------------- MODEL IN SQL ------------------------*
    /*
        The model was created using mysql querys
    */

    // *----------------------- QUERY TO RETURN ALL DATA ------------------*   
    getAll: () => {
        return new Promise((acept, reject) => {
            db.query('SELECT * FROM products', (error, results) => {
                if (error) {
                    reject(error)
                    return
                }

                acept(results)
            })
        })
    },

   // *----------------------- QUERY TO RETURN FIND DATA ------------------*   
    getFind: (id) => {
        return new Promise((acept, reject) => {
            db.query('SELECT * FROM products WHERE id = ?', [id], (error, results) => {
                if (error) {
                    reject(error)
                    return
                }
                if (results.length >= 0) {
                    acept(results[0])
                } else {
                    acept(false)
                }
            })
        })
    },

    // *----------------------- QUERY TO CREATE DATA ------------------*   
    store: (code, name, price, image) => {
        return new Promise((acept, reject) => {
            db.query('INSERT INTO products (code,name,price,image) values(?,?,?,?)', [code, name, price, image], (error, results) => {
                if (error) {
                    reject(error)
                    return
                }

                acept(results.insertId)
            })
        })
    },

    // *----------------------- QUERY TO UPDATE DATA ------------------*   
    update: (id, code, name, price, image) => {
        return new Promise((acept, reject) => {
            db.query('UPDATE products SET code=?, name=?, price=?, image=? WHERE id=?', [code, name, price,image, id], (error, results) => {
                if (error) {
                    reject(error)
                    return;
                }
                acept(results)

            })
        })
    },

    // *----------------------- QUERY TO DELETE DATA ------------------*   
    destroy: (id) => {
        return new Promise((acept, reject) => {
            db.query('DELETE FROM products WHERE id=?', [id], (error, results) => {
                if (error) {
                    reject(error)
                    return
                }
                acept(results)
            })
        })
    }


}
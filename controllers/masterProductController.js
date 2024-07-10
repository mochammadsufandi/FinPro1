const { 
    getAllService,
    addService,
    editService,
    deleteService,
    getByIdService
} = require("../services/masterProductService");

class masterProduct {
    // view master product
    static async getAllMasterProduct (req,res,next) {
        try {
            const {page, limit} = req.query;
            const products = await getAllService({page,limit});
            return res.status(200).json({
                message : 'Berhasil Reload All Master Products',
                data : products
            });
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
    // view master product by ID
    static async getMasterProductById (req,res,next) {
        try {
            const{id} = req.params;
            const product = await getByIdService(id);
            return res.status(200).json({
                message : 'Masukk Master Product By Id',
                data : product
            });
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
    // add master product => {name,category}
    static async addMasterProduct (req,res,next) {
        try {
            const {name,price,categoryId} = req.body;
            const product = await addService({name,price,categoryId})
            return res.status(201).json({
                message : 'BERHASIL menambahkan master product',
                data : product
            });
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
    // edit/update master product => need {id} => {name,category}
    static async editMasterProduct (req,res,next) {
        try {
            const {id} = req.params;
            const {name, price, categoryId} = req.body;
            const updateProduct = await editService({id, name, price, categoryId});
            return res.status(200).json({
                message : 'Berhasil Edit Master Product',
                data : updateProduct
            });
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
    // delete master product => need {id}
    static async deleteMasterProduct (req,res,next) {
        try {
            const{id} = req.params;
            const deleteProduct = await deleteService(id);
            return res.status(200).json({
                message : 'Berhasil Delete Master Product',
                data : deleteProduct
            });
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
}


module.exports = masterProduct;
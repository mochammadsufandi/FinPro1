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
            await getAllService('OI');
            return res.status(200).json({message : 'MASUKKK'});
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
    // view master product by ID
    static async getMasterProductById (req,res,next) {
        try {
            const{id} = req.params;
            await getByIdService({id});
            return res.status(200).json({message : 'Masukk Master Product By Id'});
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
    // add master product => {name,category}
    static async addMasterProduct (req,res,next) {
        try {
            const {name,category} = req.body;
            await addService({name,category});
            return res.status(201).json({message : 'BERHASIL menambahkan master product'});
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
    // edit/update master product => need {id} => {name,category}
    static async editMasterProduct (req,res,next) {
        try {
            const {id} = req.params;
            const {name, category} = req.body;
            await editService({id, name, category});
            return res.status(200).json({message : 'Berhasil Edit Master Product'});
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
    // delete master product => need {id}
    static async deleteMasterProduct (req,res,next) {
        try {
            const{id} = req.params;
            await deleteService({id});
            return res.status(200).json({message : 'Berhasil Delete Master Product'});
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
}


module.exports = masterProduct;
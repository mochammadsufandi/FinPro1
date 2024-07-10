const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const { 
    getAllRepository,
    getByIdRepository, 
    addRepository,
    editRepository,
    deleteRepository
} = require("../repositories/masterProductRepository");

const getAllService = async(params) => {
    const products = await getAllRepository(params);
    return products;
}

const getByIdService = async(params) => {
    const product = await getByIdRepository(params);
    if(!product) throw({name : 'No Product'});
    return product;
}

const addService = async(params) => {
    const {categoryId} = params;
    const category = await prisma.category.findUnique({
        where : {
            id : +categoryId
        }
    })
    if(!category) throw({name : 'No Category'})
    const product = await addRepository(params);
    return product;
}

const editService = async(params) => {
    const {id} = params;
    const existingProduct = await prisma.master_Product.findUnique({
        where : {
            id : +id
        }
    })
    if(!existingProduct) throw({name : 'No Product'});
    const updateProduct = await editRepository(params);
    return updateProduct;
}

const deleteService = async(params) => {
    const deleteProduct = await deleteRepository(params);
    return deleteProduct;
}


module.exports = {
    getAllService,
    getByIdService,
    addService,
    editService,
    deleteService
}
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


const getAllRepository = async(params) => {
    const {page,limit} = params;
    const products = await prisma.master_Product.findMany({
        skip : (page-1)*limit,
        take : +limit,
        include : {
            category : true
        }
    })
    return products;
}

const getByIdRepository = async(params) => {
    const product = await prisma.master_Product.findUnique({
        where : {
            id : +params
        }
    })
    return product;
}

const addRepository = async(params) => {
    const {name,price,categoryId} = params;
    const product = await prisma.master_Product.create({
        data : {
            name : name,
            price : +price,
            categoryId : +categoryId
        }
    })
    return product;
}

const editRepository = async(params) => {
    const {id,name,price,categoryId} = params;
    const updatedAt = new Date();
    const updateProduct = await prisma.master_Product.update({
        where : {
            id : +id
        },
        data : {
            name : name,
            price : +price,
            categoryId : +categoryId,
            updatedAt
        }
    })
    return updateProduct;
}

const deleteRepository = async(params) => {
    const deleteProduct = await prisma.master_Product.delete({
        where : {
            id : +params
        }
    })
    return deleteProduct;
}

module.exports = {
    getAllRepository,
    getByIdRepository,
    addRepository,
    editRepository,
    deleteRepository
}
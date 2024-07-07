const { 
    getAllRepository,
    getByIdRepository, 
    addRepository,
    editRepository,
    deleteRepository
} = require("../repositories/masterProductRepository");

const getAllService = async(params) => {
    const dummyVar = 'Hello World';
    await getAllRepository(dummyVar);
    console.log(params);
}

const getByIdService = async(params) => {
    await getByIdRepository(params);
    console.log(params);
}

const addService = async(params) => {
    await addRepository(params)
    console.log(params);
}

const editService = async(params) => {
    await editRepository(params);
    console.log(params);
}

const deleteService = async(params) => {
    await deleteRepository(params);
    console.log(params);
}


module.exports = {
    getAllService,
    getByIdService,
    addService,
    editService,
    deleteService
}
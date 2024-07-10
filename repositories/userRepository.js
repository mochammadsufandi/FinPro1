const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

class UserRepositories {
    static async getAllRepository(params){
        const{page,limit} = params
        const users = await prisma.user.findMany({
            skip : (page-1)*limit,
            take : +limit
        })
        return users;
    }
    static async getByIdRepository(params){
        const user = await prisma.user.findUnique({
            where : {
                id : +params
            }
        })
        return user;
    }
    static async addRepository(params) {
        const user = await prisma.user.create({
            data : params
        })
        return user;
    }
    static async editRepository(params) {
        const {name,email,password,address,role} = params;
        const updatedAt = new Date();
        const user = await prisma.user.update({
            where : {email},
            data : {
                name,email,password,address,role,updatedAt
            }
        })
        return user;
    }
    static async deleteRepository(params) {
        const user = await prisma.user.delete({
            where : {
                id : +params
            }
        })
        return user;
    }


    static async loginRepository(params) {
        const {email} = params;
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        return user;
    }
}


module.exports = UserRepositories;
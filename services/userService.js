const {PrismaClient} = require('@prisma/client');
const UserRepositories = require('../repositories/userRepository');
const prisma = new PrismaClient();
const {hashPassword, comparePassword} = require('../lib/bcrypt')

class UserServices {
    static async getAllService(params) {
        const users = await UserRepositories.getAllRepository(params);
        return users;
    }
    static async getByIdService(params) {
        const user = await UserRepositories.getByIdRepository(params);
        if(!user) throw({name : 'No User'});
        return user;
    }
    static async addService(params) {
        const {name,email,password, address, role} = params;
        if(!name || !email || !password || !address || !role) {
            throw({name : 'Invalid Input'})
        }
        const existingUser = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(existingUser) throw({name : 'User is Already Exist'});
        const hashedPassword = hashPassword(password);
        const user = await UserRepositories.addRepository({
            name : name,
            email : email,
            password : hashedPassword,
            address : address,
            role : role
        });
        return user;
    }
    static async editService(params) {
        const {email} = params;
        const existingUser = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(!existingUser) throw({name : 'Invalid Input'});
        const user = await UserRepositories.editRepository(params);
        return user;
        
    }
    static async deleteService(params) {
        const existingUser = await prisma.user.findUnique({
            where : {id : +params}
        })
        if(!existingUser) throw({name : 'Invalid Input'});
        const user = await UserRepositories.deleteRepository(params);
        return user;
    }
    static async loginService(params) {
        const {email,password} = params;
        const existingUser = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(!existingUser) throw({name : 'Invalid Email'});
        const checkPassword = comparePassword(password,existingUser.password);
        if(!checkPassword) {
            if(password !== existingUser.password) {
                throw({name : 'Invalid Password'});
            }
        }
        const user = await UserRepositories.loginRepository(params);
        if(!user) throw({name : 'Login Failed'});
        return user;
    }
}



module.exports = UserServices;
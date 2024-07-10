const UserServices = require("../services/userService");

class User {
    // Authentication 
     // Register User
     static async registerUser (req,res,next) {
        try {
            const params = req.body;
            const user = await UserServices.addService(params);
            return res.status(201).json({
                message : 'Berhasil Menambahkan User',
                data : user
            })
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
    // Login
    static async loginUser(req,res,next) {
        try {
            const params = req.body;
            const user = await UserServices.loginService(params);
            return res.status(200).json({
                message : 'Login Success',
                data : {
                    email : user.email
                }
            })
        } catch(err) {
            console.log(err);
            next(err);

        }
    }
    // getAllUser
    static async getAllUser(req,res,next) {
        try {
            const params = req.query;
            const users = await UserServices.getAllService(params);
            const usersField = users.map((user) => {
                return {
                    id : user.id,
                    name : user.name,
                    email : user.email,
                    address : user.address,
                    role : user.role
                }
            })
            return res.status(200).json({
                message : 'Berhasil Reload All User',
                data : usersField
            })
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
    // getUserById
    static async getUserById(req,res,next) {
        try {
            const {id} = req.params;
            const user = await UserServices.getByIdService(id);
            return res.status(200).json({
                message : "Berhasil Reload User By Id",
                data : user
            })
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
    // edit User 
    static async editUser (req,res,next) {
        try{
            const {id} = req.params;
            const params = req.body;
            const user = await UserServices.editService({id, ...params});
            return res.status(201).json({
                message : 'Berhasil Edit User',
                data : {
                    email : user.email
                }
            })
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
    // delete User
    static async deleteUser (req,res,next) {
        try{
            const {id} = req.params;
            const user = await UserServices.deleteService(id);
            return res.status(201).json({
                message : 'Berhasil Delete User'
            })
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
    
}

module.exports = User;
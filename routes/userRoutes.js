const express = require('express');
const User = require('../controllers/userController');

const router = express.Router();

router.get('/user', User.getAllUser);
router.get('/user/:id', User.getUserById);
router.post('/user/register', User.registerUser);
router.post('/user/login', User.loginUser);
router.put('/user/edit/:id', User.editUser);
router.delete('/user/delete/:id', User.deleteUser)

module.exports = router;


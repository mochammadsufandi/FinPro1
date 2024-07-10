const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const hashPassword = (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword,salt);
}

const comparePassword = (plainTextPassword,hashedPassword) => {
    return bcrypt.compareSync(plainTextPassword,hashedPassword);
}

module.exports = {
    hashPassword,
    comparePassword
}
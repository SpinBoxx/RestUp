const bcrypt = require('bcryptjs')

const users = [
    {
        "name": "admin",
        "email": "admin@admin.fr",
        "password": bcrypt.hashSync('admin')
    },
    {
        "name": "admin2",
        "email": "admin2@admin.fr",
        "password": bcrypt.hashSync('admin')
    }
];

module.exports = users


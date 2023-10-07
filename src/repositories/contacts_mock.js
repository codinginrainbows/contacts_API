const { v4 } = require('uuid');

let contacts = [
    {
        id: v4(),
        name: 'Gabriel',
        email: 'gabriel@gmail.com',
        phone: '999999999',
        category_id: v4(),
    },
    {
        id: v4(),
        name: 'Vinon',
        email: 'vinon@gmail.com',
        phone: '999999999',
        category_id: v4(),
    },
    {
        id: v4(),
        name: 'Leo',
        email: 'leo@gmail.com',
        phone: '999999999',
        category_id: v4(),
    }
]

module.exports = contacts;
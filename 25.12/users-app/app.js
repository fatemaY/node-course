const users = require('./users')
const yargs = require('yargs')
const uniqid= require('uniqid')


yargs.command({
    command: 'add',
    describe: 'Add a new user',
    builder: {
        id: {
            describe: 'User id',
            demandOption: false,
            type: 'string',
        },
        name: {
            describe: 'user name',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'user email',
            demandOption: true,
            type: 'email'
        }
    },
    handler(argv) {
        users.addUser(uniqid(),argv.name, argv.email)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a user',
    builder: {
        id: {
            describe: 'user id',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        users.removeUser(argv.id)
    }
})



// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a user',
    builder: {
        id: {
            describe: 'User id',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        users.readUser(argv.id)
    }
})

// Create update command
yargs.command({
    command: 'update',
    describe: 'update a user',
    builder: {
        id: {
            describe: 'update user id',
            demandOption: true,
            type: 'string',
          },
        name: {
            describe: 'update user name',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'update user email',
            demandOption: true,
            type: 'email'
        }
    },
    handler(argv) {
        users.updateUser(argv.id, argv.name, argv.email)
    }
})




yargs.parse()







// console.log(process.argv)
// console.log(yargs.argv)
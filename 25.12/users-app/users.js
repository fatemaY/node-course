const fs = require('fs')

const addUser = (id ,name, email) => {
    const users = loadUsers()
    const duplicateUser = users.find((user) => user.id === id)

    if (!duplicateUser) {
        users.push({
            id: id,
            name: name,
            email:email
        })
        saveUsers(users)
        console.log('New user added!')
    } else {
        console.log('Note id taken!')
    }
}

const removeUser = (id) => {
    const users = loadUsers()
    const usersToKeep = users.filter((user) => user.id !== id)

    if (users.length > usersToKeep.length) {
        console.log('User removed!')
        saveUsers(usersToKeep)
    } else {
        console.log('No user found!')
    }    
}



const readUser = (id) => {
    const users = loadUsers()
    const user = users.find((user) => user.id === id)

    if (user) {
        console.log(user.name)
        console.log(user.email)
    } else {
        console.log('User not found!')
    }
}

const updateUser = (id,name,email) => {
    const users = loadUsers()
    const index = users.findIndex((u) => u.id === id);

    if (index !== -1) {
        users[index].name = name;
        users[index].email = email;
        saveUsers(users)
        console.log('User updated successfully:', users[index])
    } else {
        console.log('User not found!')
    }
}

const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users)
    fs.writeFileSync('users.json', dataJSON)
}

const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('users.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addUser: addUser,
    removeUser: removeUser,
    readUser: readUser,
    updateUser: updateUser
}
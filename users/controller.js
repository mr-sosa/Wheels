const User = require('./model');


/* Busca y devuelve todos los usuarios */
async function getAllUsers(){
    const users = await User.findAll();
    return { status: 200, users: users};
};

/* Busca y devuelve el usuario por Id*/
async function getUser(id){
    const user = await User.findOne({where: {id: id}});
    if(user == null) {
        console.log('User not found, userId: ' + id);
        return { status: 404, error: 'User not found, userId: ' + id };
    }
    return { status: 200, user: user};
}

/* Crea un nuevo usuario */
async function createUser(user){
    try {
        const userSaved = await User.create(user);
        return { status: 201, userId: userSaved.id };
    } catch (error) {
        console.log(error);
        return { status: 500, error: error };
    }
}

/* Actualiza el usuario por Id */
async function updateUser(id, user){
    try {
        const userSaved = await User.update(user, {where: {id: id}});
        return { status: 200,  userId: userSaved.id };
    } catch (error) {
        console.log(error);
        return { status: 500, error: error };
    }
}

/* Elimina el usuario por Id*/
async function deleteUser(id){
    try {
        const user = await User.destroy({where: {id: id}});
        if(user == null) {
            console.log('User not found, userId: ' + id);
            return { status: 404, error: 'User not found, userId: ' + id };
        }
        return { status: 200, user: user};
    } catch (error) {
        console.log(error);
        return { status: 500, error: error };
    }
}

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
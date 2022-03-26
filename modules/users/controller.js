const { getDbRef } = require('../../lib/mongo');
const COLLECTION_NAME = 'users';
let jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const jwtKey = process.env.JSON_TOKEN;

const getAllUsers = async () => {
  try {
    const users = await getDbRef()
      .collection(COLLECTION_NAME)
      .find({})
      .toArray();
    return { users };
  } catch (error) {
    return { error };
  }
};

async function getUserByUserName(username) {
  try {
    const user = await getDbRef()
      .collection(COLLECTION_NAME)
      .findOne({ username });
    return user;
  } catch (error) {
    return { error };
  }
}

async function createUser(user) {
    try {
        const { username, password, email } = user;
        if (await checkIfUsernameExist(username)) {
        return {
            success: false,
            msg: 'User is already registered',
        };
        }
    
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);
    
        await getDbRef().collection(COLLECTION_NAME).insertOne(user);
        const token = jwt.sign({ username, email }, jwtKey);
        return {
        success: true,
        data: {
            username,
            email,
        },
        token,
        };
    } catch (error) {
        console.log(error);
        return {
        success: false,
        msg: 'Internal error',
        };
    }
};
    
const checkIfUsernameExist = async (username) => {
const existUser = await getUserByUserName(username);
return existUser;
};

async function updateUser(user) {
    try {
        const user = await getDbRef()
            .collection(COLLECTION_NAME)
            .updateOne(
                { "username": user.username}, // Filtro al documento que queremos modificar
                user // El cambio que se quiere realizar -- no estoy segura de que funcione
            )
        return { user };
        } catch (error) {
        return { error };
        }
};

async function deleteUser(username) {
    try {
        const user = await getDbRef()
            .collection(COLLECTION_NAME)
            .deleteOne({ username });
        return { user };
        } catch (error) {
        return { error };
        }
};

async function getUserCars(username) {
    try {
        const user = getUserByUserName(username);
        if (user.isDriver === false) {
            return {
                success: false,
                msg: 'User is not a driver',
            };
            }
        return user.cars;
    } catch (error) {
        return { error };
    }
};

/* async function getUserCar(username, idC) {
    try {
        const user = getUserByUserName(username);
        if (user.isDriver === false) {
            return {
                success: false,
                msg: 'User is not a driver',
            };
            }
        const car = await getDbRef()
        .collection(COLLECTION_NAME)
        .find( {"cars.id": idC}, {_id: 0})
        return car
    } catch (error) {
        return { error };
    }
}; */

module.exports = { getAllUsers, getUserByUserName, createUser, updateUser, deleteUser, getUserCars };

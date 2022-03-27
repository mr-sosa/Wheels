const { getDbRef } = require('../../lib/mongo');
const COLLECTION_NAME = 'users';
let jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const { ObjectID, ObjectId } = require('mongodb');
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
    
        //const salt = bcryptjs.genSaltSync();
        //user.password = bcryptjs.hashSync(password, salt);
    
        await getDbRef().collection(COLLECTION_NAME).insertOne(user);
        //const token = jwt.sign({ username, email }, jwtKey);
        return {
        success: true,
        data: {
            username,
            email,
        },
        //token,
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
return existUser
};

async function updateUser(username_,user) {
    try {
        const newU = await getDbRef()
            .collection(COLLECTION_NAME)
            .updateOne(
                {username: username_},
                { $set: user });
        return {newU};
        } catch (error) {
            console.error(error)
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


async function deleteCarFromUser(username_,idC) {
    try {
        const user = await getUserByUserName(username_);
        const car = user.cars[idC];
        if (user.isDriver===false){
            return {
                success: false,
                msg: 'User is not a driver',
            };
        }
        await getDbRef()
            .collection(COLLECTION_NAME)
            .update(
            { username : username_},
            { $pull: { cars: { placa: car.placa } }}
        );
        
        return {
        success: true,
        data: {
            username_,
        }
        }} catch (error) {
        return { error };
        }
};


async function addCarToUser(username_,car) {
    try {
        const user = await getUserByUserName(username_);
        if (user.isDriver===false){
            return {
                success: false,
                msg: 'User is not a driver',
            };
        }
        await getDbRef()
            .collection(COLLECTION_NAME)
            .update(
            { username : username_},
            { $pull: { cars: { placa: car.placa } }}
        );
        await getDbRef()
            .collection(COLLECTION_NAME)
            .update(
            { username : username_},
            { $push: {cars : car}}
        );
        
        return {
        success: true,
        data: {
            username_,
        }
        }} catch (error) {
        return { error };
        }
};

async function getUserCars(username) {
    try {
        const user = await getUserByUserName(username);
        if (user.isDriver===false){
            return {
                success: false,
                msg: 'User is not a driver',
            };
        }
        console.log(user)
        return user.cars;
      } catch (error) {
        return { error };
      }
};


async function getUserCar(username, idC) {
    try {
        const user = await getUserByUserName(username);
        if (user.isDriver===false){
            return {
                success: false,
                msg: 'User is not a driver',
            };
        }
        console.log(user)
        return user.cars[idC];
      } catch (error) {
        return { error };
      }
};

module.exports = { getAllUsers, getUserByUserName, createUser, updateUser, deleteUser, getUserCars, getUserCar, deleteCarFromUser, addCarToUser };

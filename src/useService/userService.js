const db = require("../models/index");

const getUserService = async () => {
  try {
    const user = await db.User.findAll();
    let data = [];
    if (user) {
      data = user;
      return {
        EM: "get success getUserService",
        EC: 0,
        DT: data,
      };
    }
    return {
      EM: "get failed getUserService",
      EC: 1,
      DT: data,
    };
  } catch (error) {
    return {
      EM: "error getUserService",
      EC: -1,
      DT: [],
    };
  }
};
const postUserService = async (data) => {
  try {
    const user = await db.User.create({
      userName: data.userName,
      password: data.password,
      email: data.email,
    });
    let userData = {};
    if (user) {
      userData = user;
      return {
        EM: "create success postUserService",
        EC: 0,
        DT: userData,
      };
    }
    return {
      EM: "create failed postUserService",
      EC: 1,
      DT: userData,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "error postUserService",
      EC: -1,
      DT: [],
    };
  }
};

const updateUserService = async (id, data) => {
  try {
    const user = await db.User.update(
      {
        userName: data.userName,
        password: data.password,
        email: data.email,
      },
      { where: { id: id } }
    );
    if (user) {
      return {
        EM: "update success updateUserService",
        EC: 0,
        DT: user,
      };
    }
    return {
      EM: "update failed updateUserService",
      EC: 1,
      DT: user,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "error updateUserService",
      EC: -1,
      DT: [],
    };
  }
};
const deleteUserService = async (id) => {
  try {
    const user = await db.User.destroy({ where: { id: id } });
    if (user) {
      return {
        EM: "delete success deleteUserService",
        EC: 0,
        DT: user,
      };
    }
    return {
      EM: "delete failed deleteUserService",
      EC: 1,
      DT: user,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "error deleteUserService",
      EC: -1,
      DT: [],
    };
  }
};

module.exports = {
  getUserService,
  postUserService,
  updateUserService,
  deleteUserService,
};

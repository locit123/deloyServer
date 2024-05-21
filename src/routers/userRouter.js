const userController = require("../controllers/userController");
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", userController.getUser);
userRouter.post("/", userController.postUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;

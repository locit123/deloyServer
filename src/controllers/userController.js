const useService = require("../useService/userService");
class userController {
  async getUser(req, res) {
    try {
      setTimeout(async () => {
        let result = await useService.getUserService();
        if (result) {
          return res.status(200).json({
            EM: result.EM,
            EC: result.EC,
            DT: result.DT,
          });
        }
        return res.status(200).json({ mess: "No data result" });
      }, 1000);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mess: error });
    }
  }
  async postUser(req, res) {
    try {
      setTimeout(async () => {
        let result = await useService.postUserService(req.body);
        if (result) {
          return res.status(200).json({
            EM: result.EM,
            EC: result.EC,
            DT: result.DT,
          });
        }
        return res.status(200).json({ mess: "No create result" });
      }, 1000);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mess: error });
    }
  }
  async updateUser(req, res, next) {
    try {
      let { id } = req.params;
      let result = await useService.updateUserService(id, req.body);
      if (result) {
        return res.status(200).json({
          EM: result.EM,
          EC: result.EC,
          DT: result.DT,
        });
      }
      return res.status(200).json({ mess: "No create result" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mess: error });
    }
  }
  async deleteUser(req, res, next) {
    try {
      let { id } = req.params;
      let result = await useService.deleteUserService(id);
      if (result) {
        return res.status(200).json({
          EM: result.EM,
          EC: result.EC,
          DT: result.DT,
        });
      }
      return res.status(200).json({ mess: "No create result" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mess: error });
    }
  }
}
module.exports = new userController();

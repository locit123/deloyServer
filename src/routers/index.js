const userRouter = require("../routers/userRouter");
const appRouter = (app) => {
  app.use("/", userRouter);
};
module.exports = appRouter;

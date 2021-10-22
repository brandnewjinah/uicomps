import mongoose from "mongoose";

//connect to db
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGODB_ADDRESS, dbOptions)
  .then(() => console.log("db connected"))
  .catch((error) => console.log(error.message));

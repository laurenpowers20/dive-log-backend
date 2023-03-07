import mongoose from "mongoose";

const connectionString = "mongodb://127.0.0.1:27017logsAuthenticationDatabase";

mongoose.connect(connectionString, mongooseConfig);
let MONGODB_URI =
  process.env.LOG_MONGODB ||
  "mongodb://127.0.0.1:27017/logsAuthenticationDatabase";

mongoose.set("returnOriginal", false);

mongoose
  .connect(MONGODB_URI)
  .catch((error) =>
    console.error("Error connecting to MongoDB: ", error.message)
  );

mongoose.connection.on("disconnected", () =>
  console.log(`Disconnected from MongoDB!`)
);

mongoose.connection.on("error", (error) =>
  console.error(`MongoDB connection error: ${error}`)
);

export default mongoose.connection;

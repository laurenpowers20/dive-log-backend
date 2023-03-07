import mongoose from "mongoose";

let MONGODB_URI =
  process.env.LOG_MONGODB ||
  "mongodb://0.0.0.0:27017/logsAuthenticationDatabase";

//  https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
mongoose.set("returnOriginal", false);

// Setup connection for MongoDB
// https://mongoosejs.com/docs/connections.html#connections
mongoose
  .connect(MONGODB_URI)
  .catch((error) =>
    console.error("Error connecting to MongoDB: ", error.message)
  );

// Listen to MongoDB events
// Learn more: https://mongoosejs.com/docs/connections.html#connection-events
mongoose.connection.on("disconnected", () =>
  console.log(`Disconnected from MongoDB!`)
);

// Listen to any errors while connected to MongoDB
// Learn more: https://mongoosejs.com/docs/connections.html#error-handling
mongoose.connection.on("error", (error) =>
  console.error(`MongoDB connection error: ${error}`)
);

// Export the connection
export default mongoose.connection;

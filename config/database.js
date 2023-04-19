const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`${error} did not connect`);
  }
};

module.exports = connectDB;

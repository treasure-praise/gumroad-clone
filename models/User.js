const mongoose = require("mongoose");

const UserSchema =
  ((mongoose.newSchema = {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  }),
  {
    timestamps: true,
  });

const User = mongoose.model("User", UserSchema);

export default User;

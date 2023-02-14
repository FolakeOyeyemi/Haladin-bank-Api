const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [ true, "email is required"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"]
    },
    business: {
        type: String,
        required: [true, "business is required"]
    },


},
 {
    timeStamps: true
}
);

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
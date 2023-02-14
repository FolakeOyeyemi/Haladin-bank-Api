const Customer = require("../models/customer");

//create customer signup
const customerSignUp = async ( req, res) => {
    const {firstName, lastName, email, phoneNumber, business} = req.body;
    try {
        if (!(firstName && lastName && email && phoneNumber && business)) {
            return res.status(400).json({
                message: "All fields required",
            });
        }
    
      const emailExist = await Customer.findOne({email}) 
      if (emailExist) {
        return res.status(400).json({ 
            message: "Email exist"
        })
      } 

      const customer = await Customer.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        business,
      });
      return res.status(201).json({
        message: "Customer created sucessfully",
        customer
      })


    }catch(error){
        console.log (error);
        return res.status(500).json({
        error: error.message,
    });
 }
};


//count customers

const countCustomers = async (req, res) => {
  try {
    const countUsers = await Customer.countDocuments()
    res.status(200).json({
      message: "Customers counted successfully",
      countUsers
    })
  } catch (error) {
      console.log (error);
      return res.status(500).json({
      error: error.message,
  });
  }
}

const viewAll = async (req, res) => {
  try {
    const viewAll = await Customer.find()
    res.status(200).json({
      message: "Customers fetched successfully",
      viewAll
    });
  } catch (error) {
    console.log(error);
return res.status(500).json({
  message: error.message,
});
  }
}

const updateCustomers = async (req, res) => {
 
  try {
    const id = req.params.id
    const updateCustomers = await Customer.findOneAndUpdate({_id}, req.body, {new: true});
    if (!updateCustomers){
      res.status(404).json ({
        message: "customers not found"
      })

      return res.status(200).json ({
        message: "Updated successfully",
        updateCustomers
      })
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Data updated"
    });
  }
}
  

module.exports = {
    customerSignUp,
    countCustomers,
    viewAll, updateCustomers,
};




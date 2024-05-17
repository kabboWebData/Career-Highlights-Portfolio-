const contactModel  = require('../Model/Mvc.model');


exports.getContact = async (req, res) => {
    try {
        const contactObject = new contactModel({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });

        const contactData = await contactObject.save();
        res.send(contactData);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
};
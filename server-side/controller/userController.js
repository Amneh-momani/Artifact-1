const userModel = require("../model/userModel")

const getUser = (req, res) => {
    userModel.find({})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json(err)
        })


}


const addUser = (req, res) => {
    const {
        strName, strProfileImgName, dtmDOB, strEmail,
        strPassword
    } = req.body;

    const newUser = new userModel({
        strName:strName, strProfileImgName:strProfileImgName, dtmDOB:dtmDOB, strEmail:strEmail,
        strPassword:strPassword
    });
    newUser.save();

    res.json(newUser);
}


module.exports = {
    getUser,
    addUser,
};

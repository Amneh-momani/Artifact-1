const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    strName: { type: String }, strProfileImgName: { type: String }, dtmDOB: { type: String}, strEmail: { type: String },
    strPassword: { type: String },blnIsActive:{type:Boolean , default:true}
});

//  tblUser table name
module.exports = mongoose.model("tblUser", userSchema);
const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema({
    Name: { type: String },
    PreferredPosition: { type: String }
}, { timestamps: true });
module.exports.Team = mongoose.model('Team', TeamSchema);

const { Team } = require('../models/team.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createTeam = (request, response) => {
    const { Name, PreferredPosition } = request.body;
        Team.create({
            Name,
            PreferredPosition
    })
        .then(Team => response.json(Team))
        .catch(err => response.json(err));
}


module.exports.findAllTeam = (request, response) => {
    Team.find()
        .then(allTeams => response.json(allTeams))
        .catch(err => response.json({message: "something wrong", error: err}));
};


module.exports.getTeam = (request, response) => {
    Team.findOne({_id:request.params.id})
        .then(team => response.json(team))
        .catch(err => response.json(err))
}

module.exports.deleteTeam = (request, response) => {
    Team.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
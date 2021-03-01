const TeamController = require('../controllers/team.controller');
module.exports = function(app){
    //app.get('/api', TeamController.index);
    app.post('/api/team', TeamController.createTeam);
    app.get('/api/findAllTeam', TeamController.findAllTeam);
    app.get('/api/getteam/:id', TeamController.getTeam);
    app.delete('/api/deleteteam/:id', TeamController.deleteTeam);
}

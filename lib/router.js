FlowRouter.route('/game/:gameId', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', { main: 'gamePage' });
        console.log("Displaying game with ID", params.gameId);
    }
});
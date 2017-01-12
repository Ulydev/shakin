FlowRouter.route('/game/:gameId', {
    action: (params, queryParams) => {
        BlazeLayout.render('mainLayout', { main: 'gamePage' });
    }
});

FlowRouter.route('/', {
    action: (params, queryParams) => {
        BlazeLayout.render('mainLayout', { top: 'intro', main: 'gameList' })
    }
})
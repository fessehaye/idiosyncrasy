define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'game', title:'Game', moduleId: 'viewmodels/game', nav: true },
                { route: 'results', title:'Results', moduleId: 'viewmodels/results', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});

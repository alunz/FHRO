require(['app', 'router', 'backbone'], function(app, router, Backbone) {
    app.router = router;

    Backbone.history.start();
});
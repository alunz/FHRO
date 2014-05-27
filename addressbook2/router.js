module.exports = function(app) {
    app.get('/foo', function(req, res) {
        res.end('Hello World22');
    });

    app.get('/address', function(req, res) {});
    app.get('/address/:id', function(req, res) {});
    app.post('/address', function(req, res) {});
    app.put('/address/:id', function(req, res) {});
    app.delete('/address/:id', function(req, res) {});
};

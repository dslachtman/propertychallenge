module.exports = function(app){
    var properties = require('./controllers/properties');
   app.get('/', function(req, res) {
    res.render('index.html');
});
    app.get('/properties', properties.findAll);
    app.get('/properties/:id', properties.findById);
    app.post('/properties', properties.add);
    app.put('/properties/:id', properties.update);
    app.delete('/properties/:id', properties.delete);
    app.get('/import', properties.import);
}
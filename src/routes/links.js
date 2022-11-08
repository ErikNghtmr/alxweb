module.exports = app => {
    app.get('/', (req, res) => {
        res.render('index', {title: 'ALX - Soporte Web'});
    });

    app.get('/pages/contact', (req, res) => {
        res.render('pages/contact', {title: 'Contactenos'});
    });

}
module.exports = app => {
    app.get('/', (req, res) => {
        res.render('home')
    })

    app.get('/about', (req, res) => {
        res.render('about')
    })

    app.get('/services', (req, res) => {
        res.render('services')
    })

    app.get('/equipment', (req, res) => {
        res.render('equipment')
    })

    app.get('/contact', (req, res) => {
        res.render('contact')
    })
}
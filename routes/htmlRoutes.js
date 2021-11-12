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

    app.get('/equipment', async (req, res) => {
        try {
            // use await when fetching real data from server-side database.
            const machines = require('../db/productsDB.json').filter(prod => prod.category === 'machine');
            const accessories = require('../db/productsDB.json').filter(prod => prod.category === 'accessory');
            const tools = require('../db/productsDB.json').filter(prod => prod.category === 'tool');
            const consumables = require('../db/productsDB.json').filter(prod => prod.category === 'consumable');
            res.render('equipment', { machines, accessories, tools, consumables })
        } catch(err) { console.error(err) }

    })

    app.get('/contact', (req, res) => {
        res.render('contact')
    })
}
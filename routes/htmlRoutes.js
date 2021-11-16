module.exports = app => {
    app.get('/', (req, res) => {
        res.render('home', {
            title: 'Metronics, Inc.',
            style: 'css/home.css'
        })
    })

    app.get('/about', (req, res) => {
        res.render('about', {
            title: 'Metronics, Inc. | About',
            style: 'css/main.css'
        })
    })

    app.get('/services', (req, res) => {
        res.render('services', {
            title: 'Metronics, Inc. | Services',
            style: 'css/main.css'
        })
    })

    app.get('/equipment', async (req, res) => {
        try {
            // use await when fetching real data from server-side database.
            const machines = require('../db/products.json').filter(prod => prod.category === 'machine');
            const accessories = require('../db/products.json').filter(prod => prod.category === 'accessory');
            const tools = require('../db/products.json').filter(prod => prod.category === 'tool');
            const consumables = require('../db/products.json').filter(prod => prod.category === 'consumable');
            res.render('equipment', {
                machines, accessories, tools, consumables,
                title: 'Metronics, Inc. | Equipment',
                script: 'js/equipment.js',
                style: 'css/main.css'
            })
        } catch(err) { console.error(err) }

    })

    app.get('/contact', (req, res) => {
        res.render('contact', {
            title: 'Metronics, Inc. | Contact',
            script: 'js/contact.js',
            style: 'css/main.css'
        })
    })
}
module.exports = app => {
    app.get('/home', (req, res) => {
        res.render('home', {
            title: 'Metronics, Inc.',
            style: 'css/home.css'
        })
    })

    app.get('/services', (req, res) => {
        res.render('services', {
            title: 'Metronics, Inc. | Services',
            style: 'css/services.css'
        })
    })

    app.get('/equipment', (req, res) => {
        let machines = require('../db/products.json').filter(prod => prod.category === 'machine');
        let tools = require('../db/products.json').filter(prod => prod.category === 'tool');
        let accessories = require('../db/products.json').filter(prod => prod.category === 'accessory');
        let consumables = require('../db/products.json').filter(prod => prod.category === 'consumable');
        res.render('equipment', {
            machines, tools, accessories, consumables,
            title: 'Metronics, Inc. | Equipment',
            script: 'js/observer.js',
            style: 'css/equipment.css'
        })
    })

    app.get('/contact', (req, res) => {
        res.render('contact', {
            title: 'Metronics, Inc. | Contact',
            style: 'css/contact.css'
        })
    })
}
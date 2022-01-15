const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Metronics, Inc.',
        style: 'css/home.css'
    })
})

router.get('/services', (req, res) => {
    res.render('services', {
        title: 'Metronics, Inc. | Services',
        style: 'css/services.css'
    })
})

router.get('/equipment', (req, res) => {
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

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Metronics, Inc. | Contact',
        style: 'css/contact.css'
    })
})

module.exports = router;
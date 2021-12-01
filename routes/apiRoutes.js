const db = require('../models');

module.exports = app => {
    app.get('/api/products', async (req, res) => {
        try {
            const data = await db.Product.find();
            res.json(data);
        } catch(err) { res.status(422).json({ msg: err}) }
    });
    app.post('/api/products', async (req, res) => {
        try {
            const data = await db.Product.create(req.body);
            res.json(data);
        } catch(err) { res.status(422).json({ msg: err}) }
    });
    app.delete('/api/products', async (req, res) => {
        try {
            await db.Product.deleteOne({ _id: req.params.id });
            res.end();
        } catch(err) { res.status(422).json({ msg: err}) }
    })
}

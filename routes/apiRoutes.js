const fs = require('fs');
const path = require('path');

module.exports = app => {
    app.get('/api/products', (req, res) => {
        res.json(JSON.parse(fs.readFileSync(path.join(__dirname, '../db/products.json'), 'utf-8')));
    });
}

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Model # required'], index: true },
    description: { type: String, required: [true, 'Description required'], index: true },
    image: { type: String, required: [true, 'Image URL required'] },
    attachment: String
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
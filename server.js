const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5050;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('*', cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/build'));
}

require('./routes/htmlRoutes.js')(app);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/metronicsDB')
    .then(() => console.log("Connected to Metronics database."))
    .catch(err => console.log("Failed to connect to database." + "\n" + `Error: ${err.message}`));

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use('*', cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./routes/htmlRoutes.js')(app);
require('./routes/apiRoutes.js')(app);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/metronics_test')
    .then(() => console.log("Connected to Metronics database."))
    .catch(err => console.log("Failed to connect to database." + "\n" + `Error: ${err.message}`));

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));

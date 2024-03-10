const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const session = require('express-session');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(express.static('public'));

app.engine('hbs', exphbs.engine({
    extname: 'hbs', // Set the file extension to .hbs
    defaultLayout: 'main', // Assuming 'main.hbs' is your default layout in the 'layouts' folder
    layoutsDir: __dirname + '/layouts', // Path to your layouts directory
    partialsDir: __dirname, // If you have partials, set this to their directory; assuming they're in the root for this example
    helpers: {
        formatNumber: function (value) {
            if (value != null) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return '';
            }
        }
    }    
}));

app.set('view engine', 'hbs'); // Set Handlebars as the view engine
app.set('views', __dirname); // Set the directory where Express will look for views


const pool=mysql.createPool({
    //env file me hai
    connectionLimit:100,
    host: 'localhost',
    user : 'root',
    password : 'Ved@1357',
    database: 'project'
});

app.use(session({
    secret: 'your secret key',
    resave: false,
    saveUninitialized: true
  }));


//Connect to DB
pool.getConnection((err, Connection) =>{
    if(err) throw err; //not connected
    console.log('Connected as ID' + Connection.threadId);
});

// app.get('', (req, res) =>{
//     res.render('home')
// });

const routes = require('./server/routes/user');
app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
const path = require('path');
const express = require('express')
const session = require('express-session');
const routes = require('./controllers')

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = 3001; 

const sess = {
    secret: "Sper secret secret",
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure:false,
        sameSite: "strict",
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db:sequelize
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

app.use(routes);

sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});
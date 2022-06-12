// ************ Require's************
const express = require('express');
const session = require('express-session');
const path = require('path');
const productRoutes = require('./routes/products');
const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/users');
const userLoggedMidleware = require('./middlewares/userLoggedMiddleware');
const cors = require('cors')

const methodOverride =  require('method-override');
const cookieParser = require('cookie-parser');

//Rutas de la API
const apiUsersRouter = require('./routes/api/users');
const apiProductsRouter = require('./routes/api/products');

// ************ express()************
const app = express();

const publicPath = path.join(__dirname, '../public');
app.use(session({secret:"Mensaje secreto", resave: false, saveUninitialized: false}));
app.use(cookieParser());
app.use(userLoggedMidleware);
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.json());
app.use( cors() )

//************ Template Engine************
const viewsPath = path.join(__dirname, './views');
app.set('view engine', 'ejs');
app.set('views', viewsPath);

app.use('/', mainRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

//**************API*************/
app.use('/api/users', apiUsersRouter);
app.use('/api/products', apiProductsRouter);

app.use( (req, res, next) => {
    res.status(404).render('not-found');
});

app.listen(3001, ()  => {
    console.log('IMentor está corriendo');
});
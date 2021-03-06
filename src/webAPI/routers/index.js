const indexController = require('../controllers/index.controller');
const usersRouter = require('./users');
const authRouter = require('./auth');
const categoriesRouter = require('./categories');
const booksRouter = require('./books');
const paymentRoute = require('./payment');
const bookmarkRoute = require('./bookmark');

function route(app) {
    app.use('/auth', authRouter);
    app.use('/categories', categoriesRouter);
    app.use('/books', booksRouter);
    app.use('/users', usersRouter);
    app.use('/payment', paymentRoute);
    app.use('/bookmark', bookmarkRoute);
    app.use('/', indexController.index);
}

module.exports = route;

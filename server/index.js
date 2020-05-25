var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { notFound, errorHandler } = require('./middlewares/errorHandlers')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const port = 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Community API!'
    })
})

app.use(notFound);
app.use(errorHandler);

app.listen(port ,
    () => {
        console.log(`Server is listening`)
    }
)
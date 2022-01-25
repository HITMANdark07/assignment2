const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
require('dotenv').config();


// app
const app = express();

// importing routes
const userRoutes = require("./routes/user");

// db

mongoose.connect(process.env.NODE_MONGODB_DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log('DATABASE connected'))
.catch((err)=> console.log("Error Connecting DATABASE",err));


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// Routes

app.use("/api", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Assignment Server Running on ${port} - ${process.env.NODE_ENV}`);
});


const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//load env vars
dotenv.config({path:'./config/config.env'});

//connect to database
connectDB();

const app = express();	
 
//Body parser 
app.use(express.json());

//Enable cors 
app.use(cors());

//Set Static folder 
app.use(express.static(path.join(__dirname,'public')));

//Routes
app.use('/api/v1/stores',require('./routes/stores'));


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> 
	console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

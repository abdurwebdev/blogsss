const express = require('express');
const app = express();
const db = require('./config/db');
const cors = require('cors');
const authRouter = require('./routes/authRoutes');
const verifyToken = require('./middlewares/authMiddleware');
const cookieParser = require('cookie-parser');
db();
require('dotenv').config();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/api',authRouter);
app.get("/",(req,res)=>{
  res.send("Hello")
})

app.listen(3000);
// module.exports = app;
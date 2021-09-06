const express = require('express');
 require('dotenv').config();
 const cors = require('cors');
 const app = express();
 const mongoose = require('mongoose');
 
 const PORT = process.env.PORT;
 const MONGO_DB_URL = process.env.MONGO_DB_URL;
 mongoose.connect(`${MONGO_DB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true });
 
 app.use(cors());
 app.use(express.json());

// userInfo
const {
    getUser,
    addUser,
    
  } = require('./controller/userController'); 

  
app.post('/adduser', addUser);
app.get('/allUsers', getUser); 

app.listen(PORT, ()=>console.log(`Listen to PORT ${PORT}`));
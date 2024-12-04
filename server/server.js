const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcryptjs');  // Importiere bcrypt
const jwt = require('jsonwebtoken');  // Importiere jsonwebtoken


const app = express();
const port = 3000;




const db = new sqlite3.Database('../db/Database.db', (err)=>{
  if(err){
    console.error('Error while connecting database.', err.message);
  }
});




db.run((err)=>{
  if(err){
    console.log('Error while compiling database')
  }
  console.log('Database connection established');
});

// Middleware
app.use(cors());
app.use(express.json());










app.get('/api/connection',(req,res) => {
   res.status(200).json({
    connection:'OK'
  });
});



app.post('/api/login', (req,res) => {
  const {username, password, adminkey} = req.body;
  if(username === "Nils" && password === "123" && adminkey === '000'){
    res.status(200).json({
      message:"Nutzer erkannt"
    });
  }


  else if(username === "Max" && password === "123" && adminkey === '111'){
    res.status(200).json({
      message:"Nutzer erkannt"
    });
  }
  else {
    res.status(500).json({
      message:"Kein valider Nuzer"
    })
  }
});


app.post('/api/register', (req, res) => {
  
});
  
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
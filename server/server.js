const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcryptjs');  // Importiere bcrypt
const jwt = require('jsonwebtoken');  // Importiere jsonwebtoken


const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());




app.get('/api/connection',(req,res) => {
   res.status(200).json({
    connection:'OK'
  });
})

app.get('/api/hello', (req,res) => {
  res.status(200).json({
    hello:"hello from backend"
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
})

  
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
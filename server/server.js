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


  
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
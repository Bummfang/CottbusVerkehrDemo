const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcryptjs');  // Importiere bcrypt
const jwt = require('jsonwebtoken');  // Importiere jsonwebtoken


const app = express();
const port = 3000;




const db = new sqlite3.Database('../db/Database.db', (err) => {
  if (err) {
    console.error('Error while connecting database.', err.message);
  }
  else {
    console.log('Database connection established.');
  }
});






// Middleware
app.use(cors());
app.use(express.json());




app.get('/api/connection', (req, res) => {
  res.status(200).json({
    connection: 'OK'
  });
});



app.post('/api/login', (req, res) => {
  const { username, password, adminkey } = req.body;
  if (username === "Nils" && password === "123" && adminkey === '000') {
    res.status(200).json({
      message: "Nutzer erkannt"
    });
  }


  else if (username === "Max" && password === "123" && adminkey === '111') {
    res.status(200).json({
      message: "Nutzer erkannt"
    });
  }
  else {
    res.status(500).json({
      message: "Kein valider Nutzer"
    })
  }
});


app.post('/api/register', async (req, res) => {
  try {
    const { username, passwort, adminkey } = req.body;
    // Validierung
    if (!name || !email || !password || !adminkey) {
      return res.status(400).json({ error: 'Name, E-Mail, Passwort und Admin-Key sind erforderlich.' });
    }

    const saltRounds = 10;
    const hashedPasswort = await bcrypt.hash(passwort, saltRounds);
    console.log(`Username: ${username}, Hashed Password: ${hashedPassword}`);

    res.status(200).json({
      message: "hashing password complete"
    });

    if (!name || !email) {
      return res.status(400).json({ error: 'Name und E-Mail sind erforderlich.' });

    }

    const sql = `INSERT INTO employee (name, email, password, adminkey) VALUES (?, ?, ?, ?)`;
    db.run(sql, [name, email, hashedPasswort, adminkey], function (err) {
      if (err) {
        return res.status(500).json({ error: 'Fehler beim Registrierungsprozess: ' + err.message });
      }
      res.status(201).json({ message: 'Mitarbeiter hinzugefügt', employeeId: this.lastID });
    });










  }
  catch (err) {
    res.status(500).json({ message: "error while hashing passwort" });
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
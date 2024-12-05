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



app.post('/api/login', async (req, res) => {
  try {
    const { username, password, adminkey } = req.body;

    // Validierung
    if (!username || !password) {
      return res.status(400).json({ error: 'Benutzername und Passwort sind erforderlich.' });
    }

    // SQL-Abfrage, um das Passwort des Nutzers zu bekommen
    db.get(`SELECT password FROM employee WHERE name = ?`, [username], async function (err, row) {
 
      if (!row) {
        return res.status(404).json({ error: 'Benutzer nicht gefunden' });
      }

      // Passwortvergleich
      const match = await bcrypt.compare(password, row.password);
      if (match) {
        // Erfolgreiche Anmeldung
        return res.status(200).json({ message: 'Erfolgreich angemeldet' });
      } else {
        // Ungültiges Passwort
        return res.status(401).json({ error: 'Falsches Passwort' });
      }
    });
  } catch (error) {
    return res.status(500).json({ error: 'Fehler beim Login: ' + error.message });
  }
});



app.post('/api/register', async (req, res) => {
  try {
    const { username, password, adminKey } = req.body;
    // Validierung
    if (!username || !password || !adminKey) {
      return res.status(400).json({ error: 'Name, Passwort und Admin-Key sind erforderlich.' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(`Username: ${username}, Hashed Password: ${hashedPassword}`);

    const sql = `INSERT INTO employee (name, password, admin_key) VALUES (?, ?, ?)`;
    db.run(sql, [username, hashedPassword, adminKey], function (err) {
      if (err) {
        return res.status(500).json({ error: 'Fehler beim Registrierungsprozess: ' + err.message });
      }
      res.status(201).json({ message: 'Mitarbeiter hinzugefügt', employeeId: this.lastID });
    });
  }
  catch (err) {
    res.status(500).json({ message: "error while hashing password" });
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
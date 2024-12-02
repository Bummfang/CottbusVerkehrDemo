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





// Datenbank als Objekt
const db = new sqlite3.Database('../db/cottbusverkehr.db', (err) => {
    if(err){
        console.log('error while loading database')
    }
    else{
        console.log('connection established');
    }
});





// Beispiel-Route: Alle Linien anzeigen
app.get('/api/lines', (req, res) => {
    db.all('SELECT * FROM lines', [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
});





// Beispiel-Route: Alle Linien anzeigen
app.get('/api/lines', (req, res) => {
    db.all('SELECT * FROM lines', [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
});





// Beispiel-Route: Alle Haltestellen anzeigen
app.get('/api/stops', (req, res) => {
    db.all('SELECT * FROM stops', [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
});





// Beispiel-Route: Plan für eine Linie anzeigen (z.B. Linie 1)
app.get('/api/plan/:lineId', (req, res) => {
    const { lineId } = req.params;
    db.all('SELECT * FROM plan_16 WHERE line_id = ?', [lineId], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
});





// Route für die Benutzerregistrierung
app.post('/api/register', (req, res) => {
    const { username, passwort } = req.body;
  
    if (!username || !passwort) {
      return res.status(400).json({ message: 'Benutzername und Passwort sind erforderlich.' });
    }
  
    // Überprüfen, ob der Benutzername bereits existiert
    db.get('SELECT * FROM employees WHERE username = ?', [username], (err, user) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      if (user) {
        return res.status(400).json({ message: 'Benutzername bereits vergeben' });
      }
  
      // Passwort hashen
      bcrypt.hash(passwort, 10, (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({ error: 'Fehler beim Hashen des Passworts' });
        }
  
        // Benutzer in der DB speichern
        const sql = 'INSERT INTO employee (username, passwort) VALUES (?, ?)';
        db.run(sql, [username, hashedPassword], function (err) {
          if (err) {
            return res.status(500).json({ error: 'Fehler beim Hinzufügen des Benutzers' });
          }
  
          // Erfolgreiche Registrierung
          res.status(201).json({ message: 'Benutzer erfolgreich registriert', userId: this.lastID });
        });
      });
    });
  });




// Route für das Login
app.post('/api/login', (req, res) => {
    const { username, passwort } = req.body;
  
    // Überprüfen, ob der Benutzer existiert
    db.get('SELECT * FROM employees WHERE username = ?', [username], (err, user) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      if (!user) {
        return res.status(404).json({ message: 'Benutzer nicht gefunden' });
      }
  
      // Vergleiche das Passwort mit dem gehashten Passwort in der DB
      bcrypt.compare(passwort, user.passwort, (err, isMatch) => {
        if (err) {
          return res.status(500).json({ error: 'Passwortvergleich fehlgeschlagen' });
        }
  
        if (!isMatch) {
          return res.status(401).json({ message: 'Falsches Passwort' });
        }
  
        // Wenn die Passwörter übereinstimmen, erstelle ein JWT
        const payload = { userId: user.id, username: user.username };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  
        // Sende das Token zurück
        res.json({ message: 'Login erfolgreich', token });
      });
    });
});


  
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
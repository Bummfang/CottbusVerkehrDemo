# Cottbus Verkehr - Entwicklung einer modernen Weblösung und das dazugehörige Admin Tool

Willkommen im Repository der **Cottbus Verkehr**-Weblösung! Dieses Projekt umfasst die Entwicklung einer Webseite, eines Admin-Tools und der zugehörigen Backend-APIs. Ziel ist es, eine benutzerfreundliche und effiziente Lösung für den öffentlichen Verkehr in Cottbus bereitzustellen.

---

## 📋 Inhaltsverzeichnis
1. [Projektbeschreibung](#projektbeschreibung)
2. [Technologien](#technologien)
3. [Projektstruktur](#projektstruktur)
4. [Installationsanleitung](#installationsanleitung)
5. [Deployment](#deployment)
6. [Mitwirken](#mitwirken)
7. [Lizenz](#lizenz)

---

## 📖 Projektbeschreibung

Dieses Projekt verfolgt folgende Ziele:

- **Webseite**: Eine nutzerfreundliche Plattform, auf der Fahrgäste Informationen zu Fahrplänen, Ticketpreisen und anderen Services finden können.
- **Admin-Tool**: Ein modernes Dashboard für die Verwaltung von Fahrplänen, Fahrzeugen und Benutzerdaten.
- **Backend-APIs**: Eine robuste API, die alle Datenoperationen für die Webseite und das Admin-Tool ermöglicht.

---

## 💻 Technologien

Das Projekt basiert auf modernen Web-Technologien, um höchste Performance, Skalierbarkeit und Sicherheit zu gewährleisten:

### Frontend:
- **React** mit **TypeScript**: Für die Entwicklung der Benutzeroberflächen.
- **Tailwind CSS**: Für ein responsives und modernes Design.

### Backend:
- **Node.js** mit **Express**: Als RESTful API-Server.
- **MongoDB**: Für die Speicherung von Daten.
- **Axios**: Für API-Aufrufe im Frontend.

### Deployment:
- **Netlify**: Für die Webseite.
- **Vercel**: für die Bereitstellung der Backend Api´s

---

## 🗂 Projektstruktur

```plaintext
Cottbus-Verkehr/
├── AdminP/           # Admin-Tool
├── db/               # Datenbank-Konfigurationen und Migrationen
├── gdfgg/            # Temporärer Ordner (kann ignoriert werden)
├── server/           # Backend APIs
├── .gitignore        # Git Ignore Regeln
├── package.json      # Projektabhängigkeiten
└── README.md         # Dokumentation

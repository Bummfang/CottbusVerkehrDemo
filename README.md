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
├── server/           # Backend APIs
├── .gitignore        # Git Ignore Regeln
└── README.md         # Dokumentation

```


# Dokumentation Frontend

# Home-Komponenten-Dokumentation

## Überblick:
Die `Home`-Komponente ist eine zentrale Steuerungskomponente, die zwischen drei Seiten umschalten kann: **Login**, **Registrierung** und **Datenbankzugriff**. Die Anzeige der Seiten wird durch den `pageSelector`-State gesteuert, der mithilfe des React-Hooks `useState` verwaltet wird.

- **Login-Seite** (Index `0`): Zeigt das Login-Formular an.  
- **Registrierungs-Seite** (Index `1`): Zeigt das Registrierungsformular an.  
- **Datenbankzugriff-Seite** (Index `2`): Ermöglicht administrative Eingriffe in die Datenbank.

Zusätzlich enthält die `Home`-Komponente einen Header und einen Footer:  
- **Header**: Zeigt den Namen der Anwendung und ein Logo an.  
- **Footer**: Beinhaltet einen Statusindikator, der die aktuelle Seite visuell durch eine Farbänderung darstellt.  

---

## Wichtige Funktionen:

### 1. Dynamisches Seitenrendering:
Die angezeigte Seite ändert sich basierend auf dem `pageSelector`-Wert:
- `0`: Zeigt die Login-Komponente.  
- `1`: Zeigt die Registrierungs-Komponente.  
- `2`: Zeigt die Datenbankzugriffs-Komponente.

### 2. State-Management:
- Der State `pageSelector` steuert, welche Seite aktuell angezeigt wird.
- Funktionen wie `toRegistration`, `login` und `backToLogin` werden an Kindkomponenten weitergegeben, um den `pageSelector` zu aktualisieren.

### 3. Statusindikator:
Der Footer enthält einen visuellen Indikator, der sich farblich je nach aktueller Seite ändert:
- **Grün**: Aktuell ist die Login- oder Datenbankzugriffs-Seite aktiv.
- **Gelb**: Die Registrierungs-Seite ist aktiv.

### 4. Responsive Design:
Das Layout verwendet **Tailwind CSS**, um sicherzustellen, dass die Darstellung auf verschiedenen Geräten und Bildschirmgrößen optimiert ist.

---

# Login-Komponenten-Dokumentation

## Überblick:
Die Login-Komponente ist eine React-Funktion, die ein Formular für die Benutzeranmeldung bereitstellt. Sie enthält folgende Eingabefelder:
- Benutzername  
- Passwort  
- (Optional) Admin-Schlüssel  

Die Komponente unterstützt zwei Hauptfunktionen:
1. **Anmelden:** Übermittelt die eingegebenen Daten an das Backend.
2. **Zur Registrierung wechseln:** Ermöglicht den Wechsel zur Registrierungsseite.

## Props:
- **`login`**: Funktion, die beim Absenden des Login-Formulars aufgerufen wird.  
- **`toRegistration`**: Funktion, die beim Klick auf die "Registrieren"-Schaltfläche ausgelöst wird.  

---

# Datenbankbeschreibung (SQLite3)

Die Datenbank ist in **SQLite3** implementiert und dient als zentrales Speichermedium für Benutzer-, Fahrplan- und Verwaltungsdaten. Sie ist so strukturiert, dass Änderungen durch das Admin-Tool sofort auf der öffentlichen Webseite sichtbar werden.

## Tabellen:
Speicherung der Daten als Tabellen.
```sql
CREATE TABLE IF NOT EXISTS lines(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL CHECK (type IN('Bus', 'Bahn')),
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS stops(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS plan_16(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    line_id INTEGER NOT NULL,
    stop_id INTEGER NOT NULL,
    stoptimes TEXT NOT NULL,
    FOREIGN KEY (line_id) REFERENCES lines(id),
    FOREIGN KEY (stop_id) REFERENCES stops(id)
);

CREATE TABLE IF NOT EXISTS employees(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    passwort TEXT NOT NULL,
    admin_key TEXT DEFAULT NULL
);

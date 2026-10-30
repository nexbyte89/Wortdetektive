# Die Wortdetektive

Rechtschreibtraining für Klasse 3 und 4 (Baden-Württemberg), als installierbare Web-App (PWA). Ohne Server, ohne Konten, ohne Tracking.

## Auf GitHub Pages veröffentlichen
1. Auf github.com ein neues Repository anlegen, zum Beispiel `wortdetektive` (öffentlich).
2. Den **Inhalt** dieses Ordners hochziehen (nicht den Ordner selbst): `index.html`, `sw.js`, `manifest.webmanifest`, `fonts/`, `icons/` und so weiter. Am einfachsten: „Add file → Upload files“.
3. Im Repository: **Settings → Pages → Build and deployment**: Source „Deploy from a branch“, Branch `main`, Ordner `/ (root)`, speichern.
4. Nach ein bis zwei Minuten ist die App erreichbar unter `https://DEIN-NAME.github.io/wortdetektive/`.
5. Neuen QR-Code mit dieser Adresse erzeugen.

## Vorher erledigen
- `impressum.html`: Name, Anschrift und E-Mail eintragen (Pflicht bei öffentlichen Seiten in Deutschland).
- Wortlisten von einer Lehrkraft prüfen lassen.

## Installieren auf Tablet oder Handy
- iPad/iPhone (Safari): Teilen → „Zum Home-Bildschirm“.
- Android (Chrome): Menü → „App installieren“.
Danach läuft die App auch ohne Internet.

## Aktualisieren
Geänderte Dateien hochladen und in `sw.js` die Zahl in `CACHE='wortdetektive-v5'` erhöhen, sonst zeigen Geräte noch die alte Version.

## Hinweis
Der Lernfortschritt liegt im Browser des Geräts und hängt an der Adresse. Bei einer neuen Adresse beginnt jedes Kind wieder bei null.

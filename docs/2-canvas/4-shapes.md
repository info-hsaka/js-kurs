# Andere Formen

Rechtecke sind ein guter Start, aber für die meisten Grafiken brauchen wir mehr: Kreise, Linien, Dreiecke und andere Formen. Dafür gibt es in Canvas das Konzept der **Pfade** (Paths).

## Was ist ein Pfad?

Ein Pfad ist wie eine Linie, die du mit einem Stift zeichnest, ohne ihn abzusetzen. Du kannst:
1. Den Stift an einen Startpunkt setzen
2. Linien und Kurven zeichnen
3. Am Ende entscheiden: Soll die Form ausgefüllt oder nur der Umriss gezeichnet werden?

## Die Grundstruktur eines Pfads

```javascript
ctx.beginPath();        // 1. Neuen Pfad starten
// ... Pfad zeichnen ...
ctx.fill();            // 3a. Pfad ausfüllen
// ODER
ctx.stroke();          // 3b. Pfad als Umriss zeichnen
```

**Wichtig:** 
- `beginPath()` startet immer einen neuen Pfad
- `fill()` füllt den Pfad aus
- `stroke()` zeichnet nur den Umriss

## Kreise zeichnen

Kreise zeichnet man mit `arc()`:

```javascript
ctx.arc(x, y, radius, startWinkel, endWinkel);
```

**Parameter:**
- `x`, `y`: Mittelpunkt des Kreises
- `radius`: Radius (Abstand vom Mittelpunkt zum Rand)
- `startWinkel`: Wo der Kreis beginnt (in Radiant)
- `endWinkel`: Wo der Kreis endet (in Radiant)

### Was sind Radianten?

Winkel werden in **Radiant** statt Grad angegeben:
- `0` = 0° (rechts)
- `Math.PI / 2` = 90° (unten)
- `Math.PI` = 180° (links)
- `2 * Math.PI` = 360° (voller Kreis)

<!-- <BILD: Ein Kreis mit eingezeichneten Winkeln: 0 (rechts), Math.PI/2 (unten), Math.PI (links), 3*Math.PI/2 (oben), 2*Math.PI (wieder rechts). Pfeile zeigen die Richtung im Uhrzeigersinn> -->

### Einen vollen Kreis zeichnen

```javascript
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fill();
```

Dies zeichnet einen ausgefüllten Kreis:
- Mittelpunkt bei (100, 100)
- Radius 50 Pixel
- Von 0 bis 2π (voller Kreis)

<!-- <BILD: Ein schwarzer ausgefüllter Kreis mit Mittelpunkt bei (100, 100) und eingezeichnetem Radius von 50px> -->

### Kreis mit Umriss

```javascript
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.stroke();
```

<!-- <BILD: Ein Kreis nur mit schwarzem Umriss (nicht ausgefüllt)> -->

### Kreis mit Füllung UND Rand

```javascript
ctx.fillStyle = "red";
ctx.strokeStyle = "green";
ctx.lineWidth = 10;

ctx.beginPath();
ctx.arc(300, 100, 50, 0, 2 * Math.PI);
ctx.fill();    // Erst füllen
ctx.stroke();  // Dann Rand zeichnen
```

<!-- <BILD: Ein Kreis mit roter Füllung und grünem Rand (10px breit)> -->

:::caution 
Die Reihenfolge von `fill()` und `stroke()` kann das Ergebnis beeinflussen!
:::
## Linien zeichnen

### Einfache Linie

```javascript
ctx.beginPath();
ctx.moveTo(50, 50);    // Startpunkt
ctx.lineTo(200, 150);  // Endpunkt
ctx.stroke();
```

- `moveTo(x, y)`: Setzt den "Stift" an eine Position (ohne zu zeichnen)
- `lineTo(x, y)`: Zieht eine Linie von der aktuellen Position zu (x, y)

<!-- <BILD: Eine diagonale Linie von (50, 50) zu (200, 150)> -->

### Mehrere verbundene Linien

```javascript
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 50);
ctx.lineTo(200, 200);
ctx.lineTo(50, 200);
ctx.stroke();
```

<!-- <BILD: Ein U-förmiger Linienzug> -->

### Geschlossene Form (Dreieck)

```javascript
ctx.beginPath();
ctx.moveTo(100, 50);   // Spitze oben
ctx.lineTo(50, 150);   // Ecke unten links
ctx.lineTo(150, 150);  // Ecke unten rechts
ctx.closePath();       // Zurück zum Start
ctx.fill();
```

- `closePath()` schließt den Pfad automatisch zum Startpunkt

<!-- <BILD: Ein ausgefülltes schwarzes Dreieck> -->

## Kreissegmente (Pac-Man)

Du kannst auch nur Teile eines Kreises zeichnen:

```javascript
ctx.beginPath();
ctx.arc(100, 100, 50, 0.2 * Math.PI, 1.8 * Math.PI);
ctx.lineTo(100, 100);  // Linie zum Mittelpunkt
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();
```

<!-- <BILD: Ein gelber Pac-Man (Kreis mit ausgeschnittenem Kuchenstück für den Mund)> -->

## Übung 1: Roter Kreis mit grünem Rand

**Aufgabe:** Male einen Kreis mit roter Füllung und grünem Rand:
- Radius: 50
- Mittelpunkt: (300, 100)
- Randbreite: 10

<details>
<summary>💡 Lösung anzeigen</summary>

```javascript
function draw(ctx) {
  ctx.fillStyle = "red";
  ctx.strokeStyle = "green";
  ctx.lineWidth = 10;
  
  ctx.beginPath();
  ctx.arc(300, 100, 50, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}
```

</details>

## Übung 2: Dreieck

**Aufgabe:** Zeichne ein ausgefülltes blaues Dreieck mit Ecken bei:
- (200, 50)
- (150, 150)
- (250, 150)

<details>
<summary>💡 Lösung anzeigen</summary>

```javascript
function draw(ctx) {
  ctx.fillStyle = "blue";
  
  ctx.beginPath();
  ctx.moveTo(200, 50);
  ctx.lineTo(150, 150);
  ctx.lineTo(250, 150);
  ctx.closePath();
  ctx.fill();
}
```

</details>

## Übung 3: Kreative Formen

**Aufgabe:** Kombiniere mehrere Formen! Zeichne zum Beispiel:
- Ein Haus (Rechteck + Dreieck als Dach)
- Eine Sonne (Kreis + Linien als Strahlen)
- Ein Gesicht (Kreise für Kopf und Augen, Linien für Mund)

Sei kreativ und experimentiere!

## Weitere nützliche Pfad-Funktionen

### Rechteck als Pfad

```javascript
ctx.beginPath();
ctx.rect(50, 50, 100, 100);  // Wie fillRect, aber als Pfad
ctx.stroke();
```

### Bogen (abgerundete Ecken)

```javascript
ctx.beginPath();
ctx.arcTo(x1, y1, x2, y2, radius);
```

Dies ist fortgeschrittener - für abgerundete Ecken und Kurven.

## Merke dir

💡 **Immer `beginPath()` für neue Formen!** Sonst werden alte und neue Pfade verbunden.

💡 **`fill()` für ausgefüllt, `stroke()` für Umriss** - oder beides!

💡 **Kreise brauchen Radiant:** Voller Kreis = `0` bis `2 * Math.PI`

💡 **`closePath()` schließt die Form** zurück zum Startpunkt.

---

Im nächsten Kapitel lernst du, wie du Text auf dein Canvas zeichnest!
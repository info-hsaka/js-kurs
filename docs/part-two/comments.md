---
sidebar_position: 1
---

# Comments

Langsam wird der Code den wir schreiben komplexer. Um auch längeren und komplizierteren Code lesbar und verständlich zu machen, gibt es sogenannte Comments (Kommentare). Ein Kommentar ist eine Codezeile, welche nichts tut - sie wird vom Computer ignoriert und dient nur dazu, Menschen das Lesen von Code zu vereinfachen.

Kommentare in Javascript fangen mit `//` an. Ein Beispiel:

```js
const month = 8

// Quartal als String
let quarter

if (month < 4) {
    // Januar bis März
    quarter = "Q1"
} else if (month < 7) {
    // April bis Juni
    quarter = "Q2"
} else if (month < 10) {
    // Juli bis September
    quarter = "Q3"
} else if (month < 13) {
    // Oktober bis Dezember
    quarter = "Q4"
} else {
    // Monate über 12 machen keinen Sinn...
    console.log("Das ist kein Monat...")
}

// Gib das Quartal aus, wird undefined ausgeben wenn der Monat auf > 12 gesetzt war
console.log(quarter)
```

dieser Code tut exakt das gleiche, wenn man alle Zeieln die mit `//` beginnen entfernt, aber er ist deutlich besser lesbar und erklärt.

## Kommentare in Beispielen

Wir werden ab jetzt Kommentare in Beispielen benutzen um Dinge zu erklären.

---
sidebar_position: 1
---

# Advanced Strings & Builtins

## Template Strings

Bisher haben wir Strings immer nur fest aufgeschrieben und ausgegeben. Häufig will man aber Strings dynamisch aus Daten zusammenbauen. Eventuell habt ihr das auch schon gedacht, wenn wir Sachen in der Konsole in mehreren Zeilen ausgegeben haben, die viel schöner auf einer Zeile als ganzer Satz gewesen wären.

Um Strings dynamisch zusammenzubauen, gibt es sogenannte Template Strings. Template Strings werden wie normale Strings geschrieben, mit zwei Änderungen:

-   Statt `""` werden sie mit `` geschrieben
-   Mitten in dem String können andere Werte eingesetzt werden, indem man sie mit `${}` umschließt

Ein Beispiel:

```js
const name = "Jane"
const goodMorning = `Guten Morgen ${name}, ich hoffe, du hast gut geschlafen`

console.log(goodMorning)
```

gibt

```
Guten Morgen Jane, ich hoffe, du hast gut geschlafen
```

aus.

Es können dabei beliebig viele `${}` vorkommen und in ihnen können beliebige Werte stehen:

```js
const name = "Mischa"
const birthYear = 1993
const currentYear = 2024

console.log(
    `${name} ist im Jahr ${birthYear} geboren und ist damit im Jahr ${currentYear} ${currentYear - birthYear} Jahre alt`,
)
```

gibt

```
Mischa ist im Jahr 1993 geboren und ist damit im Jahr 2024 31 Jahre alt,
```

aus.

Template Strings sind also eine Art, Strings zusammenbauen, indem man sie wie eine Art Lückentext schreibt und beliebige Werte in die Lücken einsetzt.

## Special Characters & Escaping

Es gibt ein paar besondere Zeichen, die ihr in eure Strings einbauen könnt:

-   `\n` für einen Zeilenumbruch
-   `\"` für ein `"`
-   `\\` für ein `\`

```js
console.log('Was ist grün und kreist um die Erde?\nEin "Salatelit".')
```

gibt

```
Was ist grün und kreist um die Erde?
Ein "Salatelit".
```

aus.

## Builtin String Methods

In Javascript gibt es eine ganze Menge sogenannter builtin Methods. Einee Method ist eine spezielle Art einer Funktion, die auf einem Wert liegt und auf diesen zugreift. Das klingt sehr abstrakt, heißt aber nur, dass man auf manchen Werten mit einem `.` getrennt auf bestimmte nützliche Dinge zugreifen kann:

```js
// Funktion die zurückgibt, ob beide übergebenen Heldennamen mit "Green" anfangen
function bothHeroesAreGreen(firstHero, secondHero) {
    const firstGreen = firstHero.startsWith("Green")
    const secondGreen = secondHero.startsWith("Green")

    return firstGreen & secondGreen
}

console.log(bothHeroesAreGreen("Green Lantern", "Green Hulk")
console.log(bothHeroesAreGreen("Thor", "Green Hulk")
```

gibt

```
true
false
```

aus.

### `.startsWith(string)` (returnt Boolean)

`.startsWith` ist eine builtin Methode auf Strings, welche einen anderen String annimmt und zurückgibt, ob der String auf dem man sie aufgerufen hat mit dem übergebenen String beginnt oder nicht.

```js
console.log("Black Widow".startsWith("Black"))
console.log("Spider Man".startsWith("Ven"))
```

gibt

```
true
false
```

aus.

### `.endsWith(string)` (returnt Boolean)

`.endsWith` ist das Gegenstück zu `startsWith`, nur, dass das Ende des Strings geprüft wird.

```js
console.log("Thor".endsWith("or"))
console.log("Starlord".endsWith("Star"))
```

gibt

```
true
false
```

### `.includes(string)` (returnt Boolean)

`.includes` prüft, ob der übergebene String irgendwo im String auf dem aufgerufen wurde enthalten ist.

```js
console.log("Loki".includes("ok"))
console.log("Groot".includes("or"))
```

gibt

```
true
false

```

aus.

### `.indexOf(string)` (returnt Number)

`.indexOf` sucht ähnlich wie `.includes` nach dem übergebenen String. Falls es ihn findet, gibt es zurück, beim wievielten Zeichen er gefunden wurde (die Zählung beginnt dabei mit `0`). Wenn er nicht gefunden wird, wird `-1` zurückgegeben.

```js
console.log("Black Panther".indexOf("ack"))
console.log("Jessica Jones".includes("Jess"))
console.log("Captain Marvel".includes("asdf"))
```

gibt

```
2
0
-1
```

aus.

### `.substring(number, number)` (returnt string)

`.substring` erwartet eine Startstelle und eine Endstelle. Es schneidet dann den angegebenen Ausschnitt aus dem String auf dem es aufgerufen wird aus und gibt den ausgeschnittetnen String zurück. Die Stellen werden dabei als Zahl angegeben, die Zählung startet mit 0.

```js
console.log("Iron Man".substring(0, 4))
console.log("Wolverine".substring(2, 7))
console.log("Captain America".substring(6, 10))
```

gibt

```
Iron
lveri
n Am
```

aus.

:::tip
Die Stellenangaben die `.substring` erwartet sind verhalten sich jeweils leicht anders - die Startangabe ist inklusiv, das heißt das Zeichen an der Stelle ist das erste Zeichen im ausgeschnittenen Wert. Das Zeichen an der Endangabe ist **nicht** das letzte Zeichen, sondern das erste, das fehlt.

In anderen Worten: `.substring(1, 4)` heißt `nimm die Zeichen von inklusive Stelle 1 bis exklusive Stelle 4` oder `nimm die Zeichen an Stelle 1, 2 und 3`
:::

## Builtin String Properties

Zusätzlich zu builtin Methods gibt es auch noch sogenannte builtin Properties. Diese funktionieren genauso, sind aber keine Funktionen sondern direkt feste Werte.

### `.length`

Auf Strings gibt es die `.length` Property, welche die Länge des Strings als Zahl enthält:

```js
console.log("Ant Man".length)
console.log("".length)
console.log("Hessische Schülerakademie".length)
```

gibt

```
7
0
15
```

aus.

## Builtin `console` Methods

Wir haben bisher häufig `console.log` benutzt. Jetzt wissen wir ein wenig mehr darüber, was das ist - `console` ist ein immer global vorhandener Wert der die Konsole repräsentiert, in der das Programm läuft. `console` hat mehrere builtin Methods, under andere. `.log`, welche wir für unsere Programme nutzen um Ausgaben zu erzeugen. Es gibt auch noch einige andere builtins auf `console`, welche aber für unseren Kurs erstmal noch nicht relevant sind.

## Übung

### Anrede kürzen

Schreibe eine Funktion `removeSalutation(name)` und exportiere sie. Sie soll aus einem vollen Namen die Anrede wegkürzen und das Ergebnis returnen. Das heißt, dass deine Funktion einen String bekommt und falls dieser mit "Hr. " oder "Fr. " anfängt, ssoll diese Anrede weggekürzt werden, so dass nur der Name selbst übrig bleibt. Falls nicht, soll der String unberührt returnt werden. Deine Funktion sollte sich so verhalten:

-   `"Fr. Black Widow"` wird zu `"Black Widow"`
-   `"Hr. Hulk"` wird zu `"Hulk"`
-   `"Thor"` wird zu `"Thor"`

### Entfernen von beliebigem String

Schreibe eine exportierte Funktion `removeString(subject, needle)`, welche zwei Strings erwartet. Sie soll im ersten übergebenen String alle Vorkommnisse des zweite übergebenen Strings entfernen und den resultierenden String zurückgeben. **Benutze dabei nur die auf dieser Seite beschriebenen builtins**. Deine Funktion sollte sich folgendermaßen verhalten:

-   `("FooBarFoo", "Foo")` wird zu `"Bar"`
-   `("Man darf auf der Akademie nicht Geschi sagen", "Geschi")` wird zu `"Man darf auf der Akademie nicht  sagen"`
-   `("Info ist der beste Kurs", "Mathe")` wird zu `"Info ist der beste Kurs"`

# Advanced Strings & Builtins

## Template Strings

Bisher haben wir Strings immer nur fest aufgeschrieben und ausgegeben. Häufig will man aber Strings dynamisch aus Daten zusammenbauen. Eventuell habt ihr das auch schon gedacht, wenn wir Sachen in der Konsole in mehreren Zeilen ausgegeben haben, die viel schöner auf einer Zeile als ganzer Satz gewesen wären.

Um Strings dynamisch zusammenzubauen, gibt es sogenannte Template Strings. Template Strings werden wie normale Strings geschrieben, mit zwei Änderungen:

-   `Statt "" werden sie mit` geschrieben``
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

`.startsWith` ist eine builtin Methode auf Strings, welche einen anderen String annimmt und zurückgibt, ob der String auf dem man sie aufgerufen hat mit dem übergebenen String beginnt oder nicht. Es gibt auch ein `.endsWith` Gegenstück das prüft, ob ob er damit endet. `.includes` prüft, ob der String irgendwo enthalten ist. Ein paar Beispiele:

```js
console.log("Thor".endsWith("or"))
console.log("Loki".includes("ok"))
console.log("Starlord".endsWith("lord"))
```

gibt

```
true
true
true
```

aus.

## Builtin String Properties

Zusätzlich zu builtin Methods gibt es auch noch sogenannte builtin Properties. Diese funktionieren genauso, sind aber keine Funktionen sondern direkt feste Werte. Auf Strings gibt es die `.length` Property, welche die Länge des Strings als Zahl enthält:

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

### String Methods

### Math Methods

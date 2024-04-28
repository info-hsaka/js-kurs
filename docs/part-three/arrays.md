---
sidebar_position: 2
---

# Arrays

Biser haben wir nur mit Werten von so genannten primitiven Datentypen (Strings, Numbers, Booleans) gearbeitet. Es gibt noch eine weitere Art Datentypen: composite Typen.

Der erste comsposite Datentyp den wir uns anschauen ist Array.

## Basics

Ein Array ist ein Wert, der eine beliebig lange Liste von Werten enthält. Ein Array wird mit eckigen `[]` Klammern mit den Werten die er enthält innerhalb der Klammern mit Kommas getrennt geschrieben:

```js
const fruits = ["Apfel", "Orange", "Banane"]
const ages = [22, 90, 18, 7, 45]
const heroes = ["Hulk", "Thor"]

console.log(fruits)
console.log(cities)
console.log(heroes)
```

gibt

```
['Apfel', 'Orange', 'Banane']
[22, 90, 18, 7, 45]
['Hulk', 'Thor']
```

aus.

Der Array selbst ist nur ein normaler Javascript Wert - wir können ihn in einer Variable speichern, ihn als Parameter an Funktionen übergeben, aus Funktionen returnen etc.

## Index Access

Um auf einen Wert innerhalb eines Arrays zuzugreifen, schreiben wir eine Zahl - den sogenannten Index - nach dem Array in eckige Klammern `[]` und erhalten so das Element im Array an der Stelle des Index. Arrays fangen im Gegensatz zu Menschen **nicht** bei 1 an wenn sie zählen sondern bei 0:

```js
const colors = ["Blau", "Grün", "Orange", "Violett"]

console.log(colors[2])
console.log(colors[0])
```

gibt

```
Orange
Blau
```

aus.

Wenn man auf einen Index zugreift, der außerhalb des Arrrays liegt, erhält man `undefined`:

```js
const years = [2018, 2024, 1993]

const firstYear = years[0]
const tenthYear = years[9]

console.log(firstYear)
console.log(tenthYear)
```

gibt.

```
2018
undefined
```

aus.

Mit einem Loop könnten wir zum Beispiel alle Strings in einem Array in der Konsole ausgeben:

```js
const drinks = ["Orangensaft", "Tee", "Kaffee"]
const drinksLength = 3

let index = 0

while (index < drinksLength) {
    const currentDrink = drinks[index]
    console.log(currentDrink)

    index = index + 1
}
```

gibt

```
Orangensaft
Tee
Kaffee
```

aus.

## Index Assignment

Die einzelnen Elemente eines Arrays können nicht nur gelesen, sondern auch geschrieben werden:

```js
let courses = ["Geschichte", "Germanistik", "Physik", "Mathematik"]

console.log(courses[1])

// Mit der selben Notation mit der auf ein Element zugegriffen wird, kann es mit = auch beschrieben werden
courses[1] = "Informatik"

console.log(courses[1])
```

gibt

```
Germanistik
Informatik
```

aus.

## Array Builtins

Arrays haben ähnlich wie Strings auch viele builtin Methoden und Properties. Einigee davon heißen und funktionieren sogar genauso wie bei Strings:

-   `.length` ist eine Property und enthält die Anzahl der Elemente des Arrays
-   `.includes` ist eine Funktion die einen beliebigen Wert erwartet und zurückgibt, ob dieser im Array enthalten ist
-   `.indexOf` ist eine Funktion die einen beliebigen Wert erwartet und zurückgibt, wo im Array dieser Wert (zuerst) vorkommt und `-1` falls dieser gar nicht vorkommt
-   `.slice` ist eine Funktion die zwei Zahlen (ein Start und ein Ende) erwartet und den entsprechenden Teil des Arrays als neuen Array zurückgibt (genau wie `.substring` auf Strings)

Arrays haben noch eine lange Liste weiterer builtin Methods. Ein paar davon wollen wir uns anschauen:

### `.pop` / `.shift`

`.pop` entfernt das letzte Element des Arrays. `.unshift` ist das Gegenstück, welches das erste Element des Arrays entfernt.

```js
const languages = ["Spanish", "Chinese", "Russian"]
languages.pop()
languages.unshift()

console.log(languages)
```

gibt

```
["Chinese"]
```

aus.

### `.push` / `.unshift`

`.push` erwartet einen beliebigen Wert und fügt ihn an das Ende des Arrays an. `.unshift` tut das gleiche, aber fügt den Wert an den Anfang des Arrays ein:

```js
const names = ["Leo"]

names.push("Ryu")
names.unshift("Neela")

console.log(names)
```

gibt

```
["Neela", "Leon", "Ryu"]
```

aus.

## Beliebige Werte

Arrays können beliebige Werte enthalten. Das bedeutet, dass Arrays auch andere Arrays enthalten können. Ein Tic-Tac-Toe Spielfeld könnte man zum Beispiel als Array mit drei Elementen von dem jedes wiederum selbst ein Array mit drei Elementen ist, welche die einzelnen Felder repräsentieren:

```js
const ticTacToe = [
    ["X", "O", ""],
    ["", "X", "O"],
    ["", "O", ""],
]

const middle = ticTacToe[1][1]

console.log(middle)
```

gibt

```
X
```

aus.

`ticTacToe[1][1]` sieht hier etwas magisch aus. Aber wenn wir uns Klammern vorstellen `(ticTacToe[1])[1]` ist klarer, was hier passiert - der erste Zugriff auf `ticTacToe[1] ` ist wieder ein Array (nämlich die zweiter Zeile des Spielfeldes), also können wir wieder auf ein Element zugreifen - in dem Fall wieder mit `[1]` auf das zweite (mittlere) Element.

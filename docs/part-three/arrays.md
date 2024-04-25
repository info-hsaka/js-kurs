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

## Kernpunkte

-   Was sind Arrays?
-   Was sind built-in methods?
-   Was für methods existieren?
-   Wo finde ich eine Übersicht für methods?
-   Wie loope ich über ein Array?

## Arrays

Array ist der letzte Datentyp von den acht.

Sie bieten uns ebenfalls die Möglichkeit eine Ansammlung von
Informationen in einem kodierten Format zu speichern.

Der wichtige Unterschied ist hierbei, dass Arrays eine feste
Reihenfolge der Werte mitspeichert.

Anders als in `Objects` sind gespeicherte Datenwerte in Arrays
nicht über `keys` aufrufbar, sondern über die ihre
gespeicherte 'Position'.

## Built-in methods

So wie wir `console.log`, `prompt` und andere `methods` bereits
benutzt haben. Existiert für Arrays eine ganze Reihe
von built-in `methods`.

D.h. diese `methods` sind in JavaScript miteingebaut und erleichtern
euch gängige Operationen zur Variablenmanipulation.

Wir werden hier über `pop, push, shift` und `unshift` reden - eine ausführlichere Liste findet [hier](./arrays.md#all-built-in-methods).

-   `push` fügt dem Array am Ende ein weitere Element hinzu (wie oben gesehen)

```js
let fruits = ["Apple", "Orange"]

fruits.push("Pear") // fügt "Pear" am Ende hinzu

console.log(fruits) // Apple, Orange, Pear
```

-   `unshift` fügt dem Array am Anfang ein weiteres Element hinzu, alle
    anderen Elemente rücken um eine Position nach hinten.

```js
let fruits = ["Orange", "Pear"]

fruits.push("Apple") // fügt "Apple" am Anfang hinzu

alert(fruits) // Apple, Orange, Pear
```

-   `shift` entfernt das 1. Element (Position 0) und lässt alle anderen
    Elemente eine Position aufrücken.

```js
let fruits = ["Apple", "Orange", "Pear"]

fruits.shift() // entfernt "Apple" am Anfang

console.log(fruits) // Orange, Pear
```

-   `pop` entfernt das letzte Element eines Arrays.

```js
let fruits = ["Apple", "Orange", "Pear"]

fruits.pop() // entfernt "Pear" am Ende

console.log(fruits) // Apple, Orange
```

:::danger Perfomance
Diese built-in methods sind unterschiedlich performant,
dies wird erst ein Thema wenn man mit sehr großen
Datensätzen arbeitet.

`Pop` und `push` sind schnell, weil sie nur Elemente
am Ende des Arrays verändern, das restliche Array (
alle Werte davor) wird nicht berührt.

`Shift` und `unshift` hingegen verändern ALLE
Elemente innerhalb des Arrays. D.h. je größer
das Array, desto mehr Elemente müssen um eine
Position nach vorne oder nach hinten verschoben werden.

![array-illustration](../../static/screenshots/pop-push.png)

:::

## All built-in methods

:::tip Liste aller built-in array methods
Eine Liste aller built-in array methods findet ihr [hier in der seitenleiste](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat),
ebenfalls
[hier](https://www.w3schools.com/js/js_array_methods.asp) und
die wichtigstens mit Beispielen nochmal [hier](https://javascript.info/array-methods) .
:::

## Loops with Arrays

Um über die Elemente eines Arrays zu loopen,
gibt es die Möglichkeit einen `for` zu nutzen
oder die `forEach` method.

Dies geht mit dem bereits bekannten syntax von dem
Kapitel zu [loops](../part-two/loops.mdx#for-loop)

```js
let arr = ["Apple", "Orange", "Pear"]

for (let i = 0; i < arr.length; i++) {
    // da sich i mit jeder iteration erhöht,
    // können wir den Wert nutzen um dynamisch
    //über die Werte des Arrays zu iterieren.
    console.log(arr[i])
    //1. iteration - 'Apple'
    //2. iteration - 'Orange'
    //3. iteration - 'Pear'
}
```

Für Arrays gibt es jedoch eine Vereinfachung:

```js
let fruits = ["Apple", "Orange", "Plum"]

//fruit ist hier nur ein placeholder wort
for (fruit of fruits) {
    console.log(fruit)
    //1. iteration - 'Apple'
    //2. iteration - 'Orange'
    //3. iteration - 'Pear'
}
```

Da wir aber nicht jedes Mal einen `for loop` schreiben
möchten enthählt JS mehere loop methods.
Eine davon ist `forEach`:

```js
let fruits = ["Apple", "Orange", "Plum"]

//fruit ist hier wieder ein placeholder Wort
fruits.forEach((fruit) => console.log(fruit))
//1. iteration - 'Apple'
//2. iteration - 'Orange'
//3. iteration - 'Pear'
```

`=>` ist eine `Arrow function`, über die wir im [nächsten Kapitel](./special%20functions.md/#arrow-functions) mehr erfahren werden.

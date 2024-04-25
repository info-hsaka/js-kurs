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

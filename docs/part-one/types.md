---
sidebar_position: 3
---

# Types

## Kernpunkte

- Welche Datentypen gibt es?
- Was sind strings?
- Was sind numbers?
- Was sind booleans?
- Was ist `null` & `undefined`?

## Allgemein

Es gibt acht verschiedene Datentypen in JS. Diese werden unterschieden in sechs
primitive Typen und zwei composite Typen. Wir betrachten zunächst die
[primitive values](https://developer.mozilla.org/de/docs/Glossary/Primitive).

## `number`

In JS umfasst der `number` Typ alle Arten von Zahlen - also sowohl sog. Integer (ganze Zahlen) als auch sog. Floats (rationale Zahlen).

Ihr könnt `number` Werte wie folgt ausdrücken:

```js
const hoursPerYear = 8760; //Integer
const zeroKelvin = -273.15; //Floating point
```

Neben den regulären Zahlen gibt es noch drei besondere Zahlenwerte: `Infinity`, `-Infinity` und `NaN`.

`NaN` steht für 'Not a Number' und entsteht aufgrund von fehlerhaften Rechnungen, z.B.:

```js
console.log("Hallo" / 2); //NaN, ein Wort ist nicht durch 2 teilbar
```

## `string`s

Strings sind eine Folge von Zeichen, wie zB. ein Name oder ein Text. Strings werden ausgedrückt, indem ihre Zeichen mit Anführungszeichen umschlossen werden. Zum Beispiel:

```js
const name = "Haki";
const greeting = "Hello dear Human";
```

Es gibt drei verschiedene Formen von Anführungszeichen:

1.  Doulbe quotes "Hello".
2.  Single quotes 'Hello'.
3.  Backticks \`Hello\`.

Zwischen double und single quotes gibt es keinen Unterschied. Quotes müssen mit den gleichen
Anführungszeichen geschlossen werden, mit den sie geöffnet worden. z.B. "hello" -> 'Hello" geht nicht.

Backticks haben eine erweiterte Funktionalität. Sie erlauben uns sogenannte [template strings](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Template_literals) zu erzeugen, in die direkt Werte (z.b. aus Variablen) eingesetzt werden. Der Syntax dafür sieht so aus:

```js
const name = "Haki"; //variable wird deklariert und erhält den string "Haki" (assigned)

// In Backticks kann innerhalb der speziellen Zeichenfolge '${}' ein Wert inkludiert werden
console.log(`Hallo ${name}`);
// console.log gibt den string innerhalb der klammern in der console aus - dabei wird der Inhalt der Variable verwendet
// --> "Hello Haki"
```

## `boolean`

Es gibt genau zwei Werte vom Typ `boolean`: `true`(wahr) und `false`(falsch)

Ein `boolean` Wert gibt also an, ob etwas stimmt oder nicht. In Part 2 werden wir näher auf ihre Verwendung eingehen.

```js
const itRains = true;
const sunIsShining = false;
```

## `null` & `undefined`

`null` ist ein spezieller Wert, da er 'nichts', 'leer' oder 'wert ungewiss' bedeuten soll.
In der Regel wird dieser Wert verwendet um einen Variablenwert explizit auf 'leer' zu setzen.

`undefined` hingegen ist der default value einer Variable, die deklariert wird, der aber noch kein Wert zugewissen wurde.

```js
let age;
console.log(age); //shows 'undefined'
```

`undefined` verdeutlicht, dass der Variable bisher kein Wert zugewissen wurde. Während `null` benutzt werden kann um zu zeigen, dass die Variable bewusst 'leer' gelassen wird.

Die parallele Existenz von `null` und `undefined` ist etwas verwirrend - wichtig ist nur sich zu merken, dass beides bedeutet, dass der Wert "leer" ist.

:::tip typeof
Der typeof operator findet den Typ des einer Variable heraus, die ihm übergeben wird. Dies kann hilfreich sein, um Datentypen zu überprüfen.

```js
const secondsInAMinute = 60;

console.log(typeof secondsInAMinute); // "number"
console.log(typeof 0); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof "foo"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
```
:::

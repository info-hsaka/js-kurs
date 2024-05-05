---
sidebar_position: 3
---

# Operators

Euch ist vielleicht aufgefallen, dass wir bisher nicht wirklich Daten verarbeitet haben. Wir haben nur feste Daten in unser Programm geschrieben und diese ausgegeben. Das ändern wir jetzt.

## Arithmentische Operatoren

Operatoren erlauben es, neue Werte aus anderen Werten zusammenzubauen. Das klingt sehr abstrakt und kompliziert - aber ihr benutzt sie alle jede Woche im Matheunterricht - zum Beispiel den `+` Operator, welcher zwei `number`s zu einer neuen `number` zusammenbaut, die die Summe der beiden ist:

```js
const answer = 30 + 12
```

`answer` ist jetzt eine Variable mit dem Wert 42.

```js
const cappucinoPrice = 4.5
const croissantPrice = 2
const totalPrice = cappucinoPrice + croissantPrice
```

`totalPrice` ist jetzt eine Variable mit dem Wert 6.5

Es gibt viele verschiedene Opratoren. Wir schauen uns zunächst den Rest der klassischen arithmetischen Operatoren an, die ihr bereits aus der Mathematik kennt:

-   `-` Subtraktion
-   `*` Multiplikation
-   `/` Division

Es gibt noch zwei weitere arithmetische Operatoren die ihr so geschrieben eventuell noch nicht kennt:

-   `%` "Modulo", um den Rest einer Divison zu erhalten
-   `**` um Potenzen zu bilden (`a ** b` ist `a` hoch `b`)

#### Beispiele

```js
console.log(4 + 2)
console.log(10 - 12)
console.log(5 * 7)
console.log(28 / 4)
console.log(43 % 10)
console.log(2 ** 3)
```

wird

```
6
-2
35
7
3
8
```

ausgeben.

Mit diesen Operatoren lässt sich ein Computer bereits wie ein Taschenrechner mit Zwischenspeicher benutzen. Zum Beispiel um festzustellen, wieviele Sekunden eigentlich eine Stunde oder ein Jahr hat:

```js
const secondsPerMinute = 60
const minutesPerHour = 60
const hoursPerDay = 24
const daysPerYear = 365

const secondsPerHour = secondsPerMinute * minutesPerHour
const secondsPerYear = secondsPerHour * hoursPerDay * daysPerYear

console.log(secondsPerHour)
console.log(secondsPerYear)
```

Gib diesen Code in euren Editor ein und führt in aus. Ihr solltet

```
3600
31536000
```

in der Konsole sehen - die Anzahl von Sekunden in einer Stunde und die Anzahl von Sekunden in einem Jahr.

## Vergleichsoperatoren

Es gibt neben arithmetischen Operatoren auch sog. Vergleichsoperatoren, welche aus zwei Werten einen `boolean`(Wahrheits-)Wert zusammenbauen. Ihr kennt sie wahrscheinlich auch bereits aus der Schule:

-   `>` überprüft ob die linke `number` **größer** als die rechte `number` ist
-   `>=` überprüft ob die linke `number` **größer oder gleich** als die rechte `number` ist
-   `<` überprüft ob die linke `number` **kleiner** als die rechte `number` ist
-   `<=` überprüft ob die linke `number` **kleiner oder gleich** als die rechte `number` ist
-   `==` überprüft ob zwei _beliebige_ Werte **gleich** sind
-   `!=` überprüft ob zwei _beliebige_ Werte **ungleich** sind

#### Beispiele

Das Programm

```js
console.log(5 > 2)
console.log(2 > 10)
console.log(4 >= 4)
console.log(29 >= 100)
console.log(1 < 2)
console.log(3 < 2)
console.log(2 <= 2)
console.log(5 <= 3)
console.log("asdf" == "asdf")
console.log("Blau" == "Grün")
console.log(8.2 != 8)
console.log(10 != 10)
```

wird

```
true
false
true
false
true
false
true
false
true
false
true
false
```

ausgeben.

## Übung

Mit diesen Operatoren können wir bereits einiges ausdrücken:

```js
const year = 2024
const isSchaltjahr = 2024 % 4 == 0
```

`isSchaltjahr` enthält nun den Wahrheitswer der angibt, ob das Jahr in der Variable `year` ein Schaltjahr ist. Wir haben in diesem Beispiel zum ersten mal Klammern benutzt - wie in der Mathematik klammern wir etwas ein um zu verdeutlichen, dass es zuerst "berechnet" werden soll.

Schreibe folgendes Programm:

1. Deklariere eine Variable `age` an, die dein Alter enthält
2. Deklariere eine Variable `isAdult` die enthält, ob du volljährig bist oder nicht - abhängig von deinem Alter. Benutz dabei einen der Operatoren von oben.
3. Deklariere eine Variable `ageInCenturies` die als Kommazahl angibt, wieviele Jahrhunderte du alt bist - abhängig von deinem Alter.
4. Gib alle drei Variablen in der Konsole aus.

---
sidebar_position: 3
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# Loops

Bisher sind unsere Programme geradlinig von oben nach unten durchgelaufen. Manchmal möchte man in einem Programm aber den selben Code häufig hintereinander ausführen. Dafür gibt es sogenannte Loops (Schleifen).

## `while` Loops

Mit einem `while` Loop können wir ein Stück Code ausführen wenn eine Bedingung gilt - genau wie mit einem `if`. Allerdings führt `while` den Code immer und immer wieder aus - solange, bis die Bedingung nicht mehr `true` ist. Ein Beispiel:

```js
let number = 1

while (number <= 100) {
    console.log(number)

    number = number + 1
}
```

dieses Programm gibt die Zahlen von 0 bis 100 aufsteigend in die Konsole aus.

:::caution Infinite Loops
`while` führt Code stumpf so lange aus, bis die Bedingung nicht mehr gilt.

Das bedeutet, dass `while` **nie aufhört** Code zu wiederholen, wenn der wiederholte Code nicht irgendwann dafür sorgt, dass die Bedingung `false` wird.

Wenn wir zum Beispiel in unserem Beispiel oben das `number = number + 1` vergessen hätten, hätten wir eine unendliche Schleife geschrieben:

```js
let number = 1

// Diese Schleife wird für immer immer wieder 1 in die Konsole schreiben
while (number <= 100) {
    console.log(number)
}
```

:::

Man liest allgemein

```js
while (A) {
    B
}
```

als "Solange A gilt, mach immer wieder B".

## `break` & `continue`

Im Bezug auf Loops gibt es zwei weitere nützliche Statements, welche innerhalb (also im Code zwischen den `{}`) von Loops benutzt werden können:

`break` bricht die komplette Schleife sofort ab - das heißt dass die aktuelle Wiederholung abgebrochen wird und danach auch keine weitere Wiederholung folgt. Der Code nach der Schleife wird regulär weiter ausgeführt:

```js
let number = 0

while (number < 100) {
    number = number + 1

    if (number > 3) {
        // break springt von hier...
        break
    }

    console.log(number)
}
// ...hierher

console.log("Fertig!")
```

Dieses Programm gibt

```
1
2
3
Fertig!
```

aus.

Das `continue` Statement ist ähnlich. Allerdings bricht es nur die aktuelle Schleifenwiederholung ab, nicht die gessamte Schleife. Es "springt" sozusagen direkt zur nächsten Schleifenwiederholung:

```js
let number = 1

while (number < 10) {
    number = number + 1

    console.log(number)

    // Falls number gerade ist, spring zum nächsten Durchlauf
    if (number % 2 == 0) {
        continue
    }

    console.log("ist ungerade")
}
```

Dieses Programm gibt

```
1
3
5
7
9
```

aus.

## Übung

### Collatz-Folge

In der Mathematik gibt es die sogenannte Collatz-Folge. Um sie zu bilden, startet man mit einer beliebigen positiven ganzen Zahl. Dann wiederholt man die folgenden Schritte immer wieder:

-   Wenn die Zahl gerade ist, wird sie halbiert
-   Wenn die Zahl ungerade ist, wird sie verdreifacht und dann 1 addiert

Wen man zum Beispiel mit der Zahl 5 anfängt ergibt sich:

5, 16, 8, 4, 2, 1, 4, 2, 1, 4, 2, 1,....

Sobald 1, 4 oder 2 erreicht sind, wiederholt sich die 4, 2, 1 Folge unendlich weiter.

Schreibe ein Programm, welches die Collatz-Folge angefangen mit der Zahl 123 ausgibt und aufhört, sobald die unendlich wiederholende 4, 2, 1 Folge erreicht ist.

:::info Lösungshinweis
Die größte Zahl die dein Programm auf dem Weg ausgeben sollte ist `628`
:::

:::note Trivia
Bis heute wird zwar vermutet, dass jede ganze positive Zahl irgendwann in der 4, 2, 1 Folge landet, bewiesen ist es aber noch nicht. Mit Computerprogrammen wie dem, das du gerade geschrieben hast, hat man allerdings schon sehr sehr viele Zahlen ausprobiert und noch kein Gegenbeispiel gefunden.
:::

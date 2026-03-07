---
sidebar_position: 2
---

# Types

Wir haben im letzten Abschnitt häufig das Wort "Wert" für den Inhalt einer Variable verwendet. Aber was kann so ein Wert denn sein?

Es gibt in Javascript verschiedene Arten von Werten - man nennt diese Arten auch Datentypen. Innerhalb dieser Datentypen gibt es zusätzlich die Unterscheidung zwischen primitiven Datntypen und composite Typen. Wir betrachten zunächst die verschiedenen primitiven Typen:

## Strings

Mit Strings haben wir bereits im letzten Abschnitt gearbeitet.

Strings sind eine Folge von Zeichen, wie zB. ein Name oder ein Text. Strings werden ausgedrückt, indem ihre Zeichen mit doppelten Anführungszeichen `"` umschlossen werden. Zum Beispiel:

```js
const name = "Haki"
const greeting = "Hello dear Human"
```

## Numbers

Ein weiterer möglicher Datentyp sind Zahlen. Diese werden in Javascript als normale Zahlenfolge ausgedrückt. Für Dezimalzahlen wird der Punkt (statt wie im Deutschen das Komma) als Trenner verwendet:

```js
const pi = 3.141
let currentYear = 2024
```

Nun haben wir eine Variable `pi` die die Zahl 3,141 enthält und ein Variable `currentYear` die die Zahl 2024 enthält.

## Booleans

Wahrheitswerte sind etwas komisch wenn man noch nicht programmiert hat. Man nennt Werte von diesem Typ `boolean`s und es gibt nur genau zwei Werte von diesem Typ:

-   `true`(wahr / "Ja")
-   `false`(falsch / "Nein")

Diese werden auch genauso geschrieben:

```js
const dogsAreFluffy = true
const pigsCanFly = false
```

Ein `boolean` Wert gibt also an, ob irgendetwas stimmt oder nicht. Das klingt erstmal nicht besonders nützlich, ist aber beim Programmieren häufig essentiell. Wir werden später noch sehen, warum.

## Leerwerte

Javascript hat zwei spezielle Werte die angeben, dass etwas leer ist bzw. gar keinen Wert hat: `null` und `undefined`. Die Unterschiede zwischen diesen beiden Werten sind für unseren Kontext egal. Falls ihr `null` oder `undefined` seht bedeutet das, dass der Wert leer ist.

Das können wir auch direkt ausprobieren. Führt folgenden Code über VSCode aus:

```js
let meainingOfExistence
console.log(meaningOfExistence)
```

Wir legen die `meaningOfExistence` Variable zwar an, aber weisen ihr keinen Wert zu. Wenn wir sie in der Konsole ausgeben, erhalten wir `undefined` - die Variable ist leer.

## Übung

Schreibt folgendes Programm in Javascript. Setze dabei jeden der unteren Schritte in einer eigenen Zeile um:

1.  Legt eine Variable `age` an, welche euer Alter in ganzen Jahren enthält
2.  Gib den Inhalt der `age` Variable in der Konsole aus
3.  Legt eine Variable `hasPet` an, welche enthält, ob ihr ein Haustier habt, oder nicht
4.  Gib den Inhalt der `hasPet` Variable in der Konsole aus
5.  Legt eine Variable `sibling` an
6.  **Falls** du Geschwister hast, befüll die Variable `sibling` mit dem Namen eines deiner Geschwister
7.  Gib den Inhalt der `sigbling` Variable in der Konsole aus

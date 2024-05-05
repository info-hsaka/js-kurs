---
sidebar_position: 1
---

# Variablen

Beim Programmieren sind Variablen eins der wichtigsten Kernelemente.

Eine Variable kann man sich vorstellen wie eine Box mit einem Namen drauf in die man etwas tun kann. Jede Box hat einen eigenen Namen, damit man sie auseinanderhalten kann und versteht, was darin ist. Variablen sind nützlich um alle möglichen Dinge abzulegen, um sie später wiederzuverwenden.

## Variable Declaration

Als erstes schauen wir uns an, wie man eine neue Variable erstellt (man nennt das auch "deklarieren" / declare). Eine nue Variable anzulegen ist, um in unserem Sinnbild von oben zu bleiben, wie einen neuen Umzugskarton zusammenzubauen, mit Edding einen Namen auf die Außenseite zu schreiben und etwas hineinzutun.

In Javascript legt man eine Variable mit `let` an, gefolgt vom Namen der Variable, einem `=` und dem Inhalt der Variable:

```js
let message = "Hallo"
```

Diese Zeile deklariert eine neue Variable mit dem Namen `message` und befüllt sie mit `"Hallo"`

`"Hallo"` ist ein sogenannter String. Ein String ist einfach eine beliebige Anzahl an Zeichen. `"Asddf 1234"` ist genau so ein String wie `"A"` oder `",.-1231"`.

Dem Computer ist egal, was in diesen Strings steht - sie sind für ihn einfach irgendein Wert der aus Zeichen besteht. Die Anführungszeichen `""` markieren sozusagen, dass in ihnen keine Anweisungen, sondern ein Wert steht.

:::info Variablennamen
Die Namen von Variablen sind üblicherweise englisch, kleingeschrieben und verwenden `dieseKomischeSchreibweise` falls sie mehrere Worte lang sind.

Variablennamen sind einzigartig. Das heißt, dass ihr den selben Namen nicht zweimal mit `let` erstellen könnt - am Ende hättet ihr sonst zwei Boxen mit derselben Aufschrift und dann wüsste der cComputer im Zweifel nicht, welche ihr meint.
:::

## Assignments

Nun wissen wir, wie wir eine neue Variable deklarieren.

Wir können aber auch einer Variable, welche wir bereits deklariert haben, einen neuen Wert geben. Sozusagen die Box leeren und etwas neues hineintun.

Um eine Variable zu deklarieren schreiben wir ihren Namen gefolgt von einem `=` und dem neuen Wert - also genau wie bei der Deklaration nur ohne das `let`.

```js
let message = "Hallo"
message = "Guten Morgen"
```

Dieses Programm erstellt erst eine Variable mit dem Namen `message` und befüllt sie initial mit dem Wert `"Hallo"` (wie oben). Danach tauscht es den Inhalt der Variable durch `"Guten Morgen"` aus. Am Ende enthält die Variable also den Wert `"Guten Morgen"`

:::info
Ja das macht so nicht besonders viel Sinn, wir hätten ja direkt

```js
let message = "Guten Morgen"
```

schreiben können. Es geht erstmal nur darum, Zeile für Zeile das Prinzip zu verstehen.
:::

## Access

Jetzt wissen wir, wie wir Variablen deklarieren und ihren Wert ändern. Aber wofür machen wir das eigentlich?

Wir legen Werte in Variablen ab um sie später wiederzuverwenden. Um den Wert einer Variable irgendwo zu benutzen, schreiben wir einfach ihren Namen an die Stelle, wo ihr Wert stehen soll. Um das auszuprobieren, führen wir aber erstmal eine neue Anweisung ein:

```js
console.log("Ich schreibe Javascript")
```

`console.log()` erwartet einen String zwischen den `()` und gibt diesen dann in der Konsole aus. Dieses Programm gibt

```
Ich schreibe Javascript
```

in der Konsole aus.

:::info Info Konsole???

Die Programme die wir in diesem Kurs schreiben sind sehr simpel - sie geben haupstächlich Text in die Konsole eures Editors (VSCode) aus. Eine Konsole ist ein einfaches Interface, welches nur Text ausgeben und entgegennehmen kann.
:::

Jetzt benutzen wir statt einem direkten String stattdessen eine Variable, die einen String enthält:

```js
let foo = "Hello World"
console.log(foo)
```

dieses Programm gibt

```
Hello World
```

aus.

Hier haben wir den Inhalt einer Variable angegeben, statt den String direkt in `console.log` zu schreiben.

Den Inhalt einer Variable anzugeben nennt man auch die Variable "lesen" oder accessen.

### Assignment + Access

Nun da wir wissen wie wir einer Variable einen Wert zuweisen und wie wir auf Werte von Variablen zugreifen, können wir einer Variable den Wert einer anderen Variable zuweisen:

```js
let animal = "Cat"
let foo = animal

console.log(foo)
```

dieses Programm gibt

```
Cat
```

aus. Wir haben erst eine Variable `animal` angelegt und sie mit dem Wert `"Cat"` befüllt. Anschließend haben wri eine Variable mti dem Namen `foo` angelegt und sie mit dem Wert der Variable `animal` befüllt. `foo` enthält nun also ebenfalls `"Cat"`.

## Konstanten

Eine weitere Option zur Dekklaration von Variablen ist `const` statt `let`:

```js
const message = "Hallo"
```

`const` erstellt eine neue sogenannte konstante Variable. Im Unterschied zu `let` ist der Variablenwert
einer `const` Variable nicht mehr änderbar. Man nennt eine solche Variable auch Konstante (constant).

Der Versuch den Inhalt einer `const` Variable zu ändern führt zu einem Fehler.

## Übung

Zeit für deine erste Übung. Setze das folgende Programm in Javascript um. Schreibe dabei in deiner Datei eine eigene Zeile für jeden der folgenden Schritte und versuche nicht, das Programm kürzer zu machen. Es sollten genau drei Zeilen sein:

1. Erstelle eine konstante Variable `name` welche deinen Namen enthält
2. Erstelle eine leere Variable `awesomePerson` und befülle sie mit dem Wert der `name` Variable
3. Gib den Inhalt von `awesomePerson` in der Konsole aus

Tippe dazu Code in deine Datei, führe sie aus und wiederhole den Prozess solange, bis du die Aufgabe gelöst hast.

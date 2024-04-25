---
sidebar_position: 1
---

# Variablen

Bevor wir die erste Anweisung lernen, müssen wir mit einer sprachlichen Konsistenz brechen: Im Programmierkontext sind praktisch alle Begriffe englisch. Deutsche Versionen der meitsten Begriffe existieren, werden aber praktisch nicht benutzt und sind schwer zu googlen. Deswegen fangen wir ab jetzt an, die englischen Begriffe einzuführen und zu benutzen. Dabei kommt es unweigerlich zu Denglisch - das ist in dem Bereich völlig normal.

Anweisungen nennt man dementsprechend Statements - und wir lernen jetzt unser erstes Statement:

## Variable Declaration

Eine Variable kann man sich vorstellen wie eine Box mit einem Namen drauf. Jede Box hat einen eigenen Namen, damit man sie auseinanderhalten kann und wenn man über sie spricht weiß, um welche Box es geht. Variablen sind nützlich um alle möglichen Dinge irgendwo abzulegen, um sie später wiederzuverwenden. Außerdem hilft alleine das Verpacken in eine solche Box mit einem Namen bereits, um alles besser zu organisieren.

Beim Programmieren sind Variablen eine der wichtigsten Kernelemente. In Javascript legt man eine Variable mit `let` an (man sagt auch, man "deklariert" / declaret sie):

```js
let message
```

legt eine neue Variable mit dem Namen "messsage" an, welche noch leer ist, also in unserem Bild eine leere Box mit der Aufschrift "message".

Die Namen von Variablen sind üblicherweise englisch, kleingeschrieben und verwenden `dieseKomischeSchreibweise` falls sie mehrere Worte lang sind.

## Assignments

Um `message` mit einen Wert zu befüllen brauchen wir `=` (man nennt das auch einen Wert "zuweisen" bzw assignen):

```js
message = "Hallo"
```

befüllt die Variable `message` mit dem Wort "Hallo". `"Hallo"` ist ein sogenannter `string`, eine beliebige Zeichenkette die irgendwelchen Text enthalten kann.

Wir hätten _alternativ_ der `message` Variable auch bei Erstellung bereits einen Wert zuweisen können:

```js
let message = "Hallo"
```

`message` enthält nun das Wort "Hallo" und wir können auf diese Information später wieder zugreifen. Variablen können beliebige (auch kompliziertere) Werte enthalten - wir gehen später noch auf verschiedene Arten von Werten ein.

Der Inhalt einer mit `let` angelegten Variable kann später durch eine neuen Wert ausgetauscht werden:

```js
let foo = "Hi"
foo = "Welt"
```

Die Variable `foo` enthält nun den Wert "Welt". Wenn wir den Wert einer Variable ändern, wird der alte Wert verworfen.

:::danger Zweifache Deklaration
Variablennamen sind einzigartig, falls ihr eine neue Variable mit dem selben Namen deklarieren wollt, bekommt ihr einen Fehler.
:::

## Access

Unsere `message` Variable enthält immer noch das Wort "Hallo", auf welches wir zu einem späteren Zeitpunkt wieder zugreifen können. Man nennt den Zugriff auf den Wert einer Variable "access" und in schönem Denglisch sagt man dan "accessen". Wenn der Wert einer Variable accesst wird, bleibt ihr Wert trotzdem bestehen, man kann den selben Wert also beliebig oft aus ihr herauslesen.

Das testen wir einmal. Dazu brauchen wir die `console.log` Funktion. wir beschäftigen uns jetzt noch nicht damit, was das genau ist - aktuell akzeptieren wir einfach, dass man in Javascript mit

```js
console.log(message)
```

den Inhalt der `message` Variable in die Konsole ausgeben lassen kann.

:::info Info

### Konsole???

Die Programme die wir in diesem Kurs schreiben sind sehr simpel - sie geben haupstächlich Text in die Konsole eures Editors (VSCode) aus. Eine Konsole ist ein einfaches Interface, welches nur Text ausgeben und entgegennehmen kann.
:::

## Das erste mal Code ausführen

Schreibe folgenden Code in deinen Editor (VSCode):

```js
let message = "Hallo"
console.log(message)
```

Führe den Code anschließend mit einem Klick auf den Play Button oben rechts aus. Es sollte sich eine Konsole öffnen welche "Hallo" anzeigt.

Glückwunsch! Du hast deinen ersten Code geschrieben und ausgeführt.

Spiel jetzt ruhig ein wenig mit den oben erklärten Codeschnipseln herum, ändere deinen Code und führe ihn immer wieder aus. Keine Angst, du kannst nichts kaputt machen.

### Assignment + Access

Nun da wir wissen wie wir einer Variable einen Wert zuweisen und wie wir auf Werte von Variablen zugreifen, können wir einer Variable den Wert einer anderen Variable zuweisen:

```js
foo = message
```

`foo` enthält nun "Hallo" - den Wert der Variable `message`. `message` enthält weiterhin ebenfalls "Hallo".

## Konstanten

Eine weitere Option zur Dekklaration von Variablen ist `const` statt `let`:

```js
const message = "Hallo"
```

`const` erstellt eine neue 'konstante' Variable. Im Unterschied zu `let` ist der Variablenwert
einer `const` Variable nicht mehr änderbar. Man nennt eine solche Variable auch Konstante (constant).

Der Versuch den Inhalt einer `const` Variable zu ändern führt zu einem Fehler:

```js
  const myBirthday: '18.04.2006'

  myBirthday = '01.01.2010' // error, can't reassign the constant!
```

:::caution `var`
Falls ihr irgendwo im Internet älteren Javascriptcode findet, wird dieser vielleicht `var` anstelle von `let` oder `const` verwenden. `var` ist veraltet und wird heute nicht mehr benutzt.

```js
var message = "Hallo"
```

:::

# Übung

Zeit für deine erste Übung. Setze das folgende Programm in Javascript um:

1. Erstelle eine konstante Variable `name` welche deinen Naen enthält
2. Erstelle eine leere Variable `awesomePerson`
3. Befülle die `awesomePerson` Variable mit dem Wert der `name` Variable
4. Gib den Inhalt von `awesomePerson` in der Konsole aus

Tippe dazu Code in deine Datei, führe sie aus und wiederhole den Prozess solange, bis du die Aufgabe gelöst hast.

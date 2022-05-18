---
sidebar_position: 1
---

# Deklaration

## Kernpunkte

- Wie führe ich Javascript Code aus?
- Wie deklariere ich eine variable?
  - `let`
  - `const`
  - `var`

## HTML

JavaScript kann in ein [HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) Dokument
mithilfe von eines `<script>`-Tags eingefügt werden.

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Before the script...</p>

    <script>
      console.log("Hello, world!");
    </script>

    <p>...After the script.</p>
  </body>
</html>
```

Output

```
    Before the script...

    ...After the script.
```

:::info Developer tools
Falls ihr keinen der genannten [Playgrounds](../intro#playgrounds) nutzen möchtet, könnt ihr JavaScript ebenfalls in eurem Browser ausführen.
Dazu müsst öffnet ihr die Developer Tools in eurem browser ([Anleitung für jeden browser hier](https://javascript.info/devtools)) und
könnt dort in der Konsole einzelne Javascript Befehle eingeben.

![open developer console example](../../static/screenshots/dev-console.jpg)
:::

:::info Console.log
[console.log()](https://developer.mozilla.org/de/docs/Web/API/console/log) gibt hier lediglich den wert in der Konsole aus.
Oft ist es eine einfache Möglichkeit um Werte zu überprüfen um Fehler im Code zu finden.
:::

## `let`

Variablen sind benannte Speicher, die mit beliebigen Werten befüllt werden können.
Um eine Variable zu erzeugen benutzen wir das `let` keyword.

```js
let message;
```

Um `message` einen Wert zuzuweisen nutzen wir den assigment operator `=`.

```js
let message;

message = "Hallo"; //Wir weisen message das Wort 'Hallo' zu.
```

`message` enthält nun das Wort 'Hallo' und wir können auf diese Information später wieder zugreifen - zum Beispiel um diese in der Konsole auszugeben.
Hierfür nutzen wir eine eingebaute Browserfunktion - [console.log()](https://www.w3schools.com/jsref/met_console_log.asp).

```js
let message;
message = "Hallo";

console.log(message); //console.log() gbit den wert von message aus
```

Wir können einer Variable bereits bei ihrer Erstellung einen Wert zuweisen.

```js
let message = "Hallo";
console.log(message); //Hallo
```

## Analogie

Zur Veranschaulichung: Variablen sind 'Behälter' für Daten, mit einer einzigartigen
Beschriftung.
In unserem Beispiel haben wir einen Karton mit dem Namen 'message' welcher den Wert 'Hallo' enthält.

![Karton mit dem Namen message, der "Hallo" beinhaltet](../../static//screenshots/assign-value.png)

Wir können beliebige Werte in den Karton tun und diese auch wieder austauschen:

```js
let message = "Hallo";
message = "Welt"; //Wert hat sich geändert
console.log(message);
```

Wenn wir den Wert einer Variable ändern, wird der alte Wert verworfen.

![Karton mit dem Namen message bekommt einen neuen Wert, der alte Wert wird verworfen](../../static/screenshots/swap-values.png)

Wir können ebenfalls Werte von Variablen an andere Variablen weitergeben:

```js
let hello = "Hallo Welt!";
let message;
message = hello;
console.log(hello); //Hallo Welt!
console.log(message); //Hallo Welt!
```

:::danger Zweifache Deklaration
Variablennamen sind einzigartig, falls ihr eine neue Variable mit dem selben Namen deklarieren wollt, bekommt ihr einen Fehler.

```js
let message = "Hallo";
let message = "Welt!"; //SyntaxError: 'message' has already been declared.
```

:::

## `const`

Eine weitere Option zur Erzeugung von Variablen ist das `const` keyword.

```js
const message = "Hallo";
```

`const` deklariert eine 'konstante' Variable. Im Unterschied zu `let` ist der Variablenwert
einer `const` Variable nicht mehr änderbar.

Wenn wir den Wert eine Variable nicht mehr verändern wollen dann verwenden wir `const`

Der Versuch den Inhalt einer `const` Variable zu ändern führt zu einem Fehler:

```js
  const myBirthday: '18.04.2006'

  myBirthday = '01.01.2010' // error, can't reassign the constant!
```

:::info var
In altem Javascript-Code wird oft das Keyword `var` anstelle von `let` oder `const` verwendet. Generell benutzt man `var` heute nicht mehr und findet das Keyword nur noch in altem Code, weswegen ihr es nur im Sinne der Vollständigkeit erwähnen.

```js
var message = "Hallo";
```
:::

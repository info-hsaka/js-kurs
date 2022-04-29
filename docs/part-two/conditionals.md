---
sidebar_position: 1
---

# Conditionals

## Kernpunkte

- Welche comparison operator gibt es?
- Was ist der Unterschied zwischen == und ===?
- Was sind "if" statements?
- Wie konvertiert man booleans?
- Was ist "else"?
- Wie funktioniert '?' als operator?

## Comparison operators

Ebenfalls an die Mathematik angelehnt gibt es in JS noch Vergleichsoperatoren.

- Größer/Weniger als: `a > b`, `a < b`.
- Größer/Weniger als oder gleich: `a >= b`, `a <= b`.
- Ist ungleich (in Mathe ≠): `a != b`.
- Ist gleich: `a == b`.

:::caution == ist nicht =
`=` ist ein Wertassigment für Variablen und daher zu unterscheiden von dem Vergliechsoperator `==`.
:::

Als Ergebnis dieser Vergleichsoperatoren wird uns ein `boolean` Wert zurückgegeben(`returned`).

- `true` - 'wahr', 'trifft zu'
- `false` - 'falsch', 'trifft nicht zu'

```js
console.log(2 > 1); //true
console.log(2 == 1); //false
console.log(2 != 1); //true

let result = 5 > 4; //kann auch bei assignment benutzt werden
console.log(result); //true
```

:::danger String comparison
Es ist möglich Vergleichsoperatoren mit strings zu nutzen, jedoch ist diese Methode nicht zuverlässig. Der Grund hierfür ist, dass JavaScript die [unicode](https://en.wikipedia.org/wiki/List_of_Unicode_characters) Positionen der einzelnen Buchstaben vergleicht und daran die Unterscheidung trifft welches Wort 'später' kommt.

```js
console.log("Z" > "A"); //true
console.log("Glow" > "Glee"); //true
console.log("Bee" > "Be"); //true

//negativ beispiel
console.log("apple" > "Ammbulance"); //true
// In der Unicode Tabelle werden Kleinbuchstaben nach Großbuchstaben geführt,
// weshalb 'apple' in diesem Fall 'nach' 'Asmbulance' kommt

console.log("$" > "€"); // false
// Das '€' Symbol wird in der unicode Tabelle vor dem '$' geführt.

//Spätestens mit anderen Schriftzeichen(Japanisch hier) ist es schwer nachzuvollziehen
console.log("ちゅうい" > "きけん"); //false
```

Generell wird davon abgeraten string comparison zu nutzen, da sie
nicht intuitiv ist und nicht immer die gewünschten Ergebnisse liefert, besonders wenn Sonderzeichen, Währungszeichen, Akzente oder andere Schriftzeichen hinzu kommen.

:::

## Strict equality

Da JS Operatoren datentypen konvertieren, um die Operation trotzdem ausführen zu können,
kann es schnell zu Missverständnissen kommen.

```js
console.log("1" == 1); //true
console.log(1 == true); //true
console.log(0 == false); //true

console.log("" == false); //true
//"" wird zu '0' konvertiert und 0 == false ergibt true
```

Um solchen Fehlern vorzubeugen gibt es den 'strict equality operator' `===`.
Der operator vergleicht Werte miteinander ohne sie zu konvertieren und gibt `true` oder `false` als Ergebnis zurück.

```js
console.log("1" === 1); //false
console.log(1 === true); //false
console.log(0 === false); //false
console.log("" === false); //false

//Für ungleich
console.log("1" !== 1); //true
console.log(1 !== 1); //false
console.log("a" !== "b"); //true
```

:::tip Best practice
Generell ist es best practice immer `===` zu verwenden.

Es verhindert ungewollte datentyp Konvertierungen und bietet euch Sicherheit in dem zuerwartendem Ergebnis.
:::

## If statement

Ab und an möchten wir die Ausführung von codezeilen an Bedingungen knüpfen - dies ist möglich mit conditionals.

Zuerst schauen wir uns den `if` operator an. Dieser evaluiert ob ein statement wahr oder falsch ist. `if (true)` ist vergleichbar mit: Wenn wahr, dann...

Wir nutzen hier die [prompt](https://www.w3schools.com/jsref/met_win_prompt.asp) methode,
um einen Benutzerinput zu erfragen und dieser Benutzerinput wird in der Variable `year` gespeichert.

```js
const year = prompt("Wann wurde JavaScript veröffentlicht?");

if (year === 1996) {
  alert("That's correct!");
}
```

## Boolean conversion

In Verbindung mit conditionals werden [Typkonvertierungen](https://javascript.info/type-conversions) besonders relevant.

Da `if` einen Wert erwartet, der entweder `true` oder `false` ist konvertiert es notfalls auch Werte, die keine `booleans` sind.

Das Ergebnis aus dieser Konvertierung nennt man in der Regel `truthy` oder `falsy` - also Werte, die an sich keine `booleans` sind, aber nach Typkonvertierung als `true` oder `false` interpretiert werden.

- Die Zahl `0`, ein leerer string (`""`), `null`, `undefined` und `NaN` werden alle zu `false`, sind also `falsy`.
- Alle anderen Werte werden zu `true` - also `truthy`.

Dies erlaubt uns folgenden code zu schreiben:

```js
    if (0) { // 0 is falsy
        ... //code hier wird niemals ausgeführt
    }

    if (1) { // 1 is truthy
        ... //code hier wird immer ausgeführt
    }
```

In Verbindung mit Variablen ist dies erweiterbar:

```js
    const year = 2022
    const condition = (year === 2022) //evaluates to true

    if (condition) { //true
        ...//execute code
    }
```

## Else if and else

Um mehrere Bedingungen in einem `if` statement zu handhaben gibt es noch zwei weitere keywords: `else if` und `else`.

`else if` erlaubt es uns beliebig viele weitere Bedingungen zu checken, **falls die vorherigen Bedingungen nicht zutraffen**, sonst werden diese Bedingungen nicht kontrolliert.

`else` ist optional und bietet uns die Möglichkeit code unabhängig von den vorherigen conditionals auszuführen und befindet sich am ende eines if statements.

```js
let year = prompt(
  "In which year was the ECMAScript-2015 specification published?"
);

if (year < 2015) {
  alert("Too early...");
} else if (year > 2015) {
  alert("Too late");
} else {
  alert("Exactly!");
}

//Wir checken ob die erste If Bedingung stimmt (year < 2015), wenn die falsch ist gehen wir zur nächsten condition
//(year > 2015).
```

:::caution if statements checken alle möglichen statements
Während `else if` statements nur solange gechecked werden, bis ein statement zutrifft und der code darin ausgeführt wird.
Werden `if` statements immer kontrolliert, z.b.

```js
const year = 2022;

if (!year) {
  //false
} else if (year === 2022) {
  //true
  //code wird ausgeführt...
} else if (year === 2000) {
  // dieses statement wird nicht mehr gechecked, weil das vorherige true war
}

if (year === 2022) {
  //true
  //code wird ausgeführt...
}
if (year) {
  //true
  //code wird ausgeführt...
}
if (typeof year === "number") {
  //true
  //code wird ausgeführt...
}
//hier werden alle drei if statements gechecked, da kein else oder else if den check beenden.
```

:::

## Conditional operator '?'

Manchmal wollen wir den Wert einer Variable abhängig von anderen Variablen machen.
Um dies umzusetzen gibt es den `?` (ternary) operator.

Dieser Operator bekommt drei Argumente:

```js
let result = condition ? value1 : value2;
```

Zuerst eine condition, die `truthy` oder `falsy` ist und zwei weitere Argumente.
Falls die condition `truthy` ist wird `value1` zurückgegeben und falls sie `falsy` ist wird `value2` zurückgegeben.

```js
const isMember = false;
const entranceFee = isMember ? "5$" : "10$";
```

## Logical operators - ||(OR)

Es gibt vier logische Operatoren in JS: `||`(oder), `&&`(und), `!`(nicht), `??`(nullish coalescing).

`||` konvertiert Werte in `truthy` oder `falsy` und nimmt den ersten Wert der er `truthy` ist, falls
es keinen `truthy` Wert wird der letzte Wert aus der Operation genommen.

```js
console.log(true || false); //true
console.log(false || true); //true
console.log("" || 5); //5
console.log("" || undefined || ""); //""
console.log(null || undefined || "" || undefined); //undefined

const hoursNeeded = 9;

if (hour < 10 || hour > 18) {
  //true
  //code wird ausgeführt
}
```

OR `||` evaluiert die Werte von links nach rechts und stoppt beim dem ersten Wert der `truthy` ist und gibt diesen
zurück.

Die anderen Werte werden nicht weiter ausgewertet, dies nennt man [short-circuit evaluation](https://en.wikipedia.org/wiki/Short-circuit_evaluation).

Falls keiner der Werte `truthy` ist gibt OR den letzten `falsy` Wert zurück.

## &&(AND)

`&&` funktioniert umgekehrt wie `||`. Es geht die Argumente von links nach rechts solange durch bis es den ersten `falsy`
Wert findet und returned dann diesen Wert.

Falls kein `falsy` Wert gefunden wird, returned es den letzten `truthy` Wert.

```js
let result = "hallo" && "welt" && "!"; // returns "!"
let message = "hallo" && "" && "Welt"; // returns ""
```

## !(NOT)

`!` konvertiert den Wert zu einem `boolean` (`truthy` oder `falsy`), invertiert diesen Wert (aus `true` wird `false`, aus `false` wird `true`) und gibt diesen Wert type zurück als `boolean` zurück.

```js
let value; //undefined
let result = !value; //true

console.log(!"Hey"); //false
```

## Nullish coalescing operator '??'

Der `??` Operator checked, ob für eine Variable ein Wert definiert ist. Dies ist zu unterscheiden von `falsy` values,
nur `null` und `undefined` zählen als undefinierte Werte.

Der Wert von `let message = a ?? b` ist:

- Wenn `a` definiert ist `a`
- Wenn `a` nicht definiert ist `b`

```js
let user;
console.log(user ?? "Anonymous"); // Anonymous (user it undefined)

user = "Alyx";
console.log(user ?? "Anonymous"); // Alyx

let firstName;
let lastName;
let nickName = "Haki";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Haki
```

:::tip ?? or ||
`||` ist der ältere der beiden Operatoren und wird inzwischen wenig genutzt, da sich die meisten Szenarien
sich mit dem `??` abdecken lassen und dieser in der Regel weniger Fehleranfällig ist, z.B.

```js
let height = 0;

console.log(height || 100); //100
// 0 gilt als falsy

console.log(height ?? 100); //0
// 0 ist defined
```

Wir legen euch ebenfalls nahe, ebenfalls den `??` operator zu nutzen um Flüchtigskeitsfehler zu vermeiden.

Der entscheidene Unterschied zwischen den beiden Operatoren ist:

- `||` returned den ersten `truthy` value, sonst den letzten `falsy` value
- `??` returned den ersten _defined_ value, sonst den letzten `undefined` value

:::

## Expressions

Programme in eigentlich allen Programmiersprachen bestehen aus Statements (Anweisungen) und Expressions (Ausdrücken). Bisher haben wir bereits ein paar Statements kennengelernt:

```js
const age = 10;
```

```js
let earthIsFlat = false;
```

```js
console.log(age);
```

all das sind Statements, welche den Computer anweisen, etwas zu tun. Allerdings enthalten auch alle diese Statements Expressions. Das klingt verwirrend, aber wir haben das Konzept bereits benutzt. Eine Expression ist eine Art, einen Wert auszudrücken. Es gibt verschiedene Arten von Expressions:

### Literals

Eine sogenannte "Literal Expression" nennt man es, wenn man einen Wert selbst direkt in den Code schreibt

- `true` ist eine Expression mit dem Datentyp `boolean` und dem Wert `true`
- `42` ist eine Expression mit dem Datentyp `number` und dem Wert `42`

Das ist die einfachste Art einer Expression - ein direkter fester Wert. Man nennt diese Expressions auch "Literals".

## Variable Accesses

Eine Variable Expression ist eine Expression die auf den Wert einer Variable zugreift.

Angenommen wir haben die Variablen `age` und `earthIsFlat` von oben gegeben:

- `age` ist eine Expression vom Typ `number` mit dem Wert `17`
- `earthIsFlat` ist eine Expression vom Typ `boolean` mit dem Wert `false`

Den Namen einer Variable zu schreiben ist eine Variable Expression welche für den Wert in der Variable steht.

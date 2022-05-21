---
sidebar_position: 2
---

# Namensgebung

## Kernpunkte

- Welche Zeichen sind in Variablennamen zulässig?
- Was sind Best Practices?

## Allgemein

Es gibt zwei Einschränkungen für Namen von Variablen:

1. Der Name darf nur Buchstaben, Zahlen oder die Symbole `$` und `_` enthalten
2. Das erste Zeichen darf keine Zahl sein

Wenn der Variablenname sich aus mehreren Wörtern ergibt wird üblicherweise die sog. [camelCase](https://en.wikipedia.org/wiki/Camel_case)-Konvention benutzt, aus "Date of Birth" wird z.B. `dateOfBirth`.

Hervorzuheben hierbei ist ebenfalls, dass JavaScript [case sensitive](https://de.wikipedia.org/wiki/Case_sensitivity) ist, das bedeutet, dass Groß- und Kleinbuchstaben grundsätzlich unterschiedlich sind. Demnach sind `apple` und `ApplE` sind zwei unterschiedliche Variablennamen.

## Best Practices

Best Practices sind Grundsätze die nicht zwingend nötig sind, sich aber als durchweg nützlich erwiesen haben und üblicherweise eine Art gemeinsamen Standard darstellen.

Zum Thema Namensgebung gibt es viele Best Practices - dennoch ist Namensgebung ein viel diskutiertes Thema unter Entwicklern.

**Ein Variablenname sollte klar und offensichtlich beschreiben, welche Daten die Variable enthält**

Deutliche Namen machen es euch leichter, euch wieder im Projekt zurecht zu finden - besonders nach langen Pausen. Vor allem helft ihr damit jeder anderen Person, die euren Code zu lesen versucht (wichtiger Grundsatz: Code wird deutlich häufiger gelesen als geschrieben).

Einige Best Practices sind:

- Namen sind generell englisch
- Deskriptive Namen z.b. `userName` oder `shoppingCart`.
- Keine Abkürzungen z.b. `a, b, dx, eVaYt`.
- Keine allgemeinen Namen - `data` oder `value` haben keine besondere Aussagekraft über den enthaltenen Wert.
- Das selbe Wort für das selbe Konzept verwenden - wenn die eingeloggte Person in einer `currentUser`-Variable gespeichert ist, sollte die zuletzt eingeloggte Person nicht in einer `lastPerson`-Variable gespeichert werde, sondern in `lastUser`
- Variablen, die einen sog. boolschen Wert (`true` oder `false`) enthalten sollten beschreiben für welche Aussage sie anzeigen ob sie wahr oder falsch ist, z.b. `isLoading`, `hasBeenPayed`, `isSignedIn`

:::tip Wiederbenutzen oder neu deklarieren?
Anstatt Variablenwerte ständig zu ändern und im Kopf zu behalten, zu welchen Zeitpunkt sich welche Werte in der Variable befinden,
ist es generell gut eine neue Variable zu deklarieren wenn möglich.

Anstatt

```js
let price = 200
price = price * 1.19

console.log(price)
```

funktioniert genauso

```js
const netPrice = 200
const grossPrice = netPrice * 1.19

console.log(grossPrice)
```

Selbst wenn es sich nur um temporäre Werte handelt, können zusätzliche Variablen mit intuitiven Namen zur Klarheit beitragen
und sich besonders bei der Fehlersuche als hilfreich erweisen.

Ein guter Grundsatz ist, Variablen zunächst als `const` zu deklarieren und nur dann zu `let` zu ändern, wenn es wirklich nötig ist sie zu ändern, statt einfach mehr `const`s zu erstellen.
:::

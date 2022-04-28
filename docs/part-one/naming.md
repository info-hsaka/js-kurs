---
sidebar_position: 2
sidebar_label: Namensgebung
---

# Namensgebung

## Kernpunkte

- Welche Zeichen sind zulässig?
- Welche keywords sind reserviert?
- Was sind best practices?

## Allgemein

Es gibt zwei Einschränkungen bei dem benennen von Variablen:

1. Der Name darf nur Buchstaben, Zahlen oder die Symbole `$` und `_` enthalten.
2. Der erste Buchstabe darf keine Zahl sein.

Wenn der Variablenname sich aus mehreren Wörtern ergibt wird üblicherweise [camelCase](https://en.wikipedia.org/wiki/Camel_case) benutzt, z.B. `dateOfBirth`.

Hervorzuheben hierbei ist ebenfalls, dass JavaScript [case sensitive](https://de.wikipedia.org/wiki/Case_sensitivity) ist. `apple` und `ApplE` sind zwei unterschiedliche Variablennamen.

## Reservierte keywords

In JavaScript existieren reservierte keywords, beispielsweise `let, class, return` und `function`. Eine Liste dieser keywords findet ihr [hier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

## Best practices

Namensgebung ist ein viel diskutiertes Thema beim programmieren.

**Ein Variablenname sollte eine klare, offensichtliche Bedeutung haben welche daten er speichert.**

Intuitive Namen machen es euch leichter euch wieder im Projekt zurecht zufinden, besonders nach langen Pausen. Vor allem helft ihr damit jeder anderen Person, die euren code zu verstehen zu versucht, sei es ein team mitglied, freunde oder im [open source kontext](https://en.wikipedia.org/wiki/Open-source_software).

Grundsatzregeln sind:

- lesbare Namen z.b. `benutzerName` oder `einkaufsWagen`.
- Benutzt keine Abkürzungen z.b. `a, b, c`.
- Seid möglichst deskriptiv und präzise. Namen wie `daten` oder `wert` haben generell keinen Aussage wert und sollten nur verwendet werden, wenn es sehr klar ist welche informationen sie referenzieren.
- Einigt euch im Team oder selbst auf konseqünte Namensgebung, vermeidet zwischen Konzepten zu wechseln
  z.b `currentUser` vs `currentVisitor`.
- Variablen, die einen Wert mit `trü` oder `false` enthalten können sehr gut mit Verben dargestellt werden z.b.
  `isLoading`, `hasBeenPayed`, `isSignedIn`

:::tip Wiederbenutzen oder neu deklarieren?
Anstatt Variablenwerte ständig upzudaten und sich erinnern zu müssen welche Werte zu welchen Zeitpunkt sich in der Variable befinden,
es ist generell good partice extra variablen zu deklarieren.

Selbst wenn es sich nur um temporäre Werte handelt, können extra Variablen mit intuitiven Namen zur Klarheit beitragen
und besonders bei der Fehlersuche sich als hilfreich erweisen.

:::

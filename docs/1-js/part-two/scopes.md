---
sidebar_position: 4
---

# Scopes

In der Programmierung gibt es an sich nicht besonders viele verschiedene Konstrukte - mit Variablen, Conditionals, Operatoren und Loops haben wir bereits einen Großteil kennengelernt. Trotzdem lassen sich mit so wenigen Konstrukten beliebig komplexe Probleme lösen. Es gibt mehrere Mechanismen, die das ermöglichen. Einer davon sind Scopes.

## Lokale Variablen

Immer wenn man in Javascript eine geschwungene Klammer `{` aufmacht öffnet man gleichzeitig einen neuen Scope. Die nächste geschlossene geschwungene Klammer `}` schließt diesen Scope wieder.

```js
if (5 > 2) {
    // Ich bin in einem Scope
}

while (true) {
    // Ich bin auch in einem Scope (in einem anderen als oben)
}
```

Ein Scope ist ein Bereich des Codes, in dem neu angelegte Variablen leben. Das bedeutet, dass wenn innerhalb eines Scopes eine Variable angelegt wird, sie am Ende des Scopes wieder verworfen wird. Ein simples Beispiel:

```js
const a = 10

if (a > 8) {
    // b wird im lokalen if Scope angelegt und ist nur hier exitent
    const b = a + 5
    console.log(b)
    // b hört hier auf zu existieren
}

// console.log(b) würde hier einen Fehler erzeugen, da b hier nicht mehr existiert
```

Dasselbe gilt auch innerhalb von `else` oder `while` Blöcken - eben immer innerhalb von `{}`.

Das bedeutet, dass wir innerhalb von `{}` eigene kleine Variablen für Zwischenergebnisse und lokale Lösungswege anlegen können und klar markieren, dass diese nur lokal innerhalb dieses Scopes relevant sind und außerhalb davon nicht beachtet werden müssen (und auch nicht können).

## Es wird komplexer

Inwiefern erlauben Scopes es uns, komplexere Probleme mit simplen Konstrukten zu lösen? Mit einem Verständnis von Scopes können wir verschiedene Konstrukte (wie `while` und `if`) ineinander verschachteln und die dafür benötigten Variablen in möglichst "engen" (also möglichst kurz lebenden Scopes) anlegen um die Übersicht zu behalten. Ein Beispiel:

:::info Erinnerung Primzahlen
Das Programm unten findet alle Primzahlen bis zu einer Zahl `target` (für `target` = 6 sollten wir also 2, 3, 5 erhalten).

Zur Erinnerung: Eine Primzahl ist eine Zahl, die nur durch 1 und durch sich selbst teilbar ist. Um herauszufinden, ob eine beliebige ganze Zahl `n` prim ist reicht es, alle Zahlen unter `n` durchzuprobieren. Wenn eine davon ein Teiler von `n` ist, dann ist `n` keine Primzahl.

Diesen Ansatz setzen wir hier um.
:::

```js
const target = 20

// Aktueller Kandidat, der prim sein könnte
let maybePrim = 2

// Wir wollen alle Zahlen bis target prüfen
while (num <= target) {
    // Lokale Variable (innerhalb des Scopes) die speichert, ob der aktuelle Kandidat (num) prim ist. Wir fangen mit der Annahme an, dass er prim ist.
    let isPrim = true
    // Lokale Variable (innerhalb des Scopes), speichert den aktuellen Kandidat für einen Teiler für num
    let maybeTeiler = 2

    // Wir schauen uns alle Zahlen unter num an
    while (maybeTeiler < num) {
        // Prüfen, ob die Zahl ein Teiler von num ist
        if (num % maybeTeiler == 0) {
            // Falls ja, ist num nicht prim...
            isPrim = false
            // ...und wir können aufhören nach weiteren Teilern zu suchen
            break
        }

        // Schaue den nächsten möglichen Teiler an
        maybeTeiler = maybeTeiler + 1
    }

    // Falls die Zahl prim ist (also kein Teiler gefunden wurde) geben wir sie als Primzahl in der Konsole aus
    if (isPrim) {
        console.log("Primzahl:")
        console.log(num)
    }

    // Schaue die nächste mögliche Primzahl an
    num = num + 1

    // Hier ist der Scope zu Ende - isPrim und maybeTeiler werden weggeworfen und im nächsten while-Durchlauf neu angelegt
}
```

:::caution
Falls du nicht sofort verstehst, warum oder wie dieses Programm genau funktioniert, ist das nicht schlimm. Nimm dir Zeit, lies die Kommentare, kopiere es in deinen Editor und führe es aus. Wir verwenden hier zum ersten mal ineinander verschachtelte Loops, es kann einen Moment dauern, bis man sich diese vorstellen kann. Im Zweifel hilft es, den Code im Kopf oder auf einem Blatt Papier Zeile für Zeile "auszuführen" wie der Computer.
:::

Dieses Programm würde auch funktionieren, wenn `isPrim` und `maybeTeiler` außerhalb des `while`-Loops deklariert und im Loop immer neu beschrieben werden würden. Er wäre aber deutlich schwerer zu verstehen - denn diese beiden Variablen sind nur innerhalb der Schleife für die Suche nach Teilern relevant, sie "gehören" sozusagen zu der Schleife.

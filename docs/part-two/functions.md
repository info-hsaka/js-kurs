---
sidebar_position: 5
---

# Functions

Nach Scopes lernen wir nun das wahrscheinlich wichtigste Konstrukt in der Programmierung kennen: Functions (Funktionen). Funktionen sind der Mechanismus der es überhaupt erlaubt, große Softwareprojekte zu schreiben und dabei die Übersicht zu behalten.

Eine Funktion ist ein Stück Code mit einem Namen, welches wiederverwendet werden kann. Nehmen wir beispielsweise den folgenden Code:

```js
const animal = "Katze"

if (animal == "Katze") {
    console.log("Achtung!")
    console.log("Raubtier entdeckt")
} else if (animal == "Hund") {
    console.log("Achtung!")
    console.log("Raubtier entdeckt")
} else if (animal == "Wolf") {
    console.log("Achtung!")
    console.log("Raubtier entdeckt")
} else {
    console.log("Kein Raubier")
}
```

Der Code

```js
console.log("Achtung!")
console.log("Raubtier entdeckt")
```

wird hierbei mehrmals wiederholt. Wenn wir ändern wollen, was bei einem Raubtier ausgegeben wird, müssen wir alle drei Stellen von Hand anfassen. Das wird schlimmer, wenn wir mehr verschiedene Tiere einbauen.

Hierbei hilft eine Funktion. Eine Funktion gibt einem Stück Code zwischen zwei `{}` einen Namen und ermöglicht es, diesen Namen zu benutzen statt den Code erneut zu schreiben. Man nennt das auch die Funktion aufzurufen (zu callen):

```js
function warn() {
    console.log("Achtung!")
    console.log("Raubtier entdeckt")
}

const animal = "Katze"

if (animal == "Katze") {
    warn()
} else if (animal == "Hund") {
    warn()
} else if (animal == "Wolf") {
    warn()
} else {
    console.log("Kein Raubier")
}
```

Dieses Programm tut genau dasselbe wie oben - aber wir wiederholen uns weniger.

## Syntax

Eine Funktion anzulegen nennt man auch deklarieren - ähnlich wie bei Variablen. Man schreibt dabei `function <name>()` (mit dem Namen der Funktion statt `<name>`) gefolgt vom Code der Funktion in `{}` - man nennt diesen Code auch den Körper / body der Funktion.

Eine Funktion wird mit ihrem Namen gefolgt von `()` aufgerufen. Das Programm springt dann in die Funktion, führt ihren Körper aus und springt wieder zurück.

```js
function sayHello() {
    console.log("Hallo")
    console.log("Ich bin in einer Funktion")
}

sayHello()
sayHello()
sayHello()
```

gibt

```
Hallo
Ich bin in einer Funktion
Hallo
Ich bin in einer Funktion
Hallo
Ich bin in einer Funktion
```

aus.

## Parameter

In den Beispielen oben tun unsere Funktionen immer das gleiche wenn sie aufgerufen werden. Funktionen können allerdings auch so geschrieben werden, dass ihr Verhalten anpassbar ist. Dafür braucht es sogenannte Parameter / Argumente.

Ihr habt eventuell schon die runden Klammern `()` bemerkt, die sowohl bei der Deklaration als auch beim Aufruf einer Funktion benutzt werden. Diese Klammern enthalten die Parameter einer Funktion. Unsere bisherigen Funktionen hatten keine Parameter, deswegen waren diese Klammern sowohl bei der Deklaration als auch beim Aufruf leer. Das ändern wir jetzt mit diesem Beispiel:

```js
function sayIfAdult(age) {
    console.log(age)

    if (age < 18) {
        console.log("^ in diesem Alter ist man noch minderjährig")
    } else {
        console.log("^ in diesem Alter ist man bereits volljährig")
    }
}

sayIfAdult(12)
sayIfAdult(27)
sayIfAdult(48)
sayIfAdult(8)
sayIfAdult(18)
```

Dieses Programm gibt

```
12
^ in diesem Alter ist man noch minderjährig
27
^ in diesem Alter ist man bereits volljährig
48
^ in diesem Alter ist man bereits volljährig
8
^ in diesem Alter ist man noch minderjährig
18
^ in diesem Alter ist man bereits volljährig
```

aus.

### Syntax

Allgemein kann man bei der Deklaration (und dann auch dem Aufruf) einer Funktion beliebig viele Parameter angeben. Diese werden dabei in den runden Klammern `()` mit Kommas `,` getrennt aufgelistet:

```js
function saySum(x, y) {
    const sum = x + y

    console.log("x + y = ")
    console.log(sum)
}

saySum(10, 15)
saySum(2, 18)
saySum(499, 1)
```

gibt

```
x + y =
25
x + y =
20
x + y =
500
```

aus.

### Function Scope

Funktionen haben innerhalb ihres Körpers `{}` genauso wie `if` und `while` einen eigenen Scope. Das bedeutet, dass Variablen innerhalb einer Funktion nur lokal existieren und danach verworfen werden.

Dasselbe gilt auch für Parameter. Bei einem Funktionsaufruf springt das Programm in die Funktion und legt als erstes die Parameter als lokale Variablen an:

```js
function saySquare(number) {
    // number wird beim Funktionsaufruf gesetzt und verhält sich wie eine lokale Variable

    // squared ist eine lokale Variable
    const squared = number * number

    console.log("Das Quadrat dieser Zahl ist")
    console.log(squared)

    // number und squared hören hier auf zu existieren
}

saySquare(2)
saySquare(7)
```

gibt

```
Das Quadrat dieser Zahl ist
4
Das Quadrat dieser Zahl ist
49
```

aus.

## Return

Bisher geben unsere Funktionen immer irgendetwas in der Konsole aus. Aber was, wenn wir Code, der nichts in der Konsole ausgibt sondern zB. etwas berechnet in eine Funktion auslagern wollen, um uns in unserem Code nicht ständig zu wiederholen? Nehmen wir beispielsweise folgendes Programm an:

```js
const janeAge = 19
const daveAge = 17

const janeIsTeenager = janeAge >= 12 && janeAge < 20
const daveIsTeenager = daveAge >= 12 && daveAge < 20

if (janeIsTeenager && daveIsTeenager) {
    console.log("Jane und Dave sind beide Teenager")
}
```

Die Logik wie wir feststellen, ob jemand Teenager ist, wird hierbei zweimal wiederholt und ist auch etwas schwer lesbar. Auch hier können wir eine Funktion einsetzen, um die wiederholte Logik an eine Stelle zu bündeln. Dafür müssen wir allerdings `return`s einführen. Das Beispiel sieht danach so aus:

```js
function isTeenager(age) {
    const oldEnough = age > 12
    const youngEnough = age < 20

    return oldEnough && youngEnough
}

const janeAge = 19
const daveAge = 17

if (isTeenager(janeAge) && isTeenager(daveAge)) {
    console.log("Jane und Dave sind beide Teenager")
}
```

Hier sehen wir ein neues Statement: `return`. `return` kann nur innerhalb einer Funktion benutzt werden. Es bricht die Funktion dabei sofort ab und gibt den Wert nach `return` zurück ("returnt" den Wert). Aber was heißt das?

Wenn wir eine Funktion aufrufen ist der Aufruf selbst wieder ein Wert - nämlich der Wert, den die Funktion returnt. Wenn eine Funktion keinen Wert returnt, dann ist der Wert ihres Aufrufs `undefined`.

Eine Funktion ist also wiederverwendbarer Code, der beliebig viele Parameter zu einem `return` Wert umwandelt, ähnlich wie ein Operator.

Ein paar weitere Beispiele für Funktionen:

```js
function getStufe(schoolYear) {
    if (schoolYear <= 7) {
        return "Unterstufe"
    }

    if (schoolYear <= 10) {
        return "Mittelstufe"
    }

    return "Oberstufe"
}

console.log(getStufe(9))
console.log(getStufe(5))
console.log(getStufe(12))
```

gibt

```
Mittelstufe
Unterstufe
Oberstufe
```

aus.

```js
// Berechnet den Betrag einer Zahl
function absolute(number) {
    if (number < 0) {
        return number * -1
    }

    return number
}

console.log(absolute(-8))
console.log(absolute(23))
console.log(absolute(-42))
```

gibt

```
8
23
42
```

aus.

## Composition

Wie alle anderen Konstrukte, die wir bereits kennengeelernt haben, lassen sich auch Funktionen mit sich selbst verschachtelt kombinieren. Mit anderen Worten: auch innerhalb von Funktionen könnt ihr wieder Funktionen aufrufen. Damit lässt sich Code, welcher sehr lang oder tief geschachtelt und deswegen schwer verständlich ist in beliebig kleine "flache" Teile einteilen und damit übersichtlich machen. Als Beispiel hierfür nehmen wir noch einmal unser Primzahlenprogramm aus der Loops-Übung:

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

Dieses Programm funktioniert zwar, aber ist durch die Schachtelung schwer zu verstehen. Mit Funktionen lässt sich das leichter verständlich strukturieren:

```js
// Funktion die für eine Zahl (number) rausfindet, ob sie prim ist (returnt einen boolean, true = prim, false = nicht prim)
function isPrime(number) {
    let maybeTeiler = 2

    while (maybeTeiler < number) {
        if (number % maybeTeiler == 0) {
            // Wenn ein Teiler gefunen wird, ist die Zahl nicht prim und die Funktion kann sofort returnen
            return false
        }

        maybeTeiler = maybeTeiler + 1
    }

    return true
}

// Funktion die alle Primzahlen bis zu einer Zahl (target) in der Konsole ausgibt, returnt nichts
function findPrimesBelow(target) {
    let maybePrime = 2

    while (maybePrim <= target) {
        // Hier wird die isPrime Funktion von oben benutzt
        if (isPrime(maybePrime)) {
            console.log(num)
        }

        maybePrime = maybePrime + 1
    }
}

findPrimesBelow(20)
```

Diese Version der gleichen Lösung tut dasselbe, ist aber übersichtlicher und leichter verständlich.

## Black Boxes

Funktionen sind der Kernmechanismus, mit dem Entwickler:innen große Probleme so lösen, dass die Lösung hinterher noch übersichtlich und verständlich ist. Dazu nimmt man ein Problem und zerteilt es solange in kleinere Teilschritte / Teilprobleme, bis die Einzelteile klein genug sind, um sie jeweils in eine übersichtlich kleine Funktion mit verständlichem Namen zu lösen.

Dieser Ansatz funktioniert, weil Menschen nicht besonders gut darin sind, beliebig viel Kontext gleichzeitig im Kopf zu haben. Unsere erste Primzahlenlösung zu lesen und nachzuvollziehen war wahrscheinlich ziemlich anstrengend, denn um sie zu verstehen, muss man den Kontext mehrerer verschactelter `while` Loops und Variablen gleichzeitig im Kopf behalten. Durch das Aufteilen in mehrere Funktionen mit klaren Namen haben wir das Problem in kleinere deutlich abgegrenzte Teilprobleme unterteilt. Die resultierenden Funktionen passen jeweils einzeln beim Lesen gut in den menschlichen Kopf.

Wenn wir Code gut in Funktionen aufteilen entsteht der sogenannte Black Box Effekt. Black Box nennt man das Konzept, dass man eine Funktion benutzt, ohne im Kopf haben zu müssen, wie der Code der Funktion selbst aussieht. Man weiß nur, welches Teilproblem die Funktion löst und ggf. welche Parameter sie erwartet und welchen Wert sie returnt. Die Funktion ist von außen wie eine schwarze Box, in die man nicht hineinschaut, man weiß nur, was sie tut. Übertragen auf euer Alltagsleben benutzt ihr höchstwahrscheinlich eine Menge Black Boxes. Ihr wisst, wie ihr euren Taschenrechner bedienen müsst und welche Probleme er löst. Aber wie genau er funktioniert und wie er innen verdrahtet ist, wisst ihr höchstwahrscheinlich nicht. Das hält euch aber nicht davon ab, ihn sinnvoll benutzen zu können, um mit ihm andere Probleme zu lösen. Das Gleiche gilt zB. auch für euren Herd, euen Handylader, euren Fernseher usw.

Damit eine Funktion eine gute Black Box ist, braucht sie nicht nur eine gut abgesteckte Aufgabe, die sie erfüllt, sondern auch einen guten Namen (und gute Namen für die Parameter). Der Name einer Funktion und ihrer Parameter ist essentiell um beim "drüberlesen" von Code schnell zu verstehen, was sie tut, ohne den Körper der Funktion lesen zu müssen.

## `import` & `export`

Wir haben oben erklärt, dass große Softwareprojekte Code in viele kleine Funktionen aufteilen. Wir haben allerdings ausgelassen, wo diese ganzen Funktionen leben. Große Softwareprojekte haben hunderttausende von Zeilen - diese können natürlich nicht sinnvoll in einer einzigen Datei leben, sondern müssen auf viele, viele Dateien in einer verständlichen Ordnerstruktur verteilt werden.

Der Mechanismus, mit dem wir in Javascript Funktionen auf Dateien verteilen, ist `import` und `export`.

-   Mit `export` markiert man in einer Datei Funktionen, die von anderen Dateien benutzt werden sollen. Man sagt, sie werden "exportiert", sie können "von außen" benutzt werden.
-   Mit `import` "importiert" man Funktionen aus anderen Dateien um sie zu benutzen

Ein Beispiel:

```js title="foo.js"
// Hier exportieren wir die Funktion nach außen damit andere Dateien sie importieren können
export function sayHello() {
    console.log("hello")
}
```

```js title="bar.js"
// Hier holen wir uns die Funktion aus foo.js
import { sayHello } from "foo.js"

sayHello()
```

Warum sprechen wir jetzt darüber? Ab jetzt werden wir euch in den Übungsaufgaben auffordern, eine Funktion mit einem bestimmten Namen zu exportieren. Wenn ihr die Übung dann über den Play Button ausführt, testen wir eure Funktion automatisch mit ein paar Parametern aus und sagen euch, ob sie funktioniert, wie sie soll.

## Übung

Wir schauen uns jetzt eine etwas größere Aufgabe an um zu üben, Dinge in Funktionen zu unterteilen. Wir beziehen uns dabei auf vorherige Übungsaufgaben und bauen aus ihnen eine größere chaotische Aufgabe zusammen.

-   Schreibe eine Funktion `getMagicNumber(startYear, age)` und exportiere sie. Die Funktion erwartet ein Startjahr (Zahl) und das Alter einer Person in diesem Startjahr (Zahl) als Parameter. Sie soll folgendes tun:
-   Suche ab dem Startjahr nach dem nächsten Jahr, in dem sowohl die Fußbal EM als auch die Europawahl stattfindet
-   Stelle fest, wie alt die Person in diesem Jahr wäre Starte mit diesem Alter eine [Collatz Folge](loops#collatz-folge) und return die dritte Zahl dieser Folge (Beispiel: 24 als Start wird zu 24, 12, 6 - 6 ist die dritte Zahl)

-   Rufe diese Funktion dreimal mit folgenden Parametern auf:
    -   2024, 30
    -   2018, 18
    -   2035, 5

Versuche diese Aufgabe zunächst auf einem Zettel in Einzelteile zu zerteilen, welche du als Funktionen implementieren kannst. Überlege dabei immer, welche Zwischenergebnisse bereits vorhanden sein müssen um einen Teilschritt zu erledigen - das sind dann die Parameter der Funktion dieses Teilschritts.

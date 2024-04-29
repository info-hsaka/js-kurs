---
sidebar_position: 3
---

# Objects

Der letzte composite Datentyp den wir uns anschauen sind Objekte / Objects.

Bisher konnten wir in Variablen oder in Arrays immer nur einzelne Strings, Numbers oder Booleans benutzen. Manchmal möchte man aber mehrere solcher Werte als ein Paket behandeln. Stellt euch vor, ihr wollt Daten über eine Person in Variablen speichern: ihr Alter, ihren Namen und ihre Größe in cm. Bisher müssten wir das so tun:

```js
const age = 42
const name = "Lara Smith"
const height = 162
```

Wenn wir jetzt mehrere solcher Personen abspeichern wollen und zB. eine Funktion schreiben, die etwas mit so einer Person macht, braucht es viele Variablen und die Funktion mehrere Parameter:

```js
const laraAge = 42
const laraName = "Lara Smith"
const laraHeight = 162

const johnAge = 37
const johnName = "John Miller"
const johnHeight = 176

function logPerson(age, name, height) {
    console.log(`${name} ist ${age} Jahre alt und ${height}cm groß`)
}

logPerson(laraAge, laraName, laraHeight)
logPerson(johnAge, johnName, johnHeight)
```

Das wird schnell unübersichtlich. Man muss im Kopf behalten, dass die drei verschiedenen Variablen jeweils zusammengehören und in welcher Reihenfolge sie an die Funktion übergeben werden müssen.

## Syntax

Für solche Fälle, in denen mehrere Werte zusammengehören und eigentlich "eine Sache" sind, gibt es Objekte. Objekte erlauben es, beliebig viele Werte zu einem Wert zusammenzufassen:

```js
const person = {
    name: "Lara Smith",
    age: 42,
    height: 162,
}

console.log(person.name)
```

gibt

```
Lara
```

aus.

Ein Objekt besteht aus beliebig vielen sogenannten Felder / Fields. Ein Feld hat einen Namen und einen Wert (ein bisschen wie eine Variable). Man schreibt ein Objekt zwischen geschwungenen Klammern `{}` mit den Feldnamen jeweils vor einem Doppelpunkt und dem Wert des Feldes nach dem Doppelpunkt `<name>: <value>`. Felder werden mit Kommas `,` getrennt.

:::caution Geschwungene Klammern
Bisher haben geschwungene Klammern `{}` immer Codeblöcke markiert, die irgendwie ausgeführt werden sollen und einen lokalen Scope haben. Die geschwungenen Klammern um Objekte tun das nicht - sie beschreiben - ähnlich wie die eckigen Klammern `[]` um Arrays - nur einen Wert.
:::

Ein Objekt ist ein normaler Wert - das bedeutet, dass wir sie in Variablen abpseichern, an Funktionen übergeben oder in Arrays packen können. Den Code von oben könnten wir jetzt also folgendermaßen schreiben:

```js
const lara = {
    age: 42,
    name: "Lara Smith",
    height: 162,
}
const john = {
    age: 37,
    name: "John Miller",
    height: 176,
}

function logPerson(person) {
    console.log(
        `${person.name} ist ${person.age} Jahre alt und ${person.height}cm groß`,
    )
}

logPerson(lara)
logPerson(john)
```

Das liest sich deutlich übersichtlicher, da wir die Personen jeweils als einzelne Werte behandeln können. Die Feldnamen helfen zusätzlich unseren Code zu strukturieren.

## Mutation

Mit der `.` Notation lässt sich ein Feld eines Objekts auch auf einen neuen Wert setzen oder ein komplett neues Feld hinzufügen:

```js
let pet = { name: "Ryu", age: 2 }

pet.age = 17
pet.kind = "Hund"

console.log(`${pet.name} ist ein ${pet.kind} und ist ${pet.age} Jahre alt`)
```

gibt

```
Ryu ist ein Hund und ist 3 Jahre alt
```

Es ist auch möglich, ein Feld zu beschreiben, dessen Name zB. in einer Variable enthalten ist. Dafür wird dann die `[]` Notation benutzt - ähnlich wie bei Arrays, nur mit einem String statt einer Number innerhalb der `[]`:

```js
let person = { name: "Taylor Swift" }
const foo = "age"

person[foo] = 34
person["job"] = "Musikerin"

console.log(
    `${person["name"]} ist ${person.age} Jahre alt und eine professionelle ${person.job}`,
)
```

`person["job"]` ist äquivalent zu `person.job` - sowohl lesend als auch schreibend.

## Composition

Ähnlich wie bei Arrays, sind Objekte vor allem dann mächtig, wenn man sie mit anderen Konstrukten kombiniert. Denn auch die Felder von Objekten können beliebige Werte sein - zum Beispiel andere Objekte oder Arrays. Dadurch lassen sich große zusammengehörende Datenstrukturen in einem einzigen Wert zusammenfassen:

```js
const course = {
    teachers: [
        { name: "Hilmar", age: 30 },
        { name: "Bene", age: 29 },
        { name: "Hilmar", age: 28 },
        { name: "Toby", age: 24 },
    ],
    headTeachers: [
        { name: "Mischa", age: 30 },
        { name: "Leon", age: 30 },
    ],
    numberOfMembers: 11,
    topic: "Turn Based Game Development",
    isBestKurs: true,
    timespan: {
        from: "11.08.2024",
        to: "23.08.2024",
    },
}

console.log(
    `Der Kurs hat das Thema "${course.topic}", startet am ${course.timespan.from} und hat ${course.numberOfMembers} Schüler:innen.\nEr hat ${course.teachers.length} Betreuer und ${course.headTeachers.length} Kursleiter.`,
)
```

gibt

```
Der Kurs hat das Thema "Turn Based Game Development", startet am 11.08.2024 und hat 11 Schüler:innen.
Er hat 4 Betreuer und 2 Kursleiter.
```

aus.

Alle Apps und Seiten die ihr jeden Tag verwendet verpacken ihre Daten in große Objekte mit vielen Unterobjekten und Arrays, schicken diese Objekte durch die Gegend oder speichern sie. Objekte sind der Kernmechanismus um Daten zu strukturieren.

## Übung

Schreibe eine exportierte Funkion `analyzeGrades(report)`, welche einen Array aus Objekten, welche Schulfächer mit Noten auf einem Zeugnis repräsentiert, entgegennimmt und ein Objekt mit einer Zusammenfassung des Zeugnisses zurückgibt.

Nimm an, dass die Objekte im Array den die Funktion annimmt, folgendes Format haben:

```js
{
    // String der das Fach angibt
    subject: "Deutsch",
    // Zahl die die Note angibt (2.3 = 2- , 1.7 = 2+ , 2.0 = 2)
    grade: 2.3,
}
```

Gib ein Objekt im folgenden Format zurück:

```js
{
    // Durchschnittsnote aller Fächer
    averageGrade: 2.43,
    // Bestes Fach
    bestSubject: {
        subject: "Deutsch",
        grade: 1.7,
    },
}
```

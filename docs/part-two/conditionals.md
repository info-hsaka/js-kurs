---
sidebar_position: 2
---

# Conditionals

Ein Kernelement von allen Programmen, welches wir bisher noch nicht abgedeckt haben, sind Fallunterscheidungen.

Häufig möchte man in Code etwas nur tun, wenn eine bestimmte Bedingung gilt. Dafür gibt es `if` Statements:

## `if`

Mit `if` könne wir Code nur dann ausführenm wenn eine bestimmte Aussage wahr ist (erinnert ihr euch an die `boolean` Werte?).

Dafür schreiben wir nach dem `if` einen `boolean` Wert in runden `()` Klammern (man nennt ihn die "Bedingung" oder "condition") und danach in geschwungennen `{}` Klammern den Code, der ausgeführt werden soll, wenn die Bedingung wahr (`true`) ist.

```js
const myAge = 30

if (myAge > 19) {
    console.log("Ich bin kein Teenager mehr")
}

if (myAge > 29) {
    console.log("Ich bin auch kein Tweenager mehr")
}
```

Dieser Code wird

```
"Ich bin kein Teenager mehr"
"Ich bin auch kein Tweenager mehr"
```

in der Konsole ausgeben. Wenn wir allerdings die Zahl in der ersten Zeile zu `22` ändern und den Code erneut ausführen, wird nur noch

```
"Ich bin kein Teenager mehr"
```

ausgeggeben.

Man liest allgemein (das ist kein echter Code, er dient nur der Darstellung):

```js
if (A) {
    B
}
```

als "Wenn A gilt, dann mach B".

## Mehr `boolean` Operatoren

`if` Statements sind sehr wichtig - "echte" Programme müssen mit dynamischen Daten umgehen, welche von Nutzern eingegeben werden (das werden wir später auch noch tun). Dazu sind Fallunterscheidungen per `if` nötig. Um komplexere Bedingungen ausdrücken zu können, gibt es eine Reihe weiterer nützlicher Operatoren:

-   `&&` (gelesen "and" bzw "und") um aus zwei `boolean` Werten zusammenzubauen, ob sie **beide** `true` sind
-   `||` (gelesen "or" bzw "oder") um aus zwei `boolean` Werten zusammenzubauen, ob **mindestens einer** von ihnen `true` ist

```js
console.log(4 > 2 && "a" != "b")
console.log(1 != 1 && 4 >= 4)
console.log(3 < 1 || 10 == 10)
console.log(4 == 5 || 5 == 6)
```

gibt

```
true
false
true
false
```

aus.

Es gibt noch einen weiteren `boolean` Operator. Dieser ist ein wenig anders als alle anderen Operatoren bisher. Alle bisherigen Operatoren verbinden zwei Werte und bauen aus ihnen einen neuen Wert zusammen. Es gibt allerdings auch Operatoren, die aus nur einem Wert einen neuen Wert erzeugen:

-   `!` (gelesen "not" bzw "nicht") um **einen** `boolean` Wert "umzukehren" (man sagt auch negieren) - aus `true` wird dabei `false` und aus `false` wird `true`

```js
const age = 27
const isTeenager = age < 20

if (!isTeenager) {
    console.log("Kein Teenager mehr")
}
```

gibt

```
Kein Teenager mehr
```

aus, denn der Wert `!isTeenager` ist `true`, weil `isTeenager` `false` ist.

## `else`

Nach einemm `if` erlaubt Javsdcript optional ein `else` welches Code enthält, der ausgeführt werden soll, wenn die Beingung des `if`s `false` war. An einem Beispiel verdeutlicht sich das am einfachsten:

```js
const year = 2025
const isSchaltjahr = year % 4 == 0

if (isSchaltjahr) {
    console.log("Schaltjahr")
} else {
    console.log("Kein Schaltjahr")
}
```

Dieses Programm wird "Kein Schaltjahr" ausgeben. Wenn wir `year` zu `2024` ändern, wird "Schaltjahr" ausgegeben.

Man liest allgemein (das ist kein echter Code, er dient nur der Darstellung):

```js
if (A) {
    B
} else {
    C
}
```

als "Wenn A gilt, dann mach B, sonst mach C".

### `else if`

Es ist erlaubt, auf ein `else` direkt wieder ein `if` folgen zu lassen, statt `{}`. Dieses Konstrukt nennt man `else if`. Auch das ist am besten an einem Beispiel gezeigt:

```js
const age = 19

if (age < 17) {
    console.log("Darf gar kein Auto fahren")
} else if (age < 18) {
    console.log("Darf begleitet Auto fahren")
} else if (age < 21) {
    console.log("Darf alleine das eigene Auto fahren")
} else {
    console.log("Darf Mietwagen fahren")
}
```

```js
let year = prompt(
    "In which year was the ECMAScript-2015 specification published?",
)

if (year < 2015) {
    console.log("Too early...")
} else if (year > 2015) {
    console.log("Too late")
} else {
    console.log("Exactly!")
}

//Wir checken ob die erste If Bedingung stimmt (year < 2015), wenn die falsch ist gehen wir zur nächsten condition
//(year > 2015).
```

Man liest allgemein (das ist kein echter Code, er dient nur der Darstellung):

```js
if (A) {
    B
} else if (C) {
    D
} else {
    E
}
```

als "Wenn A gilt, dann mach B, sonst wenn C gilt mach D, sonst mach E".

## Übung

Wir fangen ab jetzt an, in den Übungen Stück für Stück weniger genau einzelne Schritte vorzugeben, sondern nur ein bestimmtes Ergebnis / Verhalten zu beschreiben, welches umzusetzen ist. Das Umsetzen von größeren Zielen in kleineren Programmierschritten ist die Kernfähigkeit, die wir entwickeln wollen. Es gibt generell für die meisten Probleme viele verschiedene legitime Lösungswege - probiert verschiedene aus!

Schreibe folgendes Programm:

1. Lege eine Variable `birthYear` an, die dein Geburtsjahr als Zahl enthält
2. Lege eine Variable `birthMonth` an, die deinen Geburtstmonat als Zahl enthält (1 = Januar, 12 = Dezember)
3. Lege eine Variable `birthDay` an, die den Tag innerhalb des Monats deines Geburtstags als Zahl enthält (zB `17` für den 17. Oktober)
4. Lege eine Variable `currentYear` an, die das aktuelle Jahr als Zahl enthält
5. Lege eine Variable `currentMonth` an, die den aktuellen Monat als Zahl enthält
6. Lege eine Variable `currentDat` an, die den aktuellen Tag innerhalb des aktuellen Monats als Zahl enthält

Dein Programm soll nun die folgenden Informationen ausgeben, dynamisch von den oben genannten Variablen abhängig. Das heißt, dass das Programm weiterhin korrekte Angaben machen würde, wenn man _nur_ die o.g. Variablen ändert:

-   Dein aktuelles Alter als ganze Zahl
-   In welchem Quartal du geboren bist (Q1 = Jan-Mär, Q2 = Apr-Jun, Q3 = Jul - Sep, Q4 = Okt - Dez)
-   Ob dieses Jahr sowohl die Fußball Europameisterschaft (seit 1960 alle 4 Jahre) **als auch** die Europawahl (seit 1979 alle 5 Jahre) stattfindet
-   Ob du heute Geschenke bekommst (wir definieren dafür, dass es an deinem Geburtstag und am 24. Dezember Geschenke gibt)

:::tip
Teile solche Probleme in Lösungswege mit kleinen Einzelschritten und speichere Zwischenergebnisse in Variablen mit Namen, die dir helfen.
:::

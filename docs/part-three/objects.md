---
sidebar_position: 1
---

# Objects

## Kernpunkte

- Was sind Objekte?

## Objects

Im Kapitel [Typen](../part-one//types.md) haben wir bereits 6 von 8 datentypen kennengelernt. Die letzten beiden Typen
sind `Objects` und `Arrays` (behandelt nächsten chapter).

`Primitive` typen erlauben es nur einen Wert/Information in
einer Variable zu speichern( ein string, eine number, usw.).

Im `Objects` hingegen enhalten eine Sammlung von Informationen
Um ein Objekt zu deklarieren nutzen wir geschwungene Klammer (`{...}`). In diesen Klammern befinden sich so genannte `key: value` pairs - ein`key` ist immer ein string während der `value` ein beliebiger datentype sein kann.

Wir können uns Objekte als einen Aktenschrank vorstellen,
der beschriebene Ordner enthält.
Dadurch ist einfach Informationen durch den Ordnernamen zu finden, Ordner hinzuzufügen oder zu entfernen.

![cabinet with folders that have key1,key2,key3 written on them](../../static/screenshots/cabinet.png)

Ein leeres object("leerer Aktenschrank") kann auf zwei Weisen
deklariert werden:

```js
//1
let user = {}; // "object literal" syntax - go to method
//2
let user = new Object(); // "object constructor" syntax
```

![Empty cabinet with the name user](../../static/screenshots/empty-cabinet.png)

## Literals and properties

Bei der Deklaration können wir auch gleich Informationen als
`key: value` pairs (auch 'properties' genannt) speichern.

```js
// object literal syntax
let user = {
  name: "John", // key: 'name' mit dem Wert "John"
  age: 30, //key: 'age' mit dem Wert 30
};
```

Eine `property` hat immer einen `key` (als 'identifier')
dann einen Doppelpunkt `:`, gefolgt von dem Wert, der
gespeichert werden soll.

Hier in unserem `user` object, haben wir zwei properties:

1. `name` mit dem wert `john`.
2. `age` mit dem Wert `30`.

Unser Aktenschrank sieht nun folgendermaßen aus:

![A cabinet with two folders: name & age](../../static/screenshots/user-to-cabinet.png)

Wir können jederzeit weitere Properties hinzufügen oder
entfernen.

Um auf eine Object property zugreifen zu können, benutzen
wir `.`:

```js
//gib den wert der properties aus:
console.log(user.name); // "John"
console.log(user.age); // 30
```

`Value` können jeder datentype sein:

```js
user.isAdmin = true;
```

![cabinet with a new folder: isAdmin](../../static/screenshots/add-to-cabinet.png)

Um eine property zu entfernen können wir den `delete` operator
nutzen:

```js
delete user.age;
```

![cabinet with the removed isAdmin folder](../../static/screenshots/remove-from-cabinet.png)

Wir können auch mehrere Wörter als `key` nutzen, dafür müssen wir den string in Anführungszeichen setzen:

```js
let user {
    name: "John",
    age: 30,
    "likes brids": true // mehrere Wörter mit dem Wert true
}
```

![cabinet with a new folder: 'likes birds'](../../static/screenshots/special-keys-cabinet.png)

Um einen `key` aus mehreren Wörtern aufrufen zu können,
müssen wir eckige klammern benutzen `[]`.

```js
user["likes birds"] //works

//ohne eckige Klammern, erhalten wir einen Fehler
user.likes birds //error
```

:::caution Multiword keys
Im allgemeinen sind multiword keys discouraged, weil sie eine
besondere Handhabung bedürfen.

Falls ihr einem `key` mehrere Wörter zuweisen möchtet, solltet ihr stattdessen camelCases verwenden, z.b.:

```js
let user = {
  likesBirds: true,
};
```

:::

Hinter jedem `key: value` wird am Ende noch ein Komma `,`
gesetzt - auch 'trailing' oder 'hanging' comma genannt.

## "for...in" loop

Um über die Werte eines Objectes zu 'loopen' können wir eine
besondere Form des `for loops` verwenden.

```js
for (key in object) {
  //führt den loop body für jede property
  //innerhalb des objects aus
}
```

Um die Werte des `user` objects auszugeben:

```js
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (key in user) {
  //gib den string namen der keys aus
  console.log(key); //name, age, isAdmin

  //gib den zugehörigen value aus
  //Aufgrund der unterschiedlichen key namen,
  //die wir jede iteration benötigen müssen wir
  //diese durch die key variable angeben.

  //Dafür können wir die eckigen Klammern nutzen:
  console.log(user[key]); //John, 30, true

  //1. iteration - console.log(user.name)
  //2. iteration - console.log(user.age)
  //3. iteration - console.log(user.isAdmin)
}
```

:::note Properties Reihenfolge
Eine Besonderheit an Objects ist, dass Properties innerhalb
des Objects nicht sortiert werden können und auch nicht sortiert sind.
:::

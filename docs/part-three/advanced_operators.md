- ternary
- optional chaining
- nullish coalescing

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
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Haki
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

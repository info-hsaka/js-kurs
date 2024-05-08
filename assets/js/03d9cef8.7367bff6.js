"use strict";(self.webpackChunkjs_kurs=self.webpackChunkjs_kurs||[]).push([[659],{4076:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=i(4848),s=i(8453);const t={sidebar_position:5},a="Functions",l={id:"part-two/functions",title:"Functions",description:"Nach Scopes lernen wir nun das wahrscheinlich wichtigste Konstrukt in der Programmierung kennen: Functions (Funktionen). Funktionen sind der Mechanismus der es \xfcberhaupt erlaubt, gro\xdfe Softwareprojekte zu schreiben und dabei die \xdcbersicht zu behalten.",source:"@site/docs/part-two/functions.md",sourceDirName:"part-two",slug:"/part-two/functions",permalink:"/docs/part-two/functions",draft:!1,unlisted:!1,editUrl:"https://github.com/info-hsaka/js-kurs/docs/part-two/functions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Scopes",permalink:"/docs/part-two/scopes"},next:{title:"Advanced Strings & Builtins",permalink:"/docs/part-three/builtins"}},o={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Function Scope",id:"function-scope",level:3},{value:"Return",id:"return",level:2},{value:"Composition",id:"composition",level:2},{value:"Black Boxes",id:"black-boxes",level:2},{value:"<code>import</code> &amp; <code>export</code>",id:"import--export",level:2},{value:"\xdcbung",id:"\xfcbung",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(n.p,{children:"Nach Scopes lernen wir nun das wahrscheinlich wichtigste Konstrukt in der Programmierung kennen: Functions (Funktionen). Funktionen sind der Mechanismus der es \xfcberhaupt erlaubt, gro\xdfe Softwareprojekte zu schreiben und dabei die \xdcbersicht zu behalten."}),"\n",(0,r.jsx)(n.p,{children:"Eine Funktion ist ein St\xfcck Code mit einem Namen, welches wiederverwendet werden kann. Nehmen wir beispielsweise den folgenden Code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const animal = "Katze"\n\nif (animal == "Katze") {\n    console.log("Achtung!")\n    console.log("Raubtier entdeckt")\n} else if (animal == "Hund") {\n    console.log("Achtung!")\n    console.log("Raubtier entdeckt")\n} else if (animal == "Wolf") {\n    console.log("Achtung!")\n    console.log("Raubtier entdeckt")\n} else {\n    console.log("Kein Raubier")\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Der Code"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'console.log("Achtung!")\nconsole.log("Raubtier entdeckt")\n'})}),"\n",(0,r.jsx)(n.p,{children:"wird hierbei mehrmals wiederholt. Wenn wir \xe4ndern wollen, was bei einem Raubtier ausgegeben wird, m\xfcssen wir alle drei Stellen von Hand anfassen. Das wird schlimmer, wenn wir mehr verschiedene Tiere einbauen."}),"\n",(0,r.jsxs)(n.p,{children:["Hierbei hilft eine Funktion. Eine Funktion gibt einem St\xfcck Code zwischen zwei ",(0,r.jsx)(n.code,{children:"{}"})," einen Namen und erm\xf6glicht es, diesen Namen zu benutzen statt den Code erneut zu schreiben. Man nennt das auch die Funktion aufzurufen (zu callen):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function warn() {\n    console.log("Achtung!")\n    console.log("Raubtier entdeckt")\n}\n\nconst animal = "Katze"\n\nif (animal == "Katze") {\n    warn()\n} else if (animal == "Hund") {\n    warn()\n} else if (animal == "Wolf") {\n    warn()\n} else {\n    console.log("Kein Raubier")\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Dieses Programm tut genau dasselbe wie oben - aber wir wiederholen uns weniger."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsxs)(n.p,{children:["Eine Funktion anzulegen nennt man auch deklarieren - \xe4hnlich wie bei Variablen. Man schreibt dabei ",(0,r.jsx)(n.code,{children:"function <name>()"})," (mit dem Namen der Funktion statt ",(0,r.jsx)(n.code,{children:"<name>"}),") gefolgt vom Code der Funktion in ",(0,r.jsx)(n.code,{children:"{}"})," - man nennt diesen Code auch den K\xf6rper / body der Funktion."]}),"\n",(0,r.jsxs)(n.p,{children:["Eine Funktion wird mit ihrem Namen gefolgt von ",(0,r.jsx)(n.code,{children:"()"})," aufgerufen. Das Programm springt dann in die Funktion, f\xfchrt ihren K\xf6rper aus und springt wieder zur\xfcck."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function sayHello() {\n    console.log("Hallo")\n    console.log("Ich bin in einer Funktion")\n}\n\nsayHello()\nsayHello()\nsayHello()\n'})}),"\n",(0,r.jsx)(n.p,{children:"gibt"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Hallo\nIch bin in einer Funktion\nHallo\nIch bin in einer Funktion\nHallo\nIch bin in einer Funktion\n"})}),"\n",(0,r.jsx)(n.p,{children:"aus."}),"\n",(0,r.jsx)(n.h2,{id:"parameter",children:"Parameter"}),"\n",(0,r.jsx)(n.p,{children:"In den Beispielen oben tun unsere Funktionen immer das gleiche wenn sie aufgerufen werden. Funktionen k\xf6nnen allerdings auch so geschrieben werden, dass ihr Verhalten anpassbar ist. Daf\xfcr braucht es sogenannte Parameter / Argumente."}),"\n",(0,r.jsxs)(n.p,{children:["Ihr habt eventuell schon die runden Klammern ",(0,r.jsx)(n.code,{children:"()"})," bemerkt, die sowohl bei der Deklaration als auch beim Aufruf einer Funktion benutzt werden. Diese Klammern enthalten die Parameter einer Funktion. Unsere bisherigen Funktionen hatten keine Parameter, deswegen waren diese Klammern sowohl bei der Deklaration als auch beim Aufruf leer. Das \xe4ndern wir jetzt mit diesem Beispiel:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function sayIfAdult(age) {\n    console.log(age)\n\n    if (age < 18) {\n        console.log("^ in diesem Alter ist man noch minderj\xe4hrig")\n    } else {\n        console.log("^ in diesem Alter ist man bereits vollj\xe4hrig")\n    }\n}\n\nsayIfAdult(12)\nsayIfAdult(27)\nsayIfAdult(48)\nsayIfAdult(8)\nsayIfAdult(18)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Dieses Programm gibt"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"12\n^ in diesem Alter ist man noch minderj\xe4hrig\n27\n^ in diesem Alter ist man bereits vollj\xe4hrig\n48\n^ in diesem Alter ist man bereits vollj\xe4hrig\n8\n^ in diesem Alter ist man noch minderj\xe4hrig\n18\n^ in diesem Alter ist man bereits vollj\xe4hrig\n"})}),"\n",(0,r.jsx)(n.p,{children:"aus."}),"\n",(0,r.jsx)(n.h3,{id:"syntax-1",children:"Syntax"}),"\n",(0,r.jsxs)(n.p,{children:["Allgemein kann man bei der Deklaration (und dann auch dem Aufruf) einer Funktion beliebig viele Parameter angeben. Diese werden dabei in den runden Klammern ",(0,r.jsx)(n.code,{children:"()"})," mit Kommas ",(0,r.jsx)(n.code,{children:","})," getrennt aufgelistet:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function saySum(x, y) {\n    const sum = x + y\n\n    console.log("x + y = ")\n    console.log(sum)\n}\n\nsaySum(10, 15)\nsaySum(2, 18)\nsaySum(499, 1)\n'})}),"\n",(0,r.jsx)(n.p,{children:"gibt"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"x + y =\n25\nx + y =\n20\nx + y =\n500\n"})}),"\n",(0,r.jsx)(n.p,{children:"aus."}),"\n",(0,r.jsx)(n.h3,{id:"function-scope",children:"Function Scope"}),"\n",(0,r.jsxs)(n.p,{children:["Funktionen haben innerhalb ihres K\xf6rpers ",(0,r.jsx)(n.code,{children:"{}"})," genauso wie ",(0,r.jsx)(n.code,{children:"if"})," und ",(0,r.jsx)(n.code,{children:"while"})," einen eigenen Scope. Das bedeutet, dass Variablen innerhalb einer Funktion nur lokal existieren und danach verworfen werden."]}),"\n",(0,r.jsx)(n.p,{children:"Dasselbe gilt auch f\xfcr Parameter. Bei einem Funktionsaufruf springt das Programm in die Funktion und legt als erstes die Parameter als lokale Variablen an:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function saySquare(number) {\n    // number wird beim Funktionsaufruf gesetzt und verh\xe4lt sich wie eine lokale Variable\n\n    // squared ist eine lokale Variable\n    const squared = number * number\n\n    console.log("Das Quadrat dieser Zahl ist")\n    console.log(squared)\n\n    // number und squared h\xf6ren hier auf zu existieren\n}\n\nsaySquare(2)\nsaySquare(7)\n'})}),"\n",(0,r.jsx)(n.p,{children:"gibt"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Das Quadrat dieser Zahl ist\n4\nDas Quadrat dieser Zahl ist\n49\n"})}),"\n",(0,r.jsx)(n.p,{children:"aus."}),"\n",(0,r.jsx)(n.h2,{id:"return",children:"Return"}),"\n",(0,r.jsx)(n.p,{children:"Bisher geben unsere Funktionen immer irgendetwas in der Konsole aus. Aber was, wenn wir Code, der nichts in der Konsole ausgibt sondern zB. etwas berechnet in eine Funktion auslagern wollen, um uns in unserem Code nicht st\xe4ndig zu wiederholen? Nehmen wir beispielsweise folgendes Programm an:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const janeAge = 19\nconst daveAge = 17\n\nconst janeIsTeenager = janeAge >= 12 && janeAge < 20\nconst daveIsTeenager = daveAge >= 12 && daveAge < 20\n\nif (janeIsTeenager && daveIsTeenager) {\n    console.log("Jane und Dave sind beide Teenager")\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Die Logik wie wir feststellen, ob jemand Teenager ist, wird hierbei zweimal wiederholt und ist auch etwas schwer lesbar. Auch hier k\xf6nnen wir eine Funktion einsetzen, um die wiederholte Logik an eine Stelle zu b\xfcndeln. Daf\xfcr m\xfcssen wir allerdings ",(0,r.jsx)(n.code,{children:"return"}),"s einf\xfchren. Das Beispiel sieht danach so aus:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function isTeenager(age) {\n    const oldEnough = age > 12\n    const youngEnough = age < 20\n\n    return oldEnough && youngEnough\n}\n\nconst janeAge = 19\nconst daveAge = 17\n\nif (isTeenager(janeAge) && isTeenager(daveAge)) {\n    console.log("Jane und Dave sind beide Teenager")\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Hier sehen wir ein neues Statement: ",(0,r.jsx)(n.code,{children:"return"}),". ",(0,r.jsx)(n.code,{children:"return"})," kann nur innerhalb einer Funktion benutzt werden. Es bricht die Funktion dabei sofort ab und gibt den Wert nach ",(0,r.jsx)(n.code,{children:"return"}),' zur\xfcck ("returnt" den Wert). Aber was hei\xdft das?']}),"\n",(0,r.jsxs)(n.p,{children:["Wenn wir eine Funktion aufrufen ist der Aufruf selbst wieder ein Wert - n\xe4mlich der Wert, den die Funktion returnt. Wenn eine Funktion keinen Wert returnt, dann ist der Wert ihres Aufrufs ",(0,r.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Eine Funktion ist also wiederverwendbarer Code, der beliebig viele Parameter zu einem ",(0,r.jsx)(n.code,{children:"return"})," Wert umwandelt, \xe4hnlich wie ein Operator."]}),"\n",(0,r.jsx)(n.p,{children:"Ein paar weitere Beispiele f\xfcr Funktionen:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function getStufe(schoolYear) {\n    if (schoolYear <= 7) {\n        return "Unterstufe"\n    }\n\n    if (schoolYear <= 10) {\n        return "Mittelstufe"\n    }\n\n    return "Oberstufe"\n}\n\nconsole.log(getStufe(9))\nconsole.log(getStufe(5))\nconsole.log(getStufe(12))\n'})}),"\n",(0,r.jsx)(n.p,{children:"gibt"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Mittelstufe\nUnterstufe\nOberstufe\n"})}),"\n",(0,r.jsx)(n.p,{children:"aus."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// Berechnet den Betrag einer Zahl\nfunction absolute(number) {\n    if (number < 0) {\n        return number * -1\n    }\n\n    return number\n}\n\nconsole.log(absolute(-8))\nconsole.log(absolute(23))\nconsole.log(absolute(-42))\n"})}),"\n",(0,r.jsx)(n.p,{children:"gibt"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"8\n23\n42\n"})}),"\n",(0,r.jsx)(n.p,{children:"aus."}),"\n",(0,r.jsx)(n.h2,{id:"composition",children:"Composition"}),"\n",(0,r.jsx)(n.p,{children:'Wie alle anderen Konstrukte, die wir bereits kennengeelernt haben, lassen sich auch Funktionen mit sich selbst verschachtelt kombinieren. Mit anderen Worten: auch innerhalb von Funktionen k\xf6nnt ihr wieder Funktionen aufrufen. Damit l\xe4sst sich Code, welcher sehr lang oder tief geschachtelt und deswegen schwer verst\xe4ndlich ist in beliebig kleine "flache" Teile einteilen und damit \xfcbersichtlich machen. Als Beispiel hierf\xfcr nehmen wir noch einmal unser Primzahlenprogramm aus der Loops-\xdcbung:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const target = 20\n\n// Aktueller Kandidat, der prim sein k\xf6nnte\nlet maybePrim = 2\n\n// Wir wollen alle Zahlen bis target pr\xfcfen\nwhile (num <= target) {\n    // Lokale Variable (innerhalb des Scopes) die speichert, ob der aktuelle Kandidat (num) prim ist. Wir fangen mit der Annahme an, dass er prim ist.\n    let isPrim = true\n    // Lokale Variable (innerhalb des Scopes), speichert den aktuellen Kandidat f\xfcr einen Teiler f\xfcr num\n    let maybeTeiler = 2\n\n    // Wir schauen uns alle Zahlen unter num an\n    while (maybeTeiler < num) {\n        // Pr\xfcfen, ob die Zahl ein Teiler von num ist\n        if (num % maybeTeiler == 0) {\n            // Falls ja, ist num nicht prim...\n            isPrim = false\n            // ...und wir k\xf6nnen aufh\xf6ren nach weiteren Teilern zu suchen\n            break\n        }\n\n        // Schaue den n\xe4chsten m\xf6glichen Teiler an\n        maybeTeiler = maybeTeiler + 1\n    }\n\n    // Falls die Zahl prim ist (also kein Teiler gefunden wurde) geben wir sie als Primzahl in der Konsole aus\n    if (isPrim) {\n        console.log("Primzahl:")\n        console.log(num)\n    }\n\n    // Schaue die n\xe4chste m\xf6gliche Primzahl an\n    num = num + 1\n\n    // Hier ist der Scope zu Ende - isPrim und maybeTeiler werden weggeworfen und im n\xe4chsten while-Durchlauf neu angelegt\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Dieses Programm funktioniert zwar, aber ist durch die Schachtelung schwer zu verstehen. Mit Funktionen l\xe4sst sich das leichter verst\xe4ndlich strukturieren:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// Funktion die f\xfcr eine Zahl (number) rausfindet, ob sie prim ist (returnt einen boolean, true = prim, false = nicht prim)\nfunction isPrime(number) {\n    let maybeTeiler = 2\n\n    while (maybeTeiler < number) {\n        if (number % maybeTeiler == 0) {\n            // Wenn ein Teiler gefunen wird, ist die Zahl nicht prim und die Funktion kann sofort returnen\n            return false\n        }\n\n        maybeTeiler = maybeTeiler + 1\n    }\n\n    return true\n}\n\n// Funktion die alle Primzahlen bis zu einer Zahl (target) in der Konsole ausgibt, returnt nichts\nfunction findPrimesBelow(target) {\n    let maybePrime = 2\n\n    while (maybePrim <= target) {\n        // Hier wird die isPrime Funktion von oben benutzt\n        if (isPrime(maybePrime)) {\n            console.log(num)\n        }\n\n        maybePrime = maybePrime + 1\n    }\n}\n\nfindPrimesBelow(20)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Diese Version der gleichen L\xf6sung tut dasselbe, ist aber \xfcbersichtlicher und leichter verst\xe4ndlich."}),"\n",(0,r.jsx)(n.h2,{id:"black-boxes",children:"Black Boxes"}),"\n",(0,r.jsxs)(n.p,{children:["Funktionen sind der Kernmechanismus, mit dem Entwickler",":innen"," gro\xdfe Probleme so l\xf6sen, dass die L\xf6sung hinterher noch \xfcbersichtlich und verst\xe4ndlich ist. Dazu nimmt man ein Problem und zerteilt es solange in kleinere Teilschritte / Teilprobleme, bis die Einzelteile klein genug sind, um sie jeweils in eine \xfcbersichtlich kleine Funktion mit verst\xe4ndlichem Namen zu l\xf6sen."]}),"\n",(0,r.jsxs)(n.p,{children:["Dieser Ansatz funktioniert, weil Menschen nicht besonders gut darin sind, beliebig viel Kontext gleichzeitig im Kopf zu haben. Unsere erste Primzahlenl\xf6sung zu lesen und nachzuvollziehen war wahrscheinlich ziemlich anstrengend, denn um sie zu verstehen, muss man den Kontext mehrerer verschactelter ",(0,r.jsx)(n.code,{children:"while"})," Loops und Variablen gleichzeitig im Kopf behalten. Durch das Aufteilen in mehrere Funktionen mit klaren Namen haben wir das Problem in kleinere deutlich abgegrenzte Teilprobleme unterteilt. Die resultierenden Funktionen passen jeweils einzeln beim Lesen gut in den menschlichen Kopf."]}),"\n",(0,r.jsx)(n.p,{children:"Wenn wir Code gut in Funktionen aufteilen entsteht der sogenannte Black Box Effekt. Black Box nennt man das Konzept, dass man eine Funktion benutzt, ohne im Kopf haben zu m\xfcssen, wie der Code der Funktion selbst aussieht. Man wei\xdf nur, welches Teilproblem die Funktion l\xf6st und ggf. welche Parameter sie erwartet und welchen Wert sie returnt. Die Funktion ist von au\xdfen wie eine schwarze Box, in die man nicht hineinschaut, man wei\xdf nur, was sie tut. \xdcbertragen auf euer Alltagsleben benutzt ihr h\xf6chstwahrscheinlich eine Menge Black Boxes. Ihr wisst, wie ihr euren Taschenrechner bedienen m\xfcsst und welche Probleme er l\xf6st. Aber wie genau er funktioniert und wie er innen verdrahtet ist, wisst ihr h\xf6chstwahrscheinlich nicht. Das h\xe4lt euch aber nicht davon ab, ihn sinnvoll benutzen zu k\xf6nnen, um mit ihm andere Probleme zu l\xf6sen. Das Gleiche gilt zB. auch f\xfcr euren Herd, euen Handylader, euren Fernseher usw."}),"\n",(0,r.jsx)(n.p,{children:'Damit eine Funktion eine gute Black Box ist, braucht sie nicht nur eine gut abgesteckte Aufgabe, die sie erf\xfcllt, sondern auch einen guten Namen (und gute Namen f\xfcr die Parameter). Der Name einer Funktion und ihrer Parameter ist essentiell um beim "dr\xfcberlesen" von Code schnell zu verstehen, was sie tut, ohne den K\xf6rper der Funktion lesen zu m\xfcssen.'}),"\n",(0,r.jsxs)(n.h2,{id:"import--export",children:[(0,r.jsx)(n.code,{children:"import"})," & ",(0,r.jsx)(n.code,{children:"export"})]}),"\n",(0,r.jsx)(n.p,{children:"Wir haben oben erkl\xe4rt, dass gro\xdfe Softwareprojekte Code in viele kleine Funktionen aufteilen. Wir haben allerdings ausgelassen, wo diese ganzen Funktionen leben. Gro\xdfe Softwareprojekte haben hunderttausende von Zeilen - diese k\xf6nnen nat\xfcrlich nicht sinnvoll in einer einzigen Datei leben, sondern m\xfcssen auf viele, viele Dateien in einer verst\xe4ndlichen Ordnerstruktur verteilt werden."}),"\n",(0,r.jsxs)(n.p,{children:["Der Mechanismus, mit dem wir in Javascript Funktionen auf Dateien verteilen, ist ",(0,r.jsx)(n.code,{children:"import"})," und ",(0,r.jsx)(n.code,{children:"export"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Mit ",(0,r.jsx)(n.code,{children:"export"}),' markiert man in einer Datei Funktionen, die von anderen Dateien benutzt werden sollen. Man sagt, sie werden "exportiert", sie k\xf6nnen "von au\xdfen" benutzt werden.']}),"\n",(0,r.jsxs)(n.li,{children:["Mit ",(0,r.jsx)(n.code,{children:"import"}),' "importiert" man Funktionen aus anderen Dateien um sie zu benutzen']}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Ein Beispiel:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="foo.js"',children:'// Hier exportieren wir die Funktion nach au\xdfen damit andere Dateien sie importieren k\xf6nnen\nexport function sayHello() {\n    console.log("hello")\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="bar.js"',children:'// Hier holen wir uns die Funktion aus foo.js\nimport { sayHello } from "foo.js"\n\nsayHello()\n'})}),"\n",(0,r.jsx)(n.p,{children:"Warum sprechen wir jetzt dar\xfcber? Ab jetzt werden wir euch in den \xdcbungsaufgaben auffordern, eine Funktion mit einem bestimmten Namen zu exportieren. Wenn ihr die \xdcbung dann \xfcber den Play Button ausf\xfchrt, testen wir eure Funktion automatisch mit ein paar Parametern aus und sagen euch, ob sie funktioniert, wie sie soll."}),"\n",(0,r.jsx)(n.h2,{id:"\xfcbung",children:"\xdcbung"}),"\n",(0,r.jsx)(n.p,{children:"Wir schauen uns jetzt eine etwas gr\xf6\xdfere Aufgabe an um zu \xfcben, Dinge in Funktionen zu unterteilen. Wir beziehen uns dabei auf vorherige \xdcbungsaufgaben und bauen aus ihnen eine gr\xf6\xdfere chaotische Aufgabe zusammen."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Schreibe eine Funktion ",(0,r.jsx)(n.code,{children:"getMagicNumber(startYear, age)"})," und exportiere sie. Die Funktion erwartet ein Startjahr (Zahl) und das Alter einer Person in diesem Startjahr (Zahl) als Parameter. Sie soll folgendes tun:"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Suche ab dem Startjahr nach dem n\xe4chsten Jahr, in dem sowohl die Fu\xdfbal EM als auch die Europawahl stattfindet"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Stelle fest, wie alt die Person in diesem Jahr w\xe4re Starte mit diesem Alter eine ",(0,r.jsx)(n.a,{href:"../loops#collatz-folge",children:"Collatz Folge"})," und return die dritte Zahl dieser Folge (Beispiel: 24 als Start wird zu 24, 12, 6 - 6 ist die dritte Zahl)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Rufe diese Funktion dreimal mit folgenden Parametern auf:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"2024, 30"}),"\n",(0,r.jsx)(n.li,{children:"2018, 18"}),"\n",(0,r.jsx)(n.li,{children:"2035, 5"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Versuche diese Aufgabe zun\xe4chst auf einem Zettel in Einzelteile zu zerteilen, welche du als Funktionen implementieren kannst. \xdcberlege dabei immer, welche Zwischenergebnisse bereits vorhanden sein m\xfcssen um einen Teilschritt zu erledigen - das sind dann die Parameter der Funktion dieses Teilschritts."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var r=i(6540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
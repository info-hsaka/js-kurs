"use strict";(self.webpackChunkjs_kurs=self.webpackChunkjs_kurs||[]).push([[766],{4814:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=i(4848),s=i(8453);const t={sidebar_position:2},l="Types",a={id:"part-one/types",title:"Types",description:'Wir haben im letzten Abschnitt h\xe4ufig das Wort "Wert" f\xfcr den Inhalt einer Variable verwendet. Aber was kann so ein Wert denn sein?',source:"@site/docs/part-one/types.md",sourceDirName:"part-one",slug:"/part-one/types",permalink:"/docs/part-one/types",draft:!1,unlisted:!1,editUrl:"https://github.com/info-hsaka/js-kurs/docs/part-one/types.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Variablen",permalink:"/docs/part-one/variables"},next:{title:"Operators",permalink:"/docs/part-one/operands"}},d={},c=[{value:"Strings",id:"strings",level:2},{value:"Numbers",id:"numbers",level:2},{value:"Booleans",id:"booleans",level:2},{value:"Leerwerte",id:"leerwerte",level:2},{value:"\xdcbung",id:"\xfcbung",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"types",children:"Types"}),"\n",(0,r.jsx)(n.p,{children:'Wir haben im letzten Abschnitt h\xe4ufig das Wort "Wert" f\xfcr den Inhalt einer Variable verwendet. Aber was kann so ein Wert denn sein?'}),"\n",(0,r.jsx)(n.p,{children:"Es gibt in Javascript verschiedene Arten von Werten - man nennt diese Arten auch Datentypen. Innerhalb dieser Datentypen gibt es zus\xe4tzlich die Unterscheidung zwischen primitiven Datntypen und composite Typen. Wir betrachten zun\xe4chst die verschiedenen primitiven Typen:"}),"\n",(0,r.jsx)(n.h2,{id:"strings",children:"Strings"}),"\n",(0,r.jsx)(n.p,{children:"Mit Strings haben wir bereits im letzten Abschnitt gearbeitet."}),"\n",(0,r.jsxs)(n.p,{children:["Strings sind eine Folge von Zeichen, wie zB. ein Name oder ein Text. Strings werden ausgedr\xfcckt, indem ihre Zeichen mit doppelten Anf\xfchrungszeichen ",(0,r.jsx)(n.code,{children:'"'})," umschlossen werden. Zum Beispiel:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const name = "Haki"\nconst greeting = "Hello dear Human"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"numbers",children:"Numbers"}),"\n",(0,r.jsx)(n.p,{children:"Ein weiterer m\xf6glicher Datentyp sind Zahlen. Diese werden in Javascript als normale Zahlenfolge ausgedr\xfcckt. F\xfcr Dezimalzahlen wird der Punkt (statt wie im Deutschen das Komma) als Trenner verwendet:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const pi = 3.141\nlet currentYear = 2024\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Nun haben wir eine Variable ",(0,r.jsx)(n.code,{children:"pi"})," die die Zahl 3,141 enth\xe4lt und ein Variable ",(0,r.jsx)(n.code,{children:"currentYear"})," die die Zahl 2024 enth\xe4lt."]}),"\n",(0,r.jsx)(n.h2,{id:"booleans",children:"Booleans"}),"\n",(0,r.jsxs)(n.p,{children:["Wahrheitswerte sind etwas komisch wenn man noch nicht programmiert hat. Man nennt Werte von diesem Typ ",(0,r.jsx)(n.code,{children:"boolean"}),"s und es gibt nur genau zwei Werte von diesem Typ:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"true"}),'(wahr / "Ja")']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"false"}),'(falsch / "Nein")']}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Diese werden auch genauso geschrieben:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const dogsAreFluffy = true\nconst pigsCanFly = false\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Ein ",(0,r.jsx)(n.code,{children:"boolean"})," Wert gibt also an, ob irgendetwas stimmt oder nicht. Das klingt erstmal nicht besonders n\xfctzlich, ist aber beim Programmieren h\xe4ufig essentiell. Wir werden sp\xe4ter noch sehen, warum."]}),"\n",(0,r.jsx)(n.h2,{id:"leerwerte",children:"Leerwerte"}),"\n",(0,r.jsxs)(n.p,{children:["Javascript hat zwei spezielle Werte die angeben, dass etwas leer ist bzw. gar keinen Wert hat: ",(0,r.jsx)(n.code,{children:"null"})," und ",(0,r.jsx)(n.code,{children:"undefined"}),". Die Unterschiede zwischen diesen beiden Werten sind f\xfcr unseren Kontext egal. Falls ihr ",(0,r.jsx)(n.code,{children:"null"})," oder ",(0,r.jsx)(n.code,{children:"undefined"})," seht bedeutet das, dass der Wert leer ist."]}),"\n",(0,r.jsx)(n.p,{children:"Das k\xf6nnen wir auch direkt ausprobieren. F\xfchrt folgenden Code \xfcber VSCode aus:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let meainingOfExistence\nconsole.log(meaningOfExistence)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Wir legen die ",(0,r.jsx)(n.code,{children:"meaningOfExistence"})," Variable zwar an, aber weisen ihr keinen Wert zu. Wenn wir sie in der Konsole ausgeben, erhalten wir ",(0,r.jsx)(n.code,{children:"undefined"})," - die Variable ist leer."]}),"\n",(0,r.jsx)(n.h2,{id:"\xfcbung",children:"\xdcbung"}),"\n",(0,r.jsx)(n.p,{children:"Schreibt folgendes Programm in Javascript. Setze dabei jeden der unteren Schritte in einer eigenen Zeile um:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Legt eine Variable ",(0,r.jsx)(n.code,{children:"age"})," an, welche euer Alter in ganzen Jahren enth\xe4lt"]}),"\n",(0,r.jsxs)(n.li,{children:["Gib den Inhalt der ",(0,r.jsx)(n.code,{children:"age"})," Variable in der Konsole aus"]}),"\n",(0,r.jsxs)(n.li,{children:["Legt eine Variable ",(0,r.jsx)(n.code,{children:"hasPet"})," an, welche enth\xe4lt, ob ihr ein Haustier habt, oder nicht"]}),"\n",(0,r.jsxs)(n.li,{children:["Gib den Inhalt der ",(0,r.jsx)(n.code,{children:"hasPet"})," Variable in der Konsole aus"]}),"\n",(0,r.jsxs)(n.li,{children:["Legt eine Variable ",(0,r.jsx)(n.code,{children:"sibling"})," an"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Falls"})," du Geschwister hast, bef\xfcll die Variable ",(0,r.jsx)(n.code,{children:"sibling"})," mit dem Namen eines deiner Geschwister"]}),"\n",(0,r.jsxs)(n.li,{children:["Gib den Inhalt der ",(0,r.jsx)(n.code,{children:"sigbling"})," Variable in der Konsole aus"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var r=i(6540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
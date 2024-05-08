"use strict";(self.webpackChunkjs_kurs=self.webpackChunkjs_kurs||[]).push([[3],{2468:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>t});var s=i(4848),r=i(8453);const l={sidebar_position:2},d="Conditionals",a={id:"part-two/conditionals",title:"Conditionals",description:"Ein Kernelement von allen Programmen, welches wir bisher noch nicht abgedeckt haben, sind Fallunterscheidungen.",source:"@site/docs/part-two/conditionals.md",sourceDirName:"part-two",slug:"/part-two/conditionals",permalink:"/docs/part-two/conditionals",draft:!1,unlisted:!1,editUrl:"https://github.com/info-hsaka/js-kurs/docs/part-two/conditionals.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Comments",permalink:"/docs/part-two/comments"},next:{title:"Loops",permalink:"/docs/part-two/loops"}},c={},t=[{value:"<code>if</code>",id:"if",level:2},{value:"Mehr <code>boolean</code> Operatoren",id:"mehr-boolean-operatoren",level:2},{value:"<code>else</code>",id:"else",level:2},{value:"<code>else if</code>",id:"else-if",level:3},{value:"\xdcbung",id:"\xfcbung",level:2}];function o(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"conditionals",children:"Conditionals"}),"\n",(0,s.jsx)(n.p,{children:"Ein Kernelement von allen Programmen, welches wir bisher noch nicht abgedeckt haben, sind Fallunterscheidungen."}),"\n",(0,s.jsxs)(n.p,{children:["H\xe4ufig m\xf6chte man in Code etwas nur tun, wenn eine bestimmte Bedingung gilt. Daf\xfcr gibt es ",(0,s.jsx)(n.code,{children:"if"})," Statements:"]}),"\n",(0,s.jsx)(n.h2,{id:"if",children:(0,s.jsx)(n.code,{children:"if"})}),"\n",(0,s.jsxs)(n.p,{children:["Mit ",(0,s.jsx)(n.code,{children:"if"})," k\xf6nne wir Code nur dann ausf\xfchrenm wenn eine bestimmte Aussage wahr ist (erinnert ihr euch an die ",(0,s.jsx)(n.code,{children:"boolean"})," Werte?)."]}),"\n",(0,s.jsxs)(n.p,{children:["Daf\xfcr schreiben wir nach dem ",(0,s.jsx)(n.code,{children:"if"})," einen ",(0,s.jsx)(n.code,{children:"boolean"})," Wert in runden ",(0,s.jsx)(n.code,{children:"()"}),' Klammern (man nennt ihn die "Bedingung" oder "condition") und danach in geschwungennen ',(0,s.jsx)(n.code,{children:"{}"})," Klammern den Code, der ausgef\xfchrt werden soll, wenn die Bedingung wahr (",(0,s.jsx)(n.code,{children:"true"}),") ist."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const myAge = 30\n\nif (myAge > 19) {\n    console.log("Ich bin kein Teenager mehr")\n}\n\nif (myAge > 29) {\n    console.log("Ich bin auch kein Tweenager mehr")\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Dieser Code wird"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"Ich bin kein Teenager mehr"\n"Ich bin auch kein Tweenager mehr"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["in der Konsole ausgeben. Wenn wir allerdings die Zahl in der ersten Zeile zu ",(0,s.jsx)(n.code,{children:"22"})," \xe4ndern und den Code erneut ausf\xfchren, wird nur noch"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"Ich bin kein Teenager mehr"\n'})}),"\n",(0,s.jsx)(n.p,{children:"ausgeggeben."}),"\n",(0,s.jsx)(n.p,{children:"Man liest allgemein (das ist kein echter Code, er dient nur der Darstellung):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"if (A) {\n    B\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:'als "Wenn A gilt, dann mach B".'}),"\n",(0,s.jsxs)(n.h2,{id:"mehr-boolean-operatoren",children:["Mehr ",(0,s.jsx)(n.code,{children:"boolean"})," Operatoren"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"if"}),' Statements sind sehr wichtig - "echte" Programme m\xfcssen mit dynamischen Daten umgehen, welche von Nutzern eingegeben werden (das werden wir sp\xe4ter auch noch tun). Dazu sind Fallunterscheidungen per ',(0,s.jsx)(n.code,{children:"if"})," n\xf6tig. Um komplexere Bedingungen ausdr\xfccken zu k\xf6nnen, gibt es eine Reihe weiterer n\xfctzlicher Operatoren:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"&&"}),' (gelesen "and" bzw "und") um aus zwei ',(0,s.jsx)(n.code,{children:"boolean"})," Werten zusammenzubauen, ob sie ",(0,s.jsx)(n.strong,{children:"beide"})," ",(0,s.jsx)(n.code,{children:"true"})," sind"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"||"}),' (gelesen "or" bzw "oder") um aus zwei ',(0,s.jsx)(n.code,{children:"boolean"})," Werten zusammenzubauen, ob ",(0,s.jsx)(n.strong,{children:"mindestens einer"})," von ihnen ",(0,s.jsx)(n.code,{children:"true"})," ist"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'console.log(4 > 2 && "a" != "b")\nconsole.log(1 != 1 && 4 >= 4)\nconsole.log(3 < 1 || 10 == 10)\nconsole.log(4 == 5 || 5 == 6)\n'})}),"\n",(0,s.jsx)(n.p,{children:"gibt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"true\nfalse\ntrue\nfalse\n"})}),"\n",(0,s.jsx)(n.p,{children:"aus."}),"\n",(0,s.jsxs)(n.p,{children:["Es gibt noch einen weiteren ",(0,s.jsx)(n.code,{children:"boolean"})," Operator. Dieser ist ein wenig anders als alle anderen Operatoren bisher. Alle bisherigen Operatoren verbinden zwei Werte und bauen aus ihnen einen neuen Wert zusammen. Es gibt allerdings auch Operatoren, die aus nur einem Wert einen neuen Wert erzeugen:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"!"}),' (gelesen "not" bzw "nicht") um ',(0,s.jsx)(n.strong,{children:"einen"})," ",(0,s.jsx)(n.code,{children:"boolean"}),' Wert "umzukehren" (man sagt auch negieren) - aus ',(0,s.jsx)(n.code,{children:"true"})," wird dabei ",(0,s.jsx)(n.code,{children:"false"})," und aus ",(0,s.jsx)(n.code,{children:"false"})," wird ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const age = 27\nconst isTeenager = age < 20\n\nif (!isTeenager) {\n    console.log("Kein Teenager mehr")\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"gibt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Kein Teenager mehr\n"})}),"\n",(0,s.jsxs)(n.p,{children:["aus, denn der Wert ",(0,s.jsx)(n.code,{children:"!isTeenager"})," ist ",(0,s.jsx)(n.code,{children:"true"}),", weil ",(0,s.jsx)(n.code,{children:"isTeenager"})," ",(0,s.jsx)(n.code,{children:"false"})," ist."]}),"\n",(0,s.jsx)(n.h2,{id:"else",children:(0,s.jsx)(n.code,{children:"else"})}),"\n",(0,s.jsxs)(n.p,{children:["Nach einemm ",(0,s.jsx)(n.code,{children:"if"})," erlaubt JavaScript optional ein ",(0,s.jsx)(n.code,{children:"else"})," welches Code enth\xe4lt, der ausgef\xfchrt werden soll, wenn die Beingung des ",(0,s.jsx)(n.code,{children:"if"}),"s ",(0,s.jsx)(n.code,{children:"false"})," war. An einem Beispiel verdeutlicht sich das am einfachsten:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const year = 2025\nconst isSchaltjahr = year % 4 == 0\n\nif (isSchaltjahr) {\n    console.log("Schaltjahr")\n} else {\n    console.log("Kein Schaltjahr")\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:['Dieses Programm wird "Kein Schaltjahr" ausgeben. Wenn wir ',(0,s.jsx)(n.code,{children:"year"})," zu ",(0,s.jsx)(n.code,{children:"2024"}),' \xe4ndern, wird "Schaltjahr" ausgegeben.']}),"\n",(0,s.jsx)(n.p,{children:"Man liest allgemein (das ist kein echter Code, er dient nur der Darstellung):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"if (A) {\n    B\n} else {\n    C\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:'als "Wenn A gilt, dann mach B, sonst mach C".'}),"\n",(0,s.jsx)(n.h3,{id:"else-if",children:(0,s.jsx)(n.code,{children:"else if"})}),"\n",(0,s.jsxs)(n.p,{children:["Es ist erlaubt, auf ein ",(0,s.jsx)(n.code,{children:"else"})," direkt wieder ein ",(0,s.jsx)(n.code,{children:"if"})," folgen zu lassen, statt ",(0,s.jsx)(n.code,{children:"{}"}),". Dieses Konstrukt nennt man ",(0,s.jsx)(n.code,{children:"else if"}),". Auch das ist am besten an einem Beispiel gezeigt:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const age = 19\n\nif (age < 17) {\n    console.log("Darf gar kein Auto fahren")\n} else if (age < 18) {\n    console.log("Darf begleitet Auto fahren")\n} else if (age < 21) {\n    console.log("Darf alleine das eigene Auto fahren")\n} else {\n    console.log("Darf Mietwagen fahren")\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Man liest allgemein (das ist kein echter Code, er dient nur der Darstellung):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"if (A) {\n    B\n} else if (C) {\n    D\n} else {\n    E\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:'als "Wenn A gilt, dann mach B, sonst wenn C gilt mach D, sonst mach E".'}),"\n",(0,s.jsx)(n.h2,{id:"\xfcbung",children:"\xdcbung"}),"\n",(0,s.jsx)(n.p,{children:"Wir fangen ab jetzt an, in den \xdcbungen St\xfcck f\xfcr St\xfcck weniger genau einzelne Schritte vorzugeben, sondern nur ein bestimmtes Ergebnis / Verhalten zu beschreiben, welches umzusetzen ist. Das Umsetzen von gr\xf6\xdferen Zielen in kleineren Programmierschritten ist die Kernf\xe4higkeit, die wir entwickeln wollen. Es gibt generell f\xfcr die meisten Probleme viele verschiedene legitime L\xf6sungswege - probiert verschiedene aus!"}),"\n",(0,s.jsx)(n.p,{children:"Schreibe folgendes Programm:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Lege eine Variable ",(0,s.jsx)(n.code,{children:"birthYear"})," an, die dein Geburtsjahr als Zahl enth\xe4lt"]}),"\n",(0,s.jsxs)(n.li,{children:["Lege eine Variable ",(0,s.jsx)(n.code,{children:"birthMonth"})," an, die deinen Geburtstmonat als Zahl enth\xe4lt (1 = Januar, 12 = Dezember)"]}),"\n",(0,s.jsxs)(n.li,{children:["Lege eine Variable ",(0,s.jsx)(n.code,{children:"birthDay"})," an, die den Tag innerhalb des Monats deines Geburtstags als Zahl enth\xe4lt (zB ",(0,s.jsx)(n.code,{children:"17"})," f\xfcr den 17. Oktober)"]}),"\n",(0,s.jsxs)(n.li,{children:["Lege eine Variable ",(0,s.jsx)(n.code,{children:"currentYear"})," an, die das aktuelle Jahr als Zahl enth\xe4lt"]}),"\n",(0,s.jsxs)(n.li,{children:["Lege eine Variable ",(0,s.jsx)(n.code,{children:"currentMonth"})," an, die den aktuellen Monat als Zahl enth\xe4lt"]}),"\n",(0,s.jsxs)(n.li,{children:["Lege eine Variable ",(0,s.jsx)(n.code,{children:"currentDay"})," an, die den aktuellen Tag innerhalb des aktuellen Monats als Zahl enth\xe4lt"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Dein Programm soll nun die folgenden Informationen ausgeben, dynamisch von den oben genannten Variablen abh\xe4ngig. Das hei\xdft, dass das Programm weiterhin korrekte Angaben machen w\xfcrde, wenn man ",(0,s.jsx)(n.em,{children:"nur"})," die o.g. Variablen \xe4ndert:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dein aktuelles Alter als ganze Zahl"}),"\n",(0,s.jsx)(n.li,{children:"In welchem Quartal du geboren bist (Q1 = Jan-M\xe4r, Q2 = Apr-Jun, Q3 = Jul - Sep, Q4 = Okt - Dez)"}),"\n",(0,s.jsxs)(n.li,{children:["Ob dieses Jahr sowohl die Fu\xdfball Europameisterschaft (seit 1960 alle 4 Jahre) ",(0,s.jsx)(n.strong,{children:"als auch"})," die Europawahl (seit 1979 alle 5 Jahre) stattfindet"]}),"\n",(0,s.jsx)(n.li,{children:"Ob du heute Geschenke bekommst (wir definieren daf\xfcr, dass es an deinem Geburtstag und am 24. Dezember Geschenke gibt)"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Teile solche Probleme in L\xf6sungswege mit kleinen Einzelschritten und speichere Zwischenergebnisse in Variablen mit Namen, die dir helfen."})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var s=i(6540);const r={},l=s.createContext(r);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);
---
sidebar_position: 3
---

# Setup

Um mit dem Tutorial und damit auch mit dem Programmieren loszulegen, brauchst du zunächst ein paar Programme und Accounts. Diese setzen wir jezt zusammen auf. Das Setup welches wir hier zusammen einrichten wird genau so auch auf der Akademie selbst benutzt werden - es lohnt sich also, sich jetzt schon daran zu gewöhnen.

## 1 Github

Github ist eine Plattform auf der Code hoch- und runtergeladen werden kann. Wir stellen Code per Github zur Verfügung und werden auch im Kurs auf der Akademie mit Github arbeiten.

### 1.1 Account erstellen

Erstelle zunächst einen Github Account, falls du noch keinen hast. Klicke dazu [hier](https://github.com/signup), gib deine Email an und wähle ein Passwort und einen Nutzernamen aus.

![](./setup_pictures/GithubSignup.png)

### 1.2 Repository forken

Sobald du deine Email verifiziert hast, kannst du eine Kopie des Tutorial Repositories erstellen, in dem du während der Vorbereitung arbeiten und deine Lösungen hochladen wirst. In Git nennt man diese Art von Kopie auch einen "Fork".

1. Öffne dazu die Github Seite des Repositories [hier](https://github.com/info-hsaka/javascript-template).
2. Drück auf den 'Fork'-Knopf ![](./setup_pictures/Fork1.png) und lass alle Einstellungen auf ihren Defaultwerten. ![](./setup_pictures/Fork2.png)
3. Wenn alles funktioniert hat, sollte nach 2-3 Sekunden folgender Screen zu sehen sein: ![](./setup_pictures/ForkSuccess.png)

Du hast jetzt eine Kopie des Repositories, als nächstes setzen wir VSCode auf und laden das Repo herunter, damit du mit dem Tutorial loslegen kannst.

Merke dir die URL deines Repositories, da wir die später noch brauchen. Die URL sollte folgendes Format haben:

https://github.com/DEIN-USERNAME/javascript-template

## 2 Node

Node ist das Programm, welches für uns Javascript ausführt. Den Installer für dein Betriebssystem findest du [hier](https://nodejs.org/en/download). Lade ihn herunter und installiere Node. Ihr könnt alle Einstellungen auf den Standardwerten lassen und einfach immer "Weiter" drücken. Danach solltet ihr euren PC neu starten.

## 3 VSCode (Visual Studio Code)

VSCode ist unser Code Editor - ähnlich wie Word für Fließtext, nur für Code. Wir werden die meiste Zeit in VSCode verbringen.

### 3.1 VSCode installieren

Den Installer für VSCode kannst du [hier](https://code.visualstudio.com/Download) herunterladen. Sobald du VSCode installiert hast, solltest du folgenden Screen sehen: ![](./setup_pictures/VSCodeStartScreen.png)

### 3.2 Git installieren

VSCode sollte euch unten rechts auf das fehlende Programm "git" hinweisen: ![](./setup_pictures/vscode-git.jpg)

Klickt auf "Download Git" und ladet den entsprechenden Installer für euer Betriebssystem herunter: ![](./setup_pictures/git-download.jpg)

Während der Installation von Git werdet ihr nach den Editor Einstellungen gefragt: ![](./setup_pictures/git-editor.jpg)

Wählt hier "Visual Studio Code" aus und drückt auf "Weiter": ![](./setup_pictures/git-editor-code.jpg)

Die restlichen Einstellungen könnt ihr auf den Standardwerten lassen und einfach immer "Weiter" drücken. Es sind sehr viele Einstellungen, das ist normal. Wenn die Installation abgeschlossen ist, startet VSCode neu. Die Fehlermeldung sollte jetzt verschwunden sein.

### 3.3 Extensions

Drücke nun auf den markierten "Extension" Button auf der linken Seite, um den Extension-Marktplatz zu öffnen. Hier kannst du nach Erweiterungen suchen um VSCode zu modifizieren.

#### Prettier

Prettier ist eine Extension, die unseren Code automatisch lesbar und einheitlich formatiert.

Suche und installiere die Extension `Prettier - Code formatter` von Prettier

![](./setup_pictures/VSCodePrettier.png)

#### Git Graph

Git Graph erlaubt es uns, Code von Github zu laden und später auch hochzuladen.

Suche und installiere die Extension `Git Graph` von mhutchie

![](./setup_pictures/VSCodeGitGraph.png)

### 3.4 Clone Git Repository

Damit du endlich mit dem Tutorial loslegen kannst, musst du das vorhin geforkte Repo noch herunterladen. Drücke dazu `Strg+Shift+P`/`Cmd+Shift+P`, und suche nach `Git: clone`.

![](./setup_pictures/GitClone.png)

Drücke Enter, und gebe nun die URL deines geforkten Repositories an:

![](./setup_pictures/GitCloneURL.png)

Noch einmal Enter, und du musst nur noch einen Ordner auf deinem Rechner angeben, in dem das Repository gespeichert werden soll. Such dir einen aus, der dir gut passt. Nach dem Herunterladen, fordert dich VSCode dazu auf das heruntergeladene Repo zu öffnen.

![](./setup_pictures/GitCloneOpen.png)

Eventuell musst du noch bestätigen, dass du den Erstellern des Repositories vertraust. Das tust du natürlich 😉

![](./setup_pictures/GitCloneTrust.png)
### 3.5 Weitere Programme installieren

Das Tutorial benutzt ein paar weitere Programme die wir nun automatisch installieren werden. Dazu klickt ihr in VSCode oben auf "Terminal" und dann auf "New Terminal":

![](./setup_pictures/vscode-terminal.png)

Das sollte das Terminal Fenster öffnen:

![](./setup_pictures/vscode-open-terminal.png)

Wie es weiter geht hängt von eurem Betriebsstem ab:

#### Windows

Dort gebt ihr nun als erstes "cmd" ein und drückt dann auf Enter. Das Ergebnis sollte dann so aussehen ungefähr:

![](./setup_pictures/vscode-cmd.png)

Als nächstes gebt ihr den Befehl `npm install` ein und drückt wieder auf Enter. Das installiert alle Programme die wir für das Tutorial brauchen:

![](./setup_pictures/vscode-npm-install.png)

#### macOS & Linux

Auf macOS  oder Linux gebt ihr einfach den Befehl `npm install` ein und drückt Enter. Das installiert alle Programme die wir für das Tutorial brauchen.

### 3.6 Fertig

Danach könnt ihr das Terminal wieder schließen und VSCode ein letztes Mal neu starten. Ihr solltet nun bereit sein, mit dem Tutorial loszulegen!

Solltet ihr Probleme mit dem Setup haben, zögert bitte nicht euren Betreuer anzusprechen. Wir helfen euch gerne weiter :)

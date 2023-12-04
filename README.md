# Solaris-slutprojekt

Jens Brandels Solaris Slutprojekt

https://jensbrandels.github.io/Solaris-slutprojekt/ här är min pages :)

//////////////////DESIGNAD FÖR 1920x1080p////////////////////////


///////////////VARFÖR JAG GJORT SOM JAG GJORT/////////////////

Min initiala tankegång kring denna uppgiften var att försöka göra detta så simpelt och smidigt jag kunde komma på. Vilket resulterade i att jag skapade upp en "template" i html istället för att använda JS och skapa upp varje element den vägen. 
När jag sen skapat upp hela strukturen i HTML, så kunde jag helt enkelt bara använda DOM och skriva ut rätt information på rätt ställe via innerText och använda mig av templateStrings. 
Den section jag skapat som också har all information om planeterna fungerar även som en knapp tillbaka till planeterna. Tyckte det var snyggt att göra så för att slippa ha en tillbaka-knapp.
För tex månarna som kom i form av strings i en array inom objekten där det fanns dubletter samt tomma arrays beroendes på planet så valde jag att filtrera ut, plocka bara unika strings och göra en if-sats där den kollar ifall den är tom då den då får skriva det.
Jag valde också att ha en transition på mina eventlisteners. Så den funktionen är bara för att få ett skönare "flöde" när man klickar på planeterna istället. (visuellt snyggare)
I slutändan försökte jag först via CSS skapa en stjärnhimmel, men insåg ganska snabbt att det var mycket smidigare att göra detta via en funktion i JS istället. 


//////////////////////////PSEUDOKOD///////////////////////


steg 1 skriv ner alla variabler som jag vet ska kopplas till DOM som alla planeter
steg 2 skapa hide och show funktion på clickback sectionen med info
steg 3 skapa en function som fetchar API och gör det till en json
steg 4 skapa en function som skriver ut de olika sakerna jag behöver via dom
steg 5 skapa en funktion som kan loopa och skriva ut innehållet som en string
steg 6 skapa en knapp på varje planet-ID och gör en eventlistener på dom
steg 7 skriv i varje knapp hur planetens style ska vara så rätt färg hamnar på rätt knapp
steg 8 kasta in API fetch funktionen på varje knapp
steg 9 skapa en reset function som resettar alla keyvalues vi skriver ut i funktionerna


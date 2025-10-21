# Teknisk dokumentation for Tema 8 gruppeprojekt

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  Billeder, fonte og ikoner er organiseret i tydelige mapper for at bevare struktur og overblik i projektet.
  Alle billeder ligger samlet i en img-mappe, hvor vi har opdelt efter formål – fx produktbilleder, logo og ikoner.
  Fonte ligger i en separat fonts-mappe, så de nemt kan genbruges på tværs af projektet.
  Denne struktur gør det lettere at finde og opdatere filer, samtidig med at den sikrer en ryddelig projektmappe.

- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
  CSS- og JavaScript-filer, der bruges på tværs af hele websitet, ligger samlet, så de kan genbruges i flere dele af projektet.
  Filer som general.css og custom.css indeholder fælles stilregler (typografi, farver, spacing og layoutprincipper), mens products.js indeholder JavaScript-funktioner, der styrer den dynamiske visning af produkter.
  Ved at adskille fælles kode fra sidespecifik kode sikres en mere modulær og vedligeholdelsesvenlig struktur.

- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
  Hver side har sin egen HTML-fil samt tilhørende CSS- og JavaScript-filer.
  index.html fungerer som forside, hvor vi introducerer brandet og viser udvalgte produkter.
  products.html fungerer som produktoversigt (listevisning), hvor data fra API’et hentes dynamisk og vises i et grid.
  CSS-filerne index.css og products.css styrer designet for hver enkelt side.
  JavaScript-filen products.js håndterer funktioner som data-fetch, filtrering og interaktion i produktvisningen.
  Denne opdeling gør det nemt at arbejde parallelt i teamet og sikrer, at ændringer i én del af sitet ikke påvirker andre dele utilsigtet.

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
  Vi navngiver alle filer med små bogstaver og bruger camelcase i stedet for mellemrum.
  Det gør filnavnene lette at læse, ensartede og kompatible på tværs af systemer.
  Filenavnet beskriver tydeligt indholdet, fx index.html, products.css eller main.js.

- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  Vi sikrer sammenhæng ved at give filer, der hører til den samme side, ens grundnavn.
  For eksempel hører index.html, index.css og index.js sammen, mens products.html, products.css og products.js hører til produktsiden.
  Derudover har vi en fælles struktur med mapper opdelt efter filtype (css, js, img, fonts), så det er nemt at finde de relevante filer.
  Vi bruger også en fælles “general.css” til globale styles, som gælder for hele websitet.

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)
  Vi placerer script-referencen til vores JavaScript-fil i vores <head> i HTML-filen.

* Når vi placerer den der, er det vigtigt at vi husker at bruge attributten defer.
* Defer betyder at scriptet bliver hentet, men først køres, når hele HTML siden er blevet indlæst.

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  Vi navngiver git-branches efter hvad man er igang med at ændre eller hvilken fil man arbejder i. Dermed er der ingen som sidder med samme fil på samme tid, og på samme tid danner det overblik over hvornår hver ting er ændret, så vi kan gå tilbage og rette efter.

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  - Vi har bruger begge dele alt efter situationen.
- Skal filer have korte forklaringer som kommentarer?
  - Nej

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- https://dummyjson.com/products/${id}
  Til at hente data om et specifikt produkt

- https://dummyjson.com/products/category/${category}
  Til at hente lister med produkter fra de forskellige kategorier vi bruger

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```

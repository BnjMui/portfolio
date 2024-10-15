# portfolio

v_3
I første oppgave skal jeg kommentere hvilke endringer jeg ville kan gjøre, og fordeler/ulemper med disse.
Den første endringen jeg kunne ha gjort er å bruke children i Projects.tsx. Her kan jeg for eksempel ha children på innsiden av <Empty/> komponenten. Fordelen med dette er at komponenten Projects blir mer gjenbrukbar. Ulempen med dette vil jeg si er at det blir mye kode i App.tsx (Ikke nødvendigvis en ulempe).
Jeg kunne også refaktorert den koden som regner ut hvor mange kategorier det er, og hvor mange prosjekter per kategori, til en egen komponent som jeg kaller for eksempel Counts. Via dette blir komponenten mer gjenbrukbar og jeg kan bruke den som children i Projects.tsx

v_2
I denne oppgaven har jeg igjen endret designet på nettsiden, til et som er litt enklere og mer fordøyelig for øynene.
Jeg måtte også bruke path() for å finne frem til json filen i imaginary_database mappen. npm klarte ikke å finne frem når denne lå i en annen mappe.
Ellers er alt ganske likt i fra forrige oppgave, hvor den største forskjellen kanskje blir html-strukturen.
Serveren er ganske lik seg selv i forrige oppgave, hvor største forskjellen er at jeg har refaktorert koden til flere mindre filer.

v_1
OBS(Last sequenceDiagram.png er forsåvidt ikke en del av kravene til oppgaven. Henvender til de to andre .png-filene i mappen for oppgave 1.)

Jeg startet oppgaven med å lage en wireframe, to sekvensdiagram og en .json fil med et eksempel på hvordan jeg tenkte at dataen skulle se ut.

Etter dette gikk jeg videre til html, css og javascript.
I js lagde jeg først funksjonalitet for å hente data fra .json filen, som jeg kopierte inn i application-mappen, som inneholder selve applikasjonen. Deretter lagde jeg funksjonalitet for å lagre dataen fra form i html, men lagret dette i en midlertidig liste i js-filen. exampleData.json ble også modifisert for å passe bedre inn i prosjektet, men hadde et godt utgangspunkt.

Til sist satt jeg opp hono-serveren. Dette gjorde jeg ved hjelp av eksempler fra kursets repository, filene fra timen vi hadde i forrige uke, og dokumentasjon på nett. Kilde til dette er: https://hono.dev/docs/getting-started/basic

Jeg endte opp med å bruke node:fs for å hente og skrive data til .json filen. Dokumentasjonen jeg har brukt til dette: https://www.geeksforgeeks.org/how-to-add-data-in-json-file-using-node-js/

Grunnen til at wireframe og nettside ikke samsvarer helt er at jeg har i ettertid utviklet designet videre fra wireframen jeg i utgangspunktet lagde.

Helt til slutt valgte jeg å lage et nytt sekvensdiagram med kunnskapen jeg nå har fått. Jeg ble aldri helt fornøyd med de to første sekvensdiagrammene, men det var det jeg fikk til å lage med nåværende kunnskap.

I denne oppgaven valgte jeg å gjøre det mulig for serveren å skrive til og hente fra json filen exampleData.json, ettersom jeg selv mener dette er relevant for kurset, og ønsker meg så mye kunnskap som mulig.

I et mer realistisk scenario, eller kanskje videre utvikling av denne applikasjonen, planlegger jeg å legge til en remove/change-funksjon, i tilfelle man legger til feil data, eller ønsker å fjerne et prosjekt fra applikasjonen.

# portfolio_v1

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

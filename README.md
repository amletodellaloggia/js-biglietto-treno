Esercizio
===
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Realizzate prima un file README.md in cui mettere il testo dell'esercizio e scomponente il problema in sotto problemi. 
Numero minimo di push: 5

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60
===
SVOLGIMENTO:

1.
Stabilire Prezzo al KM

  1.1 Acquisire KM UTENTE
  1.2 Acquisire ETA' UTENTE

Calcolare COSTO per KM inserito da UTENTE
Calcolare il PREZZO FINALE

2.
Stabilire uno sconto in base a ETA' UTENTE e applicarlo a PREZZO FINALE

 2.1 --- se ETA' ACQUISITA UTENTE (fascia1)
  Stabilire sconto prima fascia età al 20%
  Applicare al PREZZO FINALE lo sconto e aggiornare il risultato di PREZZO FINALE

 2.2 --- altrimenti se ETA' ACQUISITA UTENTE (fascia2)
  Stabilire sconto seconda fascia età al 40%
  Applicare al PREZZO FINALE lo sconto e aggiornare il risultato di PREZZO FINALE

 2.3 --- altrimenti (ETA' ACQUISITA diversa da fascia1 e fascia2)
  PREZZO FINALE equivale a COSTO per KM inserito da UTENTE

3.
Restituire a UTENTE il PREZZO FINALE aggiornato, con arrotondamento di 2 decimali
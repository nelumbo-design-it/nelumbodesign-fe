Definisci la tua palette personalizzata:

scss
Copy code
$custom-primary: mat-palette($custom-blue);
Utilizza le diverse gradazioni:

Ad esempio, se vuoi utilizzare la gradazione 500 del tuo colore primario personalizzato, puoi farlo così:

scss
Copy code
background-color: mat-color($custom-primary, 500);
Se vuoi utilizzare una delle gradazioni "accent" (ad esempio A200), puoi farlo in questo modo:

scss
Copy code
background-color: mat-color($custom-primary, A200);
Esempio di utilizzo in una classe CSS:

Supponiamo che tu voglia definire una classe CSS per un bottone che utilizza la gradazione 500 del tuo colore primario come colore di sfondo e la gradazione A200 come colore del testo. Ecco come puoi farlo:

scss
Copy code
.my-custom-button {
  background-color: mat-color($custom-primary, 500);
  color: mat-color($custom-primary, A200);
}
Ricorda che mat-color è una funzione fornita da Angular Material che ti permette di estrarre una specifica gradazione da una palette. Puoi utilizzarla ogni volta che hai bisogno di accedere a una specifica gradazione della tua palette personalizzata.
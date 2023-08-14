import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent {
  public faqs = [
    {
      title: 'Che tipo di servizi offrite?',
      response: 'Offriamo una vasta gamma di servizi digitali, tra cui la creazione e realizzazione di siti web, ottimizzazione SEO, web marketing, e molto altro.'
    },
    {
      title: 'Cosa significa "ottimizzazione SEO"?',
      response: 'L\'ottimizzazione SEO riguarda una serie di strategie e tecniche utilizzate per migliorare la visibilità di un sito web sui motori di ricerca, aumentando così il traffico organico e la potenziale clientela.'
    },
    {
      title: 'Offrite servizi di restyling per siti web esistenti?',
      response: 'Sì, offriamo servizi di restyling per dare un nuovo look al tuo sito web, rendendolo più moderno, funzionale e ottimizzato per i motori di ricerca.'
    },
    {
      title: 'Posso avere un sito web responsive?',
      response: 'Assolutamente sì. Tutti i siti web che progettiamo sono responsive, il che significa che si adattano perfettamente a qualsiasi dispositivo, sia esso un desktop, un tablet o uno smartphone.'
    },
    {
      title: 'Che piattaforme utilizzate per creare siti web?',
      response: 'Utilizziamo diverse piattaforme in base alle esigenze del cliente, tra cui WordPress e Shopify.'
    },
    {
      title: 'Cosa sono le landing page e perché sono importanti?',
      response: 'Una landing page è una pagina web creata specificamente per una campagna pubblicitaria. È dove un visitatore "atterra" dopo aver cliccato su un annuncio o un link. Sono essenziali per guidare i visitatori verso una specifica azione, come l\'acquisto di un prodotto o la registrazione a una newsletter.'
    },
    {
      title: 'Come garantite la sicurezza del mio sito web?',
      response: 'Adottiamo diverse misure di sicurezza, tra cui l\'uso di certificati SSL, la protezione contro attacchi DDoS e la regolare manutenzione e aggiornamento del sito e dei suoi plugin.'
    },
    {
      title: 'Quanto tempo ci vuole per creare un sito web?',
      response: 'Il tempo necessario per sviluppare un sito web dipende dalla complessità del progetto. Tuttavia, ci impegniamo sempre a rispettare le scadenze concordate con il cliente.'
    },
  ]
  public panelOpenState: boolean = false;
}

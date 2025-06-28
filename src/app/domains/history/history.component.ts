import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TimelineEvent } from '../../shared/interfaces/chruch.interfaces';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {

  selectedYear = signal<number>(2006);
  isTransitioning = signal<boolean>(false);

  timelineEvents: TimelineEvent[] = [
    {
      year: 1971,
      title: 'De start van een droom',
      description: 'Het begin van de plannen voor een modern ziekenhuis in Amsterdam Nieuw-West. Een ambitieus project dat de zorgverlening zou revolutioneren.',
      image: '/placeholder.svg?height=400&width=600'
    },
    {
      year: 1975,
      title: 'Eerste steen gelegd',
      description: 'De officiële start van de bouw van het Slotervaartziekenhuis. Een mijlpaal in de Nederlandse zorggeschiedenis.',
      image: '/placeholder.svg?height=400&width=600'
    },
    {
      year: 1978,
      title: 'Opening van het ziekenhuis',
      description: 'Het Slotervaartziekenhuis opent officieel zijn deuren en begint met het verlenen van zorg aan de gemeenschap.',
      image: '/placeholder.svg?height=400&width=600'
    },
    {
      year: 2006,
      title: 'Het Slotervaartziekenhuis gered',
      description: 'Het Slotervaartziekenhuis is gered van faillissement en wordt het eerste geprivatiseerde ziekenhuis van Nederland.',
      image: '/placeholder.svg?height=400&width=600'
    },
    {
      year: 2013,
      title: 'Modernisering en uitbreiding',
      description: 'Grote investeringen in nieuwe technologie en uitbreiding van de faciliteiten om de zorg verder te verbeteren.',
      image: '/placeholder.svg?height=400&width=600'
    },
    {
      year: 2018,
      title: 'Digitale transformatie',
      description: 'Implementatie van geavanceerde digitale systemen en elektronische patiëntendossiers voor betere zorgverlening.',
      image: '/placeholder.svg?height=400&width=600'
    },
    {
      year: 2020,
      title: 'Een nieuwe eigenaar',
      description: 'Zadelhoff is definitief eigenaar van het voormalige Slotervaartziekenhuis.',
      image: '/placeholder.svg?height=400&width=600'
    }
  ];

  selectedEvent = computed(() => {
    return this.timelineEvents.find(event => event.year === this.selectedYear()) || this.timelineEvents[3];
  });

  selectYear(year: number) {
    if (this.selectedYear() === year) return;

    this.isTransitioning.set(true);

    setTimeout(() => {
      this.selectedYear.set(year);
      setTimeout(() => {
        this.isTransitioning.set(false);
      }, 50);
    }, 350);
  }

}

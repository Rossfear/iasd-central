import { ChangeDetectionStrategy, Component } from '@angular/core';
import { News } from '../../core/models/news.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {
  newsList: News[] = [
    {
      id: 1,
      title: "Semana 24: Instalación de Cubierta Completada",
      date: "15 Dic 2024",
      excerpt:
        "La nueva cubierta del templo ha sido instalada exitosamente, marcando un hito importante en la construcción.",
      category: "construccion"
    },
    {
      id: 2,
      title: "Evento Especial: Concierto Benéfico",
      date: "10 Dic 2024",
      excerpt: "El próximo sábado tendremos un concierto especial para recaudar fondos para la reconstrucción.",
      category: "evento"
    },
    {
      id: 3,
      title: "75% de Avance en la Construcción",
      date: "5 Dic 2024",
      excerpt: "Hemos alcanzado el 75% de avance en la construcción del nuevo templo, superando nuestras expectativas.",
      category: "construccion"
    },
  ]
}

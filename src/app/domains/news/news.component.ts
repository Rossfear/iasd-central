import { ChangeDetectionStrategy, Component } from '@angular/core';
import { News } from '../../core/models/news.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterLink],
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


  sections = [
    {
      title: "Saludo del Pastor",
      description: "Mensaje especial de nuestro pastor para esta celebración",
      link: "/saludo-pastor",
      buttonText: "Leer Mensaje",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "Departamentos",
      description: "Conoce las actividades y ministerios de nuestra iglesia",
      link: "/departamentos",
      buttonText: "Ver Departamentos",
      gradient: "from-green-400 to-green-600",
    },
    {
      title: "Programa del Día",
      description: "Cronograma completo de la celebración del aniversario",
      link: "/programa",
      buttonText: "Ver Programa",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      title: "Galería de Recuerdos",
      description: "Fotos y momentos especiales de nuestra historia",
      link: "/recuerdos",
      buttonText: "Ver Galería",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Pastores Anteriores",
      description: "Saludos y mensajes de quienes nos han pastoreado",
      link: "/pastores-anteriores",
      buttonText: "Ver Mensajes",
      gradient: "from-indigo-400 to-indigo-600",
    },
  ]

  highlights = [
    {
      icon: "🎉",
      title: "Celebración",
      description: "Un día especial de alabanza y gratitud",
    },
    {
      icon: "👥",
      title: "Comunidad",
      description: "Unidos en fe y propósito",
    },
    {
      icon: "📖",
      title: "Palabra",
      description: "Fundamentados en las Escrituras",
    },
    {
      icon: "🙏",
      title: "Oración",
      description: "Conectados con nuestro Creador",
    },
  ]
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {
  isMobile = window.innerWidth < 768

  timelineEvents = [
    {
      year: "1940",
      title: "Fundación",
      desc: "Un pequeño grupo de creyentes se reúne por primera vez",
      side: "left",
    },
    {
      year: "1955",
      title: "Primer Templo",
      desc: "Construcción del primer edificio permanente",
      side: "right",
    },
    {
      year: "1980",
      title: "Expansión",
      desc: "Ampliación para 300 miembros",
      side: "left",
    },
    {
      year: "2010",
      title: "Renovación",
      desc: "Modernización de instalaciones",
      side: "right",
    },
    {
      year: "2024",
      title: "Reconstrucción",
      desc: "Inicio del nuevo proyecto arquitectónico",
      side: "left",
    },
    {
      year: "2025",
      title: "85° Aniversario",
      desc: "Inauguración del nuevo templo",
      side: "right",
    },
  ];

}

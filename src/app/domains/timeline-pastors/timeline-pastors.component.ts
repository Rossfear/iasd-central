import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChruchDataService } from '../../core/services/chruch-data.service';
import { Pastor, PastorPeriod } from '../../shared/interfaces/chruch.interfaces';

@Component({
  selector: 'app-timeline-pastors',
  standalone: true,
  imports: [],
  templateUrl: './timeline-pastors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelinePastorsComponent {

  currentIndex = 0

  pastorPeriods: PastorPeriod[] = [
    {
      startYear: 1995,
      endYear: 2000,
      pastor: {
        id: "1",
        name: "Pastor Roberto Silva",
        photo: "/placeholder.svg?height=400&width=300",
        period: "1995 - 2000",
        message:
          "Fue un privilegio ser parte de los primeros años de esta congregación. Ver cómo Dios bendijo cada paso fue verdaderamente inspirador.",
      },
      achievements: [
        "Fundación oficial de la congregación",
        "Establecimiento de los primeros ministerios",
        "Crecimiento de 15 a 45 miembros",
        "Organización de la primera junta directiva",
        "Inicio de programas comunitarios",
      ],
      specialMemories: [
        "Primer bautismo en el río local con 8 candidatos",
        "Construcción del primer salón de reuniones",
        "Campaña evangelística que duró 3 semanas",
        "Establecimiento del coro de la iglesia",
      ],
    },
    {
      startYear: 2000,
      endYear: 2005,
      pastor: {
        id: "2",
        name: "Pastor Carlos Hernández",
        photo: "/placeholder.svg?height=400&width=300",
        period: "2000 - 2005",
        message:
          "Durante estos años vimos la mano de Dios obrando poderosamente. La adquisición del terreno fue un milagro que nunca olvidaremos.",
      },
      achievements: [
        "Adquisición del terreno para el templo",
        "Crecimiento a 80 miembros activos",
        "Establecimiento de Escuela Sabática para niños",
        "Creación del ministerio de jóvenes",
        "Primera campaña de salud comunitaria",
      ],
      specialMemories: [
        "Ceremonia de bendición del terreno",
        "Primer campamento de jóvenes",
        "Visita del presidente de la Asociación",
        "Establecimiento del grupo de damas",
      ],
    },
    {
      startYear: 2005,
      endYear: 2010,
      pastor: {
        id: "3",
        name: "Pastor Miguel Rodríguez",
        photo: "/placeholder.svg?height=400&width=300",
        period: "2005 - 2010",
        message:
          "Tuve el honor de liderar durante la construcción del templo. Ver a la congregación trabajar unida fue una bendición extraordinaria.",
      },
      achievements: [
        "Construcción completa del templo",
        "Inauguración oficial del edificio",
        "Crecimiento a 120 miembros",
        "Establecimiento del ministerio de música",
        "Programa de visitación sistemática",
      ],
      specialMemories: [
        "Colocación de la primera piedra",
        "Jornadas de trabajo voluntario los sábados",
        "Ceremonia de dedicación del templo",
        "Primer concierto en el nuevo santuario",
      ],
    },
    {
      startYear: 2010,
      endYear: 2015,
      pastor: {
        id: "4",
        name: "Pastor David Morales",
        photo: "/placeholder.svg?height=400&width=300",
        period: "2010 - 2015",
        message:
          "Estos años fueron de consolidación y crecimiento espiritual. La iglesia maduró en su fe y compromiso misionero.",
      },
      achievements: [
        "Establecimiento de células de crecimiento",
        "Programa de capacitación de líderes",
        "Crecimiento a 180 miembros",
        "Ministerio de consejería familiar",
        "Programa de becas estudiantiles",
      ],
      specialMemories: [
        "Primera graduación de líderes laicos",
        "Campaña 'Impacto Esperanza'",
        "Construcción del salón social",
        "Establecimiento de la biblioteca",
      ],
    },
    {
      startYear: 2015,
      endYear: 2020,
      pastor: {
        id: "5",
        name: "Pastor Luis Fernández",
        photo: "/placeholder.svg?height=400&width=300",
        period: "2015 - 2020",
        message:
          "Fueron años de grandes desafíos pero también de grandes bendiciones. La pandemia nos enseñó a ser iglesia de nuevas maneras.",
      },
      achievements: [
        "Implementación de servicios digitales",
        "Programa de ayuda alimentaria",
        "Crecimiento a 220 miembros",
        "Ministerio de alcance juvenil",
        "Establecimiento de grupos pequeños virtuales",
      ],
      specialMemories: [
        "Primer servicio transmitido en vivo",
        "Distribución de 500 canastas familiares",
        "Bautismo masivo de 25 personas",
        "Celebración del 20° aniversario",
      ],
    },
  ]

  ngOnInit() {
    // Auto-advance every 15 seconds
    setInterval(() => {
      if (this.currentIndex < this.pastorPeriods.length - 1) {
        this.currentIndex++
      } else {
        this.currentIndex = 0
      }
    }, 15000)
  }

  get selectedPastor(): PastorPeriod {
    return this.pastorPeriods[this.currentIndex]
  }

  selectPastor(index: number) {
    this.currentIndex = index
  }

  nextPastor() {
    if (this.currentIndex < this.pastorPeriods.length - 1) {
      this.currentIndex++
    }
  }

  previousPastor() {
    if (this.currentIndex > 0) {
      this.currentIndex--
    }
  }

  getActiveLinePosition(): { left: number; width: number } {
    if (this.pastorPeriods.length <= 1) return { left: 0, width: 0 }

    const segmentWidth = 100 / (this.pastorPeriods.length - 1)
    const left = this.currentIndex * segmentWidth
    const width = this.currentIndex === this.pastorPeriods.length - 1 ? 0 : segmentWidth

    return { left, width }
  }

}

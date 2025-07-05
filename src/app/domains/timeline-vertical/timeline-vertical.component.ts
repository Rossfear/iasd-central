import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';



interface PastoralPeriod {
  startYear: number
  endYear: number
  pastor: string
  duration?: string
  isActive?: boolean
  id: string
}

interface TimelineDecade {
  decade: string
  years: number[]
  pastors: PastoralPeriod[]
  isSelected: boolean
}


@Component({
  selector: 'app-timeline-vertical',
  standalone: true,
  imports: [],
  templateUrl: './timeline-vertical.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `

    `
  ]
})
export class TimelineVerticalComponent {

  selectedPastorId = signal<string>("pastor-34")

  // Datos completos de los pastores con IDs únicos
  pastoralData: PastoralPeriod[] = [
    { startYear: 2021, endYear: 2025, pastor: "Pr. Ronald León Aponte", isActive: true, id: "pastor-34" },
    { startYear: 2018, endYear: 2020, pastor: "Pr. Jaime Cairampoma", id: "pastor-33" },
    { startYear: 2017, endYear: 2017, pastor: "Pr. Carlos Castro", id: "pastor-32" },
    { startYear: 2014, endYear: 2016, pastor: "Pr. Ever Rojas", id: "pastor-31" },
    { startYear: 2010, endYear: 2013, pastor: "Pr. Santos Corrales", id: "pastor-30" },
    { startYear: 2009, endYear: 2009, pastor: "Pr. Gerardo Medina", duration: "12 meses", id: "pastor-29" },
    { startYear: 2008, endYear: 2008, pastor: "Pr. Jorge Reyes", duration: "12 meses", id: "pastor-28" },
    { startYear: 2005, endYear: 2007, pastor: "Pr. Ebert Durand", id: "pastor-27" },
    { startYear: 2003, endYear: 2004, pastor: "Pr. Francisco Gonzáles", id: "pastor-26" },
    { startYear: 2002, endYear: 2002, pastor: "Pr. Arnulfo Chico", duration: "12 meses", id: "pastor-25" },
    { startYear: 1998, endYear: 2001, pastor: "Pr. Eleuterio Guerrero", id: "pastor-24" },
    { startYear: 1996, endYear: 1997, pastor: "Pr. Abner Tello", id: "pastor-23" },
    { startYear: 1995, endYear: 1995, pastor: "Pr. Jaime Vaca", id: "pastor-22" },
    { startYear: 1994, endYear: 1994, pastor: "Pr. Julio Godoy", duration: "8 meses", id: "pastor-21" },
    { startYear: 1994, endYear: 1994, pastor: "Pr. Saúd Elías", duration: "4 meses", id: "pastor-20" },
    { startYear: 1992, endYear: 1993, pastor: "Pr. Wladimiro Silva", id: "pastor-19" },
    { startYear: 1988, endYear: 1991, pastor: "Pr. Pedro Villanueva", id: "pastor-18" },
    { startYear: 1986, endYear: 1987, pastor: "Pr. Wladimiro Silva", id: "pastor-17" },
    { startYear: 1983, endYear: 1985, pastor: "Pr. Vosler García", id: "pastor-16" },
    { startYear: 1980, endYear: 1982, pastor: "Pr. Claudio Huamán", id: "pastor-15" },
    { startYear: 1976, endYear: 1979, pastor: "Pr. Rodrigo Gutiérrez", id: "pastor-14" },
    { startYear: 1973, endYear: 1975, pastor: "Pr. Pedro Flores", id: "pastor-13" },
    { startYear: 1971, endYear: 1972, pastor: "Pr. Leonardo Pinedo", id: "pastor-12" },
    { startYear: 1969, endYear: 1970, pastor: "Pr. Víctor Mestanza", id: "pastor-11" },
    { startYear: 1965, endYear: 1968, pastor: "Pr. Norberto Franco", id: "pastor-10" },
    { startYear: 1961, endYear: 1964, pastor: "Pr. Raúl Alarcón", id: "pastor-9" },
    { startYear: 1959, endYear: 1960, pastor: "Pr. Licinio Bendezú", id: "pastor-8" },
    { startYear: 1956, endYear: 1958, pastor: "Pr. Raúl Alvarez", id: "pastor-7" },
    { startYear: 1953, endYear: 1955, pastor: "Pr. Gonzalo Alva", id: "pastor-6" },
    { startYear: 1951, endYear: 1952, pastor: "Pr. Juan P. Ramos", id: "pastor-5" },
    { startYear: 1947, endYear: 1950, pastor: "Pr. Agustín Alva y Alva", id: "pastor-4" },
    { startYear: 1945, endYear: 1946, pastor: "Pr. Menardo León", id: "pastor-3" },
    { startYear: 1942, endYear: 1944, pastor: "Pr. Agustín Alva y Alva", id: "pastor-2" },
    { startYear: 1940, endYear: 1941, pastor: "Misionero Moisés Tenorio", id: "pastor-1" },
    { startYear: 1938, endYear: 1940, pastor: "Misionero Cayetano Díaz", id: "pastor-0" },
  ];

  selectedPastor = computed(() => {
    return this.pastoralData.find((pastor) => pastor.id === this.selectedPastorId()) || this.pastoralData[32]
  })

  totalPastors = computed(() => {
    return this.pastoralData.length
  })

  longestService = computed(() => {
    let longest = this.pastoralData[0]
    let maxYears = 0

    this.pastoralData.forEach((pastor) => {
      const years = pastor.endYear - pastor.startYear + 1
      if (years > maxYears) {
        maxYears = years
        longest = pastor
      }
    })

    return { pastor: longest, years: maxYears }
  })

  timelineWidth = computed(() => {
    return this.pastoralData.length * 120 + 100 // 120px per pastor + padding
  })

  selectPastor(pastorId: string) {
    this.selectedPastorId.set(pastorId)
  }

  calculateYears(startYear: number, endYear: number): string {
    const years = endYear - startYear + 1
    if (years === 1) {
      return "1 año"
    }
    return `${years} años`
  }

  getInitials(name: string): string {
    const parts = name.split(" ")
    if (parts.length >= 2) {
      return (parts[1].charAt(0) + (parts[2]?.charAt(0) || parts[1].charAt(1))).toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  getShortName(name: string): string {
    const parts = name.split(" ")
    if (parts.length >= 3) {
      return `${parts[1]} ${parts[2]}`
    }
    return parts.slice(1).join(" ")
  }

  getPastorNumber(pastorId: string): number {
    return Number.parseInt(pastorId.replace("pastor-", ""))
  }

  getPastorWidth(pastor: PastoralPeriod): number {
    const years = pastor.endYear - pastor.startYear + 1
    return Math.max(80, years * 20) // Minimum 80px, 20px per year
  }

}

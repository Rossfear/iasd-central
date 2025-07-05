import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TimelineEvent } from '../../shared/interfaces/chruch.interfaces';

interface PastoralPeriod {
  startYear: number
  endYear: number
  pastor: string
  duration?: string
  isActive?: boolean
}

interface TimelineDecade {
  decade: string
  years: number[]
  pastors: PastoralPeriod[]
  isSelected: boolean
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      /* Custom scrollbar for pastoral list */
      .overflow-y-auto::-webkit-scrollbar {
        width: 4px;
      }

      .overflow-y-auto::-webkit-scrollbar-track {
        background: rgba(71, 85, 105, 0.3);
        border-radius: 2px;
      }

      .overflow-y-auto::-webkit-scrollbar-thumb {
        background: rgba(251, 146, 60, 0.5);
        border-radius: 2px;
      }

      .overflow-y-auto::-webkit-scrollbar-thumb:hover {
        background: rgba(251, 146, 60, 0.7);
      }
    `
  ]
})
export class HistoryComponent {

  selectedDecadeKey = signal<string>("2020s")

  // Datos completos de los pastores
  private pastoralData: PastoralPeriod[] = [
    { startYear: 1942, endYear: 1944, pastor: "Pr. Agustín Alva y Alva" },
    { startYear: 1945, endYear: 1946, pastor: "Pr. Menardo León" },
    { startYear: 1947, endYear: 1950, pastor: "Pr. Agustín Alva y Alva" },
    { startYear: 1951, endYear: 1952, pastor: "Pr. Juan P. Ramos" },
    { startYear: 1953, endYear: 1955, pastor: "Pr. Gonzalo Alva" },
    { startYear: 1956, endYear: 1958, pastor: "Pr. Raúl Alvarez" },
    { startYear: 1959, endYear: 1960, pastor: "Pr. Higinio Bendezu" },
    { startYear: 1961, endYear: 1964, pastor: "Pr. Raúl Alvarez" },
    { startYear: 1965, endYear: 1968, pastor: "Pr. Norberto Franco" },
    { startYear: 1969, endYear: 1970, pastor: "Pr. Víctor Ramirez" },
    { startYear: 1971, endYear: 1972, pastor: "Pr. Leonardo Pinedo" },
    { startYear: 1973, endYear: 1975, pastor: "Pr. Pedro Flores" },
    { startYear: 1976, endYear: 1979, pastor: "Pr. Rodrigo Gonzales" },
    { startYear: 1980, endYear: 1982, pastor: "Pr. Claudio Huamán" },
    { startYear: 1983, endYear: 1985, pastor: "Pr. Yosler García" },
    { startYear: 1986, endYear: 1987, pastor: "Pr. Wladimiro Alva" },
    { startYear: 1988, endYear: 1991, pastor: "Pr. Pedro Villanueva" },
    { startYear: 1992, endYear: 1993, pastor: "Pr. Wladimiro Alva" },
    { startYear: 1994, endYear: 1994, pastor: "Pr. Saúl Elías", duration: "4 meses" },
    { startYear: 1994, endYear: 1994, pastor: "Pr. Julio Godoy", duration: "8 meses" },
    { startYear: 1995, endYear: 1995, pastor: "Pr. Jaime Chávez" },
    { startYear: 1996, endYear: 1997, pastor: "Pr. Abner Tello" },
    { startYear: 1998, endYear: 2001, pastor: "Pr. Eleuterio Mamerto" },
    { startYear: 2002, endYear: 2002, pastor: "Pr. Arnulfo Chico", duration: "12 meses" },
    { startYear: 2003, endYear: 2004, pastor: "Pr. Francisco Gonzales" },
    { startYear: 2005, endYear: 2007, pastor: "Pr. Ebert Pinedo" },
    { startYear: 2008, endYear: 2008, pastor: "Pr. Jorge Reyes", duration: "12 meses" },
    { startYear: 2009, endYear: 2009, pastor: "Pr. Gerardo Castillo", duration: "12 meses" },
    { startYear: 2010, endYear: 2013, pastor: "Pr. Santos Corrales" },
    { startYear: 2014, endYear: 2016, pastor: "Pr. Ever Rojas" },
    { startYear: 2017, endYear: 2017, pastor: "Pr. Gerardo Castillo" },
    { startYear: 2018, endYear: 2020, pastor: "Pr. Jaime Cairampoma" },
    { startYear: 2021, endYear: 2024, pastor: "Pr. Ronald León Aguilar", isActive: true },
  ]

  timelineDecades: TimelineDecade[] = [
    {
      decade: "1940s",
      years: [1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949],
      pastors: this.getPastorsForDecade(1940, 1949),
      isSelected: false,
    },
    {
      decade: "1950s",
      years: [1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959],
      pastors: this.getPastorsForDecade(1950, 1959),
      isSelected: false,
    },
    {
      decade: "1960s",
      years: [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969],
      pastors: this.getPastorsForDecade(1960, 1969),
      isSelected: false,
    },
    {
      decade: "1970s",
      years: [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979],
      pastors: this.getPastorsForDecade(1970, 1979),
      isSelected: false,
    },
    {
      decade: "1980s",
      years: [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989],
      pastors: this.getPastorsForDecade(1980, 1989),
      isSelected: false,
    },
    {
      decade: "1990s",
      years: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      pastors: this.getPastorsForDecade(1990, 1999),
      isSelected: false,
    },
    {
      decade: "2000s",
      years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009],
      pastors: this.getPastorsForDecade(2000, 2009),
      isSelected: false,
    },
    {
      decade: "2010s",
      years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
      pastors: this.getPastorsForDecade(2010, 2019),
      isSelected: false,
    },
    {
      decade: "2020s",
      years: [2020, 2021, 2022, 2023, 2024],
      pastors: this.getPastorsForDecade(2020, 2024),
      isSelected: true,
    },
  ]

  selectedDecade = computed(() => {
    return this.timelineDecades.find((decade) => decade.decade === this.selectedDecadeKey()) || this.timelineDecades[8]
  })

  totalPastors = computed(() => {
    return this.pastoralData.length
  })

  private getPastorsForDecade(startDecade: number, endDecade: number): PastoralPeriod[] {
    return this.pastoralData.filter(
      (pastor) =>
        (pastor.startYear >= startDecade && pastor.startYear <= endDecade) ||
        (pastor.endYear >= startDecade && pastor.endYear <= endDecade) ||
        (pastor.startYear <= startDecade && pastor.endYear >= endDecade),
    )
  }

  selectDecade(decade: string) {
    this.selectedDecadeKey.set(decade)
  }

  calculateYears(startYear: number, endYear: number): string {
    const years = endYear - startYear + 1
    if (years === 1) {
      return "1 año"
    }
    return `${years} años`
  }

}

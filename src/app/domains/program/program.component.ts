import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChruchDataService } from '../../core/services/chruch-data.service';
import { ProgramEvent } from '../../shared/interfaces/chruch.interfaces';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [],
  templateUrl: './program.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramComponent {
  programEvents: ProgramEvent[] = []

  churchDataService = inject(ChruchDataService)

  ngOnInit() {
    this.programEvents = this.churchDataService.getAnniversaryProgram()
  }

  getEventIcon(type: string): string {
    const icons: { [key: string]: string } = {
      worship: "🎵",
      presentation: "📢",
      music: "🎼",
      prayer: "🙏",
      special: "⭐",
    }
    return icons[type] || "📅"
  }

  getEventIconClass(type: string): string {
    const classes: { [key: string]: string } = {
      worship: "bg-blue-500",
      presentation: "bg-green-500",
      music: "bg-purple-500",
      prayer: "bg-indigo-500",
      special: "bg-yellow-500",
    }
    return classes[type] || "bg-gray-500"
  }

  getEventTypeClass(type: string): string {
    const classes: { [key: string]: string } = {
      worship: "bg-blue-100 text-blue-800",
      presentation: "bg-green-100 text-green-800",
      music: "bg-purple-100 text-purple-800",
      prayer: "bg-indigo-100 text-indigo-800",
      special: "bg-yellow-100 text-yellow-800",
    }
    return classes[type] || "bg-gray-100 text-gray-800"
  }

  getEventTypeLabel(type: string): string {
    const labels: { [key: string]: string } = {
      worship: "Adoración",
      presentation: "Presentación",
      music: "Música",
      prayer: "Oración",
      special: "Especial",
    }
    return labels[type] || "Evento"
  }
}

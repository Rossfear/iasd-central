import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  activeTab = "galeria"

  tabs = [
    { id: "galeria", label: "Galería Visual" },
    { id: "metricas", label: "Métricas" },
    { id: "planos", label: "Planos" },
  ]

  progressImages = [
    { title: "Antes - Templo Original", url: "/placeholder.svg?height=300&width=400" },
    { title: "Durante - Demolición", url: "/placeholder.svg?height=300&width=400" },
    { title: "Actual - Construcción", url: "/placeholder.svg?height=300&width=400" },
  ]
}

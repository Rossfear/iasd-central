import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Testimonial } from '../../core/models/testimonial.model';

@Component({
  selector: 'app-testimony',
  standalone: true,
  imports: [],
  templateUrl: './testimony.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonyComponent {
  testimonials: Testimonial[] = [
    {
      name: "María González",
      role: "Miembro fundador",
      quote:
        "Ver crecer esta iglesia durante 85 años ha sido una bendición. Ahora, con la reconstrucción, vemos el futuro con esperanza.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Pastor Juan Martínez",
      role: "Pastor Principal",
      quote:
        "Este nuevo templo será un faro de esperanza para las próximas generaciones. Cada ladrillo representa una oración.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]
}

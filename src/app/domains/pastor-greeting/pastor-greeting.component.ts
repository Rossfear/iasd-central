import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Pastor } from '../../shared/interfaces/chruch.interfaces';
import { ChruchDataService } from '../../core/services/chruch-data.service';

@Component({
  selector: 'app-pastor-greeting',
  standalone: true,
  imports: [],
  templateUrl: './pastor-greeting.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PastorGreetingComponent implements OnInit {
  currentPastor: Pastor | null = null
  churchDataService = inject(ChruchDataService)

  ngOnInit() {
    this.currentPastor = this.churchDataService.getCurrentPastor()
  }

  getGreetingIntro(): string {
    return "Queridos hermanos y amigos, es con gran gozo que celebramos este aniversario especial de nuestra iglesia."
  }

  getMessageParagraphs(): string[] {
    return [
      "Durante estos años, hemos sido testigos de las maravillosas bendiciones de Dios sobre nuestra congregación. Hemos crecido no solo en número, sino también en fe, en amor fraternal y en nuestro compromiso con la misión que Cristo nos ha encomendado.",

      "Este aniversario es una oportunidad para reflexionar sobre el camino recorrido, agradecer a Dios por Su fidelidad constante, y renovar nuestro compromiso de ser Sus fieles siervos en esta comunidad.",

      "Quiero expresar mi profunda gratitud a cada miembro de esta iglesia por su dedicación, su servicio desinteresado y su apoyo constante. Juntos hemos construido más que un edificio; hemos construido una familia espiritual unida por el amor de Cristo.",

      "Mirando hacia el futuro, oro para que Dios continúe guiando nuestros pasos, que sigamos siendo instrumentos de Su gracia, y que muchas más personas puedan encontrar en nuestra iglesia un hogar espiritual donde experimentar el amor transformador de Jesús.",
    ]
  }
}

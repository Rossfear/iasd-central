import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChruchDataService } from '../../core/services/chruch-data.service';
import { Pastor } from '../../shared/interfaces/chruch.interfaces';

@Component({
  selector: 'app-timeline-pastors',
  standalone: true,
  imports: [],
  templateUrl: './timeline-pastors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelinePastorsComponent {
  formerPastors: Pastor[] = []

  churchDataService = inject(ChruchDataService)

  ngOnInit() {
    this.formerPastors = this.churchDataService.getFormerPastors()
  }

  getGreetingMessage(pastor: Pastor): string {
    const greetings = [
      "Es un honor saludar a la querida congregación en este aniversario tan especial.",
      "Con gran alegría me dirijo a ustedes en esta celebración memorable.",
      "Que bendición poder enviar mis saludos en este día tan significativo.",
      "Desde la distancia, pero con el corazón cerca, los saludo con amor fraternal.",
    ]
    return greetings[Math.floor(Math.random() * greetings.length)]
  }

  getMessageParagraphs(pastor: Pastor): string[] {
    return [
      `Durante mis años como pastor de esta querida iglesia (${pastor.period}), pude ser testigo del crecimiento espiritual y numérico de nuestra congregación. Cada momento compartido con ustedes fue una bendición especial.`,

      "Recuerdo con cariño las campañas evangelísticas, los bautismos, las visitas pastorales, y especialmente los momentos de oración donde sentíamos la presencia del Espíritu Santo de manera especial.",

      "Veo con alegría cómo la iglesia ha continuado creciendo y bendiciendo a la comunidad. El compromiso de los miembros con la misión y su amor por las almas perdidas siempre me ha inspirado profundamente.",

      "Mi oración es que Dios continúe bendiciendo abundantemente a cada familia, que el liderazgo actual sea guiado por la sabiduría divina, y que muchas más personas encuentren a Jesús a través del testimonio de esta iglesia.",
    ]
  }

  getClosingMessage(pastor: Pastor): string {
    const closings = [
      "Que el Señor los bendiga y los guarde siempre en Su amor.",
      "Continúen siendo luz en su comunidad y sal de la tierra.",
      "Que Dios siga usando poderosamente a esta iglesia para Su gloria.",
      "Mis oraciones y bendiciones los acompañan siempre.",
    ]
    return closings[Math.floor(Math.random() * closings.length)]
  }

}

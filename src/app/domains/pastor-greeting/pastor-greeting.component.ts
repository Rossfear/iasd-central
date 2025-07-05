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
    return "82 ANIVERSARIO DE LA IGLESIA CENTRAL DE TRUJILLO “EL CIELO NOS ESPERA"
  }

  getMessageParagraphs(): string[] {
    return [
      "Queridos hermanos de nuestra iglesia Adventista del Séptimo Día Central de Trujillo, reciban el saludo cordial de la familia pastoral León Castillo, por el Octogésimo Segundo Aniversario como iglesia militante en la misión y en la fe, en la espera de Cielos Nuevos y Tierra Nueva.",
      "Estamos muy agradecidos a nuestro Dios por concedernos sus cuidados y sus grandes bendiciones en estos 82 años de vida congregacional. En toda esta travesía hemos sentido al Espíritu Santo ayudándonos a alcanzar nuestros desafíos evangelísticos, en el cumplimiento de la Misión; pero también hemos visto la mano fiel y misericordiosa de Dios proveyendo para nuestras familias y para nuestra iglesia.",
      "Como iglesia, hoy, tenemos un gran desafío en marcha, la construcción de nuestro nuevo templo; este año iniciaremos <strong> la obra de construcción. Por eso mis queridos hermanos, este 82 aniversario es una oportunidad para dar las gracias a Dios, reafirmar nuestro pacto fidelidad y unirnos al proyecto de la construcción de nuestro templo.</strong>",
      "Fijemos hoy nuestros ojos en Cristo, vivamos la palabra del Señor, prediquemos y oremos; es el momento de alistarnos porque Jesús pronto vendrá a llevarnos; “El Cielo Nos Espera”",
    ];
  }
}

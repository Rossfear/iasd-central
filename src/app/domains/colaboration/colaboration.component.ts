import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-colaboration',
  standalone: true,
  imports: [],
  templateUrl: './colaboration.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColaborationComponent {
  colaborationOptions = [
    {
      title: "Donación al 85° Aniversario",
      description: "Contribuye a la construcción del nuevo templo",
      buttonText: "Donar Ahora",
      primary: true,
      iconPath:
        "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
    {
      title: "Voluntariado en Reconstrucción",
      description: "Ofrece tu tiempo y habilidades",
      buttonText: "Ser Voluntario",
      primary: false,
      iconPath:
        "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      title: "Cadena de Oración",
      description: "Únete a nuestras oraciones por la obra",
      buttonText: "Orar Juntos",
      primary: false,
      iconPath:
        "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
  ];

}

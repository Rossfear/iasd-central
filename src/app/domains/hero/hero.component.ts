import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {

  readonly env = environment;

  currentSlide = signal(0)
  private autoPlayInterval?: number

  carouselImages = [

    {
      url: "assets/hero/fachada-ingles-azul.png",
      alt: "Iglesia Adventista - Vista exterior del templo original",
    },
    {
      url: "assets/hero/caminata-ja-oracion.png",
      alt: "Construcción del nuevo templo en progreso",
    },
    {
      url: "assets/hero/campamento-region-uno.png",
      alt: "Celebración de los 85 años de fe",
    },
    {
      url: "assets/hero/ja-retiro-espioritual.png",
      alt: "Comunidad adventista en servicio",
    },
    {
      url: "assets/hero/retiro-panoramico-gp-off.png",
      alt: "Comunidad adventista en servicio",
    },
    {
      url: "assets/hero/jovenes-mrnt.png",
      alt: "Comunidad adventista en servicio",
    },
    {
      url: "assets/hero/jovenes-2025.png",
      alt: "Comunidad adventista en servicio",
    },
    {
      url: "assets/hero/global-youth-day.png",
      alt: "Comunidad adventista en servicio",
    },
    {
      url: "assets/hero/jovenes.png",
      alt: "Comunidad adventista en servicio",
    },
    {
      url: "assets/hero/aventureros.png",
      alt: "Iglesia Adventista - Vista exterior del templo original",
    },
    {
      url: "assets/hero/caleb-lima-nacional.png",
      alt: "Comunidad reunida en oración",
    },
    {
      url: "assets/hero/mas-amor-navidad.png",
      alt: "Comunidad adventista en servicio",
    },
    {
      url: "assets/hero/las-pleyades.png",
      alt: "Comunidad adventista en servicio",
    },
    {
      url: "assets/hero/imagenes-restauradas/IMAGEN UNO.png",
      alt: "Comunidad adventista en servicio",
    },
    {
      url: "assets/hero/imagenes-restauradas/IMAGEN DOS.png",
      alt: "Comunidad adventista en servicio",
    },
    {
      url: "assets/hero/imagenes-restauradas/IMAGEN TRES.png",
      alt: "Comunidad adventista en servicio",
    },
  ]

  ngOnInit() {
    this.startAutoPlay()
  }

  ngOnDestroy() {
    this.stopAutoPlay()
  }

  nextSlide() {
    this.currentSlide.set((this.currentSlide() + 1) % this.carouselImages.length)
    //this.resetAutoPlay()
  }

  previousSlide() {
    this.currentSlide.set(this.currentSlide() === 0 ? this.carouselImages.length - 1 : this.currentSlide() - 1)
    //this.resetAutoPlay()
  }

  goToSlide(index: number) {
    this.currentSlide.set(index)
    //this.resetAutoPlay()
  }

  private startAutoPlay() {
    this.autoPlayInterval = window.setInterval(() => {
      this.nextSlide()
    }, 10000)
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval)
    }
  }

  private resetAutoPlay() {
    this.stopAutoPlay()
    this.startAutoPlay()
  }
}

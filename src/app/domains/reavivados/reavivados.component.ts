import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReavivadosContent, SrrAdventistService } from '../../core/services/srr-adventist.service';
import { BibleApiService } from '../../core/services/bible-api.service';

@Component({
  selector: 'app-reavivados',
  standalone: true,
  imports: [],
  templateUrl: './reavivados.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReavivadosComponent {
  private adventistApi = inject(SrrAdventistService);
  private bibleApi = inject(BibleApiService);

  content = signal<ReavivadosContent>({
    date: new Date().toISOString().split('T')[0],
    verse: '',
    reference: '',
    reflection: '',
    title: 'Reavivados por su Palabra'
  });

  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit() {
    this.loadDailyContent();
    this.setupDailyRefresh();
  }

  private loadDailyContent() {
    this.isLoading.set(true);
    this.error.set(null);

    // Intentar primero con la API adventista, luego con Bible API
    this.adventistApi.getReavivadosToday().subscribe({
      next: (content: ReavivadosContent) => {
        this.content.set(content);
        this.isLoading.set(false);
      },
      error: () => {
        // Fallback a Bible API
        this.bibleApi.getDailyVerse().subscribe({
          next: (content: ReavivadosContent) => {
            this.content.set(content);
            this.isLoading.set(false);
          },
          error: (err: any) => {
            this.error.set('Error al cargar el contenido diario');
            this.isLoading.set(false);
          }
        });
      }
    });
  }

  private setupDailyRefresh() {
    // Verificar cada hora si cambió el día
    setInterval(() => {
      const currentDate = new Date().toISOString().split('T')[0];
      if (currentDate !== this.content().date) {
        this.loadDailyContent();
      }
    }, 60 * 60 * 1000); // Cada hora
  }

  refreshContent() {
    this.loadDailyContent();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  shareVerse() {
    const text = `"${this.content().verse}" - ${this.content().reference}\n\nReavivados por su Palabra`;

    if (navigator.share) {
      navigator.share({
        title: 'Reavivados por su Palabra',
        text: text,
        url: window.location.href
      });
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(text).then(() => {
        alert('Versículo copiado al portapapeles');
      });
    }
  }

  saveToFavorites() {
    const favorites = JSON.parse(localStorage.getItem('reavivados-favorites') || '[]');
    favorites.push(this.content());
    localStorage.setItem('reavivados-favorites', JSON.stringify(favorites));
    alert('Versículo guardado en favoritos');
  }
}

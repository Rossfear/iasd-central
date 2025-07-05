import { inject, Injectable } from '@angular/core';
import { ReavivadosContent } from './srr-adventist.service';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibleApiService {


  private http = inject(HttpClient);

  // APIs bíblicas disponibles
  private readonly BIBLE_APIS = {
    // Bible API (gratuita)
    bibleApi: 'https://bible-api.com',
    // ESV API (requiere key)
    esvApi: 'https://api.esv.org/v3/passage/text',
    // YouVersion API (no oficial)
    youVersion: 'https://www.bible.com/json/bible'
  };

  // Plan de lectura "Reavivados por su Palabra" - referencias bíblicas por día del año
  private readonly READING_PLAN = [
    'Genesis 1:1-31', 'Genesis 2:1-25', 'Genesis 3:1-24', // Enero
    'Psalm 23:1-6', 'John 3:16', 'Romans 8:28', // Ejemplos
    // ... agregar las 365 referencias del plan oficial
  ];

  getDailyVerse(): Observable<ReavivadosContent> {
    const dayOfYear = this.getDayOfYear(new Date());
    const reference = this.READING_PLAN[dayOfYear % this.READING_PLAN.length];

    return this.getVerseFromBibleApi(reference).pipe(
      map(verse => ({
        date: new Date().toISOString().split('T')[0],
        verse: verse.text,
        reference: verse.reference,
        reflection: this.getReflectionForVerse(reference),
        title: 'Reavivados por su Palabra'
      })),
      catchError(() => of(this.getDefaultContent()))
    );
  }

  private getVerseFromBibleApi(reference: string): Observable<any> {
    const encodedRef = encodeURIComponent(reference);
    return this.http.get(`${this.BIBLE_APIS.bibleApi}/${encodedRef}?translation=rvr1960`);
  }

  private getReflectionForVerse(reference: string): string {
    // Aquí podrías tener reflexiones predefinidas o usar AI para generar
    const reflections: { [key: string]: string } = {
      'Genesis 1:1-31': 'En el principio, Dios creó todo con perfección y amor.',
      'Psalm 23:1-6': 'El Señor es nuestro pastor, nada nos faltará.',
      // ... más reflexiones
    };

    return reflections[reference] || 'Reflexiona en la palabra de Dios para tu vida hoy.';
  }

  private getDayOfYear(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  private getDefaultContent(): ReavivadosContent {
    return {
      date: new Date().toISOString().split('T')[0],
      verse: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino.',
      reference: 'Salmos 119:105',
      reflection: 'La palabra de Dios nos guía en cada paso de nuestra vida.',
      title: 'Reavivados por su Palabra'
    };
  }
}

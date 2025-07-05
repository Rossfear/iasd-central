import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

export interface ReavivadosContent {
  date: string;
  verse: string;
  reference: string;
  reflection: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class SrrAdventistService {

  private http = inject(HttpClient);

  // URLs de APIs disponibles
  private readonly APIs = {
    // API oficial de la Iglesia Adventista (si está disponible)
    official: 'https://www.adventistas.org/api/reavivados',
    // API alternativa de Hope Channel
    hopeChannel: 'https://hopechannel.com/api/devotional',
    // Fallback con contenido local
    fallback: '/assets/reavivados-data.json'
  };

  getReavivadosToday(): Observable<ReavivadosContent> {
    const today = new Date().toISOString().split('T')[0];

    // Intentar con API oficial primero
    return this.http.get<any>(`${this.APIs.official}/${today}`).pipe(
      map(response => this.mapToReavivadosContent(response)),
      catchError(() => this.tryAlternativeApis(today))
    );
  }

  private tryAlternativeApis(date: string): Observable<ReavivadosContent> {
    // Intentar con Hope Channel
    return this.http.get<any>(`${this.APIs.hopeChannel}/${date}`).pipe(
      map(response => this.mapToReavivadosContent(response)),
      catchError(() => this.getFallbackContent(date))
    );
  }

  private getFallbackContent(date: string): Observable<ReavivadosContent> {
    // Contenido de respaldo local
    return this.http.get<ReavivadosContent[]>(this.APIs.fallback).pipe(
      map(data => {
        const dayOfYear = this.getDayOfYear(new Date(date));
        return data[dayOfYear % data.length];
      }),
      catchError(() => of(this.getDefaultContent()))
    );
  }

  private mapToReavivadosContent(response: any): ReavivadosContent {
    return {
      date: response.date || new Date().toISOString().split('T')[0],
      verse: response.verse || response.text || '',
      reference: response.reference || response.citation || '',
      reflection: response.reflection || response.devotional || '',
      title: response.title || 'Reavivados por su Palabra'
    };
  }

  private getDayOfYear(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  private getDefaultContent(): ReavivadosContent {
    return {
      date: new Date().toISOString().split('T')[0],
      verse: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.',
      reference: 'Jeremías 29:11',
      reflection: 'Dios tiene un plan perfecto para cada uno de nosotros.',
      title: 'Reavivados por su Palabra'
    };
  }

}

import { Injectable } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  private targetDate = new Date("2025-07-05T00:00:00").getTime()

  getTimeLeft(): Observable<{ days: number; hours: number; minutes: number; seconds: number }> {
    return interval(1000).pipe(
      map(() => {
        const now = new Date().getTime()
        const difference = this.targetDate - now

        if (difference > 0) {
          return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
          }
        } else {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }
      }),
    )
  }

}

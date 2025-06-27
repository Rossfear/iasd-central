import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownService } from '../../core/services/countdown.service';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownComponent implements OnInit, OnDestroy {

  timeLeft = signal<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  private subscription?: Subscription;

  countdownService = inject(CountdownService);

  ngOnInit(): void {
    this.subscription = this.countdownService.getTimeLeft().subscribe((timeLeft) => {
      this.timeLeft.set(timeLeft);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

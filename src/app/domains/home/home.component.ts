import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountdownComponent } from "../countdown/countdown.component";
import { HeroComponent } from "../hero/hero.component";
import { HistoryComponent } from "../history/history.component";
import { TestimonyComponent } from "../testimony/testimony.component";
import { ProgressComponent } from "../progress/progress.component";
import { ColaborationComponent } from "../colaboration/colaboration.component";
import { SocialNetworkComponent } from "../social-network/social-network.component";
import { NewsComponent } from "../news/news.component";
import { PastorGreetingComponent } from "../pastor-greeting/pastor-greeting.component";
import { DepartamentsComponent } from "../departaments/departaments.component";
import { TimelinePastorsComponent } from "../timeline-pastors/timeline-pastors.component";
import { ProgramComponent } from "../program/program.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountdownComponent, HeroComponent, HistoryComponent, TestimonyComponent, ProgressComponent, ColaborationComponent, SocialNetworkComponent, NewsComponent, PastorGreetingComponent, DepartamentsComponent, TimelinePastorsComponent, ProgramComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }

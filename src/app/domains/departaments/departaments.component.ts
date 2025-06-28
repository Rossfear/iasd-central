import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ChruchDataService } from '../../core/services/chruch-data.service';
import { Department } from '../../shared/interfaces/chruch.interfaces';

@Component({
  selector: 'app-departaments',
  standalone: true,
  imports: [],
  templateUrl: './departaments.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartamentsComponent implements OnInit {

  departments: Department[] = []

  churchDataService = inject(ChruchDataService)

  ngOnInit() {
    this.departments = this.churchDataService.getDepartments()
  }
}

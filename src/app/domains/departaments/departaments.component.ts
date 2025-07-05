import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
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

  departments = signal<Department[]>([]);
  currentIndices = signal<number[]>([]);
  interval: any;

  churchDataService = inject(ChruchDataService);

  initializeCurrentIndices() {
    // Si no hay departamentos, inicializamos con un array vacío
    const initialIndices = this.departments().length > 0
      ? this.departments().map(() => 0)
      : [];

    console.log('Inicializando índices:', initialIndices);
    this.currentIndices.set(initialIndices);
  }

  // Agregar un método para actualizar índices cuando los departamentos cambien
  updateCurrentIndices() {
    const newIndices = this.departments().map(() => 0);
    console.log('Actualizando índices:', newIndices);
    this.currentIndices.set(newIndices);
  }

  ngOnInit() {
    this.departments.set(this.churchDataService.getDepartments());
    this.initializeCurrentIndices();
    this.startAutoplay();
    console.log(this.departments());
  }

  getCurrentIndex(department: Department): number {
    const index = this.departments().indexOf(department);
    return this.currentIndices()[index];
  }

  setCurrentIndex(department: Department, index: number) {
    const currentIndex = this.departments().indexOf(department);
    const newIndices = [...this.currentIndices()];
    newIndices[currentIndex] = index;
    this.currentIndices.set(newIndices);
  }

  prevSlide(department: Department) {
    const currentIndex = this.departments().indexOf(department);
    const newIndex = (this.currentIndices()[currentIndex] - 1 + department.photos.length) % department.photos.length;
    this.setCurrentIndex(department, newIndex);
  }

  nextSlide(department: Department) {
    const currentIndex = this.departments().indexOf(department);
    const newIndex = (this.currentIndices()[currentIndex] + 1) % department.photos.length;
    this.setCurrentIndex(department, newIndex);
  }

  goToSlide(department: Department, index: number) {
    this.setCurrentIndex(department, index);
  }

  startAutoplay() {
    // Limpiar cualquier intervalo existente
    if (this.interval) {
      clearInterval(this.interval);
    }

    // Iniciar nuevo intervalo
    this.interval = setInterval(() => {
      // Solo iniciar autoplay si hay departamentos
      if (this.departments().length > 0) {
        this.departments().forEach(department => {
          if (department.photos.length > 1) { // Solo si hay más de una foto
            this.nextSlide(department);
          }
        });
      }
    }, 8000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }


}

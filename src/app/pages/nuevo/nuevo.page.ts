import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonCheckbox, IonTextarea, IonAlert } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { PerrosService, Perro } from '../../services/perros.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: 'nuevo.page.html',
  styleUrls: ['nuevo.page.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonCheckbox, IonTextarea],
})
export class NuevoPage implements OnInit {
  formulario!: FormGroup;
  perroRegistrado = false;

  constructor(
    private fb: FormBuilder,
    private perrosService: PerrosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      tipo: ['Perro', Validators.required],
      raza: ['', [Validators.required, Validators.minLength(2)]],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      tamano: ['', Validators.required],
      vacunada: [false],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      foto: ['', Validators.required],
      adoptado: [false],
    });
  }

  registrarPerro() {
    if (this.formulario.valid) {
      const nuevoPerro: Perro = {
        id: Math.max(...this.perrosService.getPerros().map(p => p.id), 0) + 1,
        ...this.formulario.value,
      };
      this.perrosService.agregarPerro(nuevoPerro);
      this.perroRegistrado = true;
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1500);
    }
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}

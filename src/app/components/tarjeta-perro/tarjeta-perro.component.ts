import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Perro } from '../../services/perros.service';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonBadge } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-perro',
  templateUrl: 'tarjeta-perro.component.html',
  styleUrls: ['tarjeta-perro.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonBadge],
})
export class TarjetaPerroComponent {
  @Input() perro!: Perro;

  constructor(private router: Router) {}

  irADetalle() {
    this.router.navigate(['/detalle', this.perro.id]);
  }
}

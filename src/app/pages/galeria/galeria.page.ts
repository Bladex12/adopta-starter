import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonRouterLink, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { PerrosService, Perro } from '../../services/perros.service';
import { TarjetaPerroComponent } from '../../components/tarjeta-perro/tarjeta-perro.component';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonRouterLink, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, TarjetaPerroComponent],
})
export class GaleriaPage implements OnInit {
  mascotas: Perro[] = [];

  constructor(private perrosService: PerrosService) {}

  ngOnInit() {
    this.mascotas = this.perrosService.getPerros();
  }
}

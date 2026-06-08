import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonRouterLink, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol} from '@ionic/angular/standalone';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
  standalone: true,
  imports: [RouterModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonRouterLink, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol],
})
export class GaleriaPage {
  mascotas = [];
}

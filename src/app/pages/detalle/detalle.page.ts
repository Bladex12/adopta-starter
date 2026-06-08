import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBadge, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { PerrosService, Perro } from '../../services/perros.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.page.html',
  styleUrls: ['detalle.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBadge, IonList, IonItem, IonLabel],
})
export class DetallePage implements OnInit {
  perro: Perro | undefined;

  constructor(
    private route: ActivatedRoute,
    private perrosService: PerrosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.perro = this.perrosService.getPerroById(id);
      if (!this.perro) {
        this.router.navigate(['/']);
      }
    });
  }

  volver() {
    this.router.navigate(['/']);
  }
}

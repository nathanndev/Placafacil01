import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showSplash: boolean = true;

  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    // Exibe a splash screen por 3 segundos antes de mostrar a home page
    setTimeout(() => {
      this.showSplash = false;
    }, 3000); // Alterar o tempo, se necessário
  }
}

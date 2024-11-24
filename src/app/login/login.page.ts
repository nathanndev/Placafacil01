import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FireserviceService } from 'src/app/fireservice.service'; // ajuste o caminho conforme sua estrutura

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private fireService: FireserviceService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  async login() {
    if (!this.email || !this.password) {
      this.presentToast('Por favor, preencha todos os campos.');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Fazendo login...'
    });
    await loading.present();

    try {
      await this.fireService.loginWithEmail({
        email: this.email,
        password: this.password
      });
      await loading.dismiss();
      this.router.navigate(['/home-tabs/tab2']);
    } catch (error: any) { // Tipagem explícita do erro
      await loading.dismiss();
      this.presentToast(error.message || 'Falha no login');
    }
  }

  signup() {
    this.router.navigate(['/signup']);
  }

  private async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
}


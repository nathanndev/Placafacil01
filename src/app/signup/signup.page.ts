import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FireserviceService } from 'src/app/fireservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  name: string = '';
  email: string = '';
  password: string = '';
  isSubmitting: boolean = false;

  constructor(
    private fireService: FireserviceService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  async signup() {
    if (!this.isFormValid()) {
      return;
    }

    this.isSubmitting = true;
    const loading = await this.loadingCtrl.create({
      message: 'Criando conta...'
    });
    await loading.present();

    try {
      const userCredential = await this.fireService.signup({
        email: this.email,
        password: this.password
      });

      await this.fireService.saveDetails({
        uid: userCredential.user.uid,
        name: this.name,
        email: this.email
      });

      await loading.dismiss();
      await this.presentToast('Sua conta foi criada com sucesso!');
      this.router.navigate(['/login']);
    } catch (error: any) {
      await loading.dismiss();
      this.presentToast(error.message || 'Falha ao criar a conta.');
    } finally {
      this.isSubmitting = false;
    }
  }

  private isFormValid(): boolean {
    if (!this.name || this.name.length < 3) {
      this.presentToast('O nome é obrigatório e deve ter pelo menos 3 caracteres');
      return false;
    }

    if (!this.email || !this.isValidEmail(this.email)) {
      this.presentToast('Insira um email válido');
      return false;
    }

    if (!this.password || this.password.length < 6) {
      this.presentToast('A senha deve ter pelo menos 6 caracteres');
      return false;
    }

    return true;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: message.includes('successfully') ? 'success' : 'danger'
    });
    await toast.present();
  }
  

  
}
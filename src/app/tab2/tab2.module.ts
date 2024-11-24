// src/app/tab2/tab2.module.ts
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { PlacaService } from '../placa.service'; // Importe o serviço



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page],
  providers: [PlacaService] // Adicione o serviço aos providers
})
export class Tab2PageModule {}
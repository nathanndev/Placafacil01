// src/app/tab2/tab2.page.ts
import { Component } from '@angular/core';
import { PlacaService } from '../placa.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  placa: string = '';
  historico: string[] = [''];
  dadosVeiculo: any = null;
  token: string = 'f596369a76ebf08e006bd5b7d6c8c2e6';

  constructor(private placaService: PlacaService) {}

  consultarPlaca() {
    if (!this.placa.trim()) {
      console.error('Placa não fornecida.');
      return;
    }

    this.placaService.consultarPlaca(this.placa, this.token).subscribe(
      (data) => {
        this.dadosVeiculo = data;
        // Adiciona a placa ao histórico somente se a consulta for bem sucedida
        this.historico.unshift(this.placa.toUpperCase());
        console.log('Dados do veículo:', this.dadosVeiculo);
        this.placa = ''; // Limpa o campo após consulta bem sucedida
      },
      (error) => {
        console.error('Erro ao consultar:', error);
        this.dadosVeiculo = null;
        // Você pode adicionar aqui uma mensagem de erro para o usuário
      }
    );
  }
}
import { Component } from '@angular/core';
import { PlacaService } from '../placa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  placa: string = ''; // Variável para a placa
  dadosVeiculo: any = null; // Inicializa com null
  token: string = 'f596369a76ebf08e006bd5b7d6c8c2e6'; // Seu token

  constructor(private placaService: PlacaService) {}

  consultar() {
    if (!this.placa) {
      console.error('Placa não fornecida.');
      return;
    }

    this.placaService.consultarPlaca(this.placa, this.token).subscribe(
      (data) => {
        this.dadosVeiculo = data; // Armazena os dados retornados
        console.log(this.dadosVeiculo); // Depura a resposta no console
      },
      (error) => {
        console.error('Erro ao consultar:', error); // Trata erros
        this.dadosVeiculo = null; // Reseta os dados de veículo em caso de erro
      }
    );
  }
}

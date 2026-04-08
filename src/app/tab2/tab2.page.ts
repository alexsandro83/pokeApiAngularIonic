import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  standalone: false,
})
export class Tab2Page {

  nome: string = '';
  pokemon: any;

  constructor(private http: HttpClient) {}

  buscar() {
    const url = `https://pokeapi.co/api/v2/pokemon/${this.nome.toLowerCase()}`;

    this.http.get(url).subscribe({
      next: (res) => this.pokemon = res,
      error: () => alert('Pokémon não encontrado')
    });
  }

}
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  standalone: false
})
export class Tab1Page {

  pokemons: any[] = [];

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.carregarPokemons();
  }

  carregarPokemons() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .subscribe((res: any) => {
        this.pokemons = res.results;
      });
  }

}
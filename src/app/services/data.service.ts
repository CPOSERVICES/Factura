import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getMemuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  // getMenuFac(){
  //   return this.http.get('/assets/data/menuOpts.json');
  // }

  
}

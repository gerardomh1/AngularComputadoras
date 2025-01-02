import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Computadoras } from '../Entidad/computadoras';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor(private http : HttpClient) { }


  url = 'http://localhost:8001/api/Computadoras/'; /*chacar la url a ver si si es */

  listarHotel(){
    return this.http.get<Computadoras[]>(this.url + "listar");

  }

  guardarComputadora(coputadora : Computadoras){
    return this.http.post<any>(this.url + "guardar",coputadora);
  }

  buscarComputadora(coputadora : Computadoras){
    return this.http.post<Computadoras>(this.url + "buscar",coputadora);
  }

  editarComputadora(coputadora : Computadoras){
    return this.http.put<any>(this.url+ "editar", coputadora);
  }

  eliminarComputadora(coputadora : Computadoras){
    return this.http.post<any>(this.url + "eliminar", coputadora);
  }
}
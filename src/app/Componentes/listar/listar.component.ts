import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServidorService } from '../../Servidor/servidor.service';
import { Computadoras } from '../../Entidad/computadoras';

@Component({
  selector: 'app-listar',
  imports: [],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {

  constructor(private router: Router, private service: ServidorService) { }


  computadora: Computadoras = new Computadoras();

  computadoras !: Computadoras[];
  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.listarHotel().subscribe(data =>{
      this.computadoras = data;
    })
  }
  
  editar(computadora : Computadoras){
    localStorage.setItem('idComputadora',computadora.idComputadora.toString());
    this.router.navigate(['editar']);
  }

  eliminar(computadora:Computadoras){
    localStorage.setItem('idComputadora',computadora.idComputadora.toString());
    this.router.navigate(['eliminar']);
  }

}

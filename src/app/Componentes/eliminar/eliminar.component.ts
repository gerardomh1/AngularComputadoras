import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServidorService } from '../../Servidor/servidor.service';
import { Computadoras } from '../../Entidad/computadoras';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar',
  imports: [FormsModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit {

  constructor (private router : Router, private service : ServidorService){}
  computadora :Computadoras = new Computadoras();

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    let id = localStorage.getItem('idComputadora');
    this.computadora.idComputadora = Number(id);

    this.service.buscarComputadora(this.computadora).subscribe(data => {
      this.computadora = data;
    })
  }

  eliminar(){
   this.service.eliminarComputadora(this.computadora).subscribe(() => {
      this.router.navigate(['listar']);
    });
  }

  cancelar(){
    this.router.navigate(['listar']);
  }

}

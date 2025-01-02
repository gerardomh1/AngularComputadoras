import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../Servidor/servidor.service';
import { Computadoras } from '../../Entidad/computadoras';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

  constructor (private router : Router, private service : ServidorService){}

  computadora : Computadoras = new Computadoras;

  ngOnInit(): void {
    this.buscar();
  }
  buscar() {
    let id = localStorage.getItem('idComputadora');
    this.computadora.idComputadora = Number(id);
    this.service.buscarComputadora(this.computadora).subscribe(data => {
      this.computadora = data;
    });
  }

  editar(){
      this.service.editarComputadora(this.computadora).subscribe(() => {
        this.router.navigate(['listar']);
      });
  }

  cancelar(){
    this.router.navigate(['listar']);
  }
}

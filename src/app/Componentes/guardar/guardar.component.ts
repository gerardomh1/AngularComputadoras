import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Computadoras } from '../../Entidad/computadoras';
import { Router } from '@angular/router';
import { ServidorService } from '../../Servidor/servidor.service';

@Component({
  selector: 'app-guardar',
  imports: [FormsModule],
  templateUrl: './guardar.component.html',
  styleUrl: './guardar.component.css'
})
export class GuardarComponent {
  constructor(private Router: Router, private service : ServidorService){}
  computadora : Computadoras = new Computadoras();



  guardar(){
    this.service.guardarComputadora(this.computadora).subscribe( () => {
        this.Router.navigate(['listar']);
    } );
  }
  
  cancelar(){
    this.Router.navigate(['listar']);
  }
  
}

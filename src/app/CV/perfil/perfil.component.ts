import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  Perfil: any;
  constructor( private miServices: PerfilService){

  }
  ngOnInit (): void {
    this.miServices.obtenerPerfil().subscribe(
      data=>{console.log(data);
      this.Perfil=data["perfil"]
      }
    )
  }
}



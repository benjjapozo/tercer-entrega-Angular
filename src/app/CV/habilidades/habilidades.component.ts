import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements  OnInit{
habilidades:any;
constructor(private miServices:HabilidadesService){
console.log("componente habilidades")
this.miServices.obtenerHabilidades().subscribe(
  {
    next: (data) => {
      this.habilidades=data["habilidades"];
      console.log(this.habilidades);
    },
    error: (error) => {
      alert("error al obtener habilidades");
      console.error(error);
    }
  }
)
}
ngOnInit(): void {
    
}
}
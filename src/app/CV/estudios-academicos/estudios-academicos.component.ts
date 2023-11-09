import { Component, OnInit } from '@angular/core';
import { EstudiosAcademicosService } from 'src/app/services/estudios-academicos.service';

@Component({
  selector: 'app-estudios-academicos',
  templateUrl: './estudios-academicos.component.html',
  styleUrls: ['./estudios-academicos.component.css']
})
export class EstudiosAcademicosComponent {
  estudiosacademicos: any;
  constructor(private EstudiosAcademicosService: EstudiosAcademicosService) {
    this.EstudiosAcademicosService.obtenerEstudiosAcademicos().subscribe(
      {
        next: (data) => {
          this.estudiosacademicos=data["datosAcademicos"];
          console.log (data);
        },
        error: (err) =>{
          alert("Se produjo un error, vuelve a intentar");
          console.error(err)
        }
      }
    )
  }
}




import { Component, OnInit } from '@angular/core';
import { EstudiosAcademicosService } from 'src/app/services/estudios-academicos.service';

@Component({
  selector: 'app-estudios-academicos',
  templateUrl: './estudios-academicos.component.html',
  styleUrls: ['./estudios-academicos.component.css']
})
export class EstudiosAcademicosComponent implements OnInit{
  estudiosacademicos: any;
  constructor (private miServices: EstudiosAcademicosService){

  }
  ngOninit(): void {
    this.miServices.obtenerEstudiosAcademicos().subscribe(
       (data) => {console.log(data);
          this.estudiosacademicos=data["Estudios Académicos"]
        },
    )
      }
    
  }




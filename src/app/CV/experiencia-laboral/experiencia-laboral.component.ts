import { Component, OnInit} from '@angular/core';
import { ExperienciaLaboralService } from 'src/app/services/experiencia-laboral.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit{
  Experiencialaboral: any;
 constructor(private ExperienciaLaboralService: ExperienciaLaboralService)  {
  this.ExperienciaLaboralService.obtenerExperienciaLaboral().subscribe(
    {
      next: (data) => {
        this.Experiencialaboral=data["ExperienciaLaboral"];
        console.log (this.Experiencialaboral);
      },
      error: (error) =>{
        alert("se obtuvo un error");
        console.error(error)
      }
    }
  )
 }
 ngOnInit(): void {
     
 }
   }

  



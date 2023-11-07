import { Component, OnInit} from '@angular/core';
import { ExperienciaLaboralService } from 'src/app/services/experiencia-laboral.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit{
  Experiencialaboral: any;
  constructor (private miServices:ExperienciaLaboralService){}
    ngOnInit(): void {
        this.miServices.obtenerExperienciaLaboral().subscribe(
          data=>{console.log(data);
          this.Experiencialaboral=data["Experiencia Laboral"]
        },
        )
    }
   }

  



import { Component, OnInit } from '@angular/core';
import { InfoPersonalService } from 'src/app/services/info-personal.service';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InfoPersonalComponent implements OnInit{
InfoPersonal: any;
constructor(private miServices:InfoPersonalService){
}

ngOnInit(): void {
    this.miServices.obtenerInfoPersonal().subscribe(
      data=>{console.log(data);
      this.InfoPersonal=data["InfoPersonal"]
      },
    )
}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {

  constructor(private http: HttpClient) { }
  obtenerExperienciaLaboral (): Observable <any>
{
  console.log("el servicio experiencia laboral fue creado");
  return this.http.get("./assets/data.json");
}
}

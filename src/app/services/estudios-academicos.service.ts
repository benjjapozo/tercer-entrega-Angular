import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiosAcademicosService {

  constructor(private http: HttpClient) { }
  obtenerEstudiosAcademicos(): Observable <any>
  {
    console.log("el servicio fue creado");
    return this.http.get("./assets/data.json")
  }
}

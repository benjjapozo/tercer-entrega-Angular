import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPersonalService {

  constructor(private http: HttpClient) { }

  obtenerInfoPersonal(): Observable <any> 
  {
    console.log("el servivio funciona");
    return this.http.get("./assets/datos.json")
  }
}

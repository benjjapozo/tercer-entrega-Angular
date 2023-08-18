import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InformacionPersonalComponent } from './CV/Info-personal/informacion-personal/informacion-personal.component';
import { PerfilComponent } from './CV/perfil/perfil.component';
import { ExperienciaLaboralComponent } from './CV/experiencia-laboral/experiencia-laboral.component';
import { EstudiosAcademicosComponent } from './CV/estudios-academicos/estudios-academicos.component';
import { ContactoComponent } from './footer/contacto/contacto.component';
import { HabilidadesComponent } from './CV/habilidades/habilidades.component';
import { ImagenComponent } from './img/imagen/imagen.component';


@NgModule({
  declarations: [
    AppComponent,
    InformacionPersonalComponent,
    PerfilComponent,
    ExperienciaLaboralComponent,
    EstudiosAcademicosComponent,
    ContactoComponent,
    HabilidadesComponent,
    ImagenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

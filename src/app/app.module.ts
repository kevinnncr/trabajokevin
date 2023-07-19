import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { HombrosComponent } from './hombros/hombros.component';
import { PechoComponent } from './pecho/pecho.component';
import { QBrazoComponent } from './q-brazo/q-brazo.component';
import { RManooComponent } from './r-manoo/r-manoo.component';
import { SAbodmenComponent } from './s-abodmen/s-abodmen.component';
import { TmuslooComponent } from './tmusloo/tmusloo.component';
import { XRodillaComponent } from './x-rodilla/x-rodilla.component';
import { XPIEComponent } from './x-pie/x-pie.component';
import { BocaComponent } from './boca/boca.component';
import { CerebroComponent } from './cabeza/cerebro/cerebro.component';
import { OjosComponent } from './cabeza/ojos/ojos.component';
import { DientesComponent } from './boca/dientes/dientes.component';
import { LenguaComponent } from './boca/lengua/lengua.component';
import { NerviosComponent } from './hombros/nervios/nervios.component';
import { HuesoComponent } from './hombros/hueso/hueso.component';
import { PezonComponent } from './pecho/pezon/pezon.component';
import { MusculoComponent } from './pecho/musculo/musculo.component';
import { VenasComponent } from './q-brazo/venas/venas.component';
import { SangreComponent } from './q-brazo/sangre/sangre.component';
import { DedosComponent } from './r-manoo/dedos/dedos.component';
import { NudillosComponent } from './r-manoo/nudillos/nudillos.component';
import { IntestinoComponent } from './s-abodmen/intestino/intestino.component';
import { OmbligoComponent } from './s-abodmen/ombligo/ombligo.component';
import { CuadricepsComponent } from './tmusloo/cuadriceps/cuadriceps.component';
import { MusloInternoComponent } from './tmusloo/muslo.interno/muslo.interno.component';
import { DeditosComponent } from './x-pie/deditos/deditos.component';
import { TalonComponent } from './x-pie/talon/talon.component';
import { HueesoComponent } from './x-rodilla/hueeso/hueeso.component';
import { MedulaComponent } from './x-rodilla/medula/medula.component';

@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    HombrosComponent,
    PechoComponent,
    QBrazoComponent,
    RManooComponent,
    SAbodmenComponent,
    TmuslooComponent,
    XRodillaComponent,
    XPIEComponent,
    BocaComponent,
    CerebroComponent,
    OjosComponent,
    DientesComponent,
    LenguaComponent,
    NerviosComponent,
    HuesoComponent,
    PezonComponent,
    MusculoComponent,
    VenasComponent,
    SangreComponent,
    DedosComponent,
    NudillosComponent,
    IntestinoComponent,
    OmbligoComponent,
    CuadricepsComponent,
    MusloInternoComponent,
    DeditosComponent,
    TalonComponent,
    HueesoComponent,
    MedulaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

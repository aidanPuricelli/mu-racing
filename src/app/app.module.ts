import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeroImageComponent } from './home/hero-image/hero-image.component';
import { ContentComponent } from './home/content/content.component';
import { FooterComponent } from './footer/footer.component';
import { EvHistoryComponent } from './ev-history/ev-history.component';
import { IcHistoryComponent } from './ic-history/ic-history.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { AerodynamicsComponent } from './aerodynamics/aerodynamics.component';
import { BrakesAndControlsComponent } from './brakes-and-controls/brakes-and-controls.component';
import { VehicleDynamicsComponent } from './vehicle-dynamics/vehicle-dynamics.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { PowertrainComponent } from './powertrain/powertrain.component';
import { HighVoltageComponent } from './high-voltage/high-voltage.component';
import { EvCompetitionComponent } from './ev-competition/ev-competition.component';
import { IcCompetitionComponent } from './ic-competition/ic-competition.component';
import { EvSponsorsComponent } from './ev-sponsors/ev-sponsors.component';
import { IcSponsorsComponent } from './ic-sponsors/ic-sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroImageComponent,
    ContentComponent,
    FooterComponent,
    EvHistoryComponent,
    IcHistoryComponent,
    MeetTheTeamComponent,
    AerodynamicsComponent,
    BrakesAndControlsComponent,
    VehicleDynamicsComponent,
    ElectronicsComponent,
    PowertrainComponent,
    HighVoltageComponent,
    EvCompetitionComponent,
    IcCompetitionComponent,
    EvSponsorsComponent,
    IcSponsorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

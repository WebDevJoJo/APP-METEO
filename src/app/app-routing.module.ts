import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from 'src/components/home/home.component';
import { weatherComponent } from 'src/components/weather/weather.component';

const routes: Routes = [
  { path: 'home', component: homeComponent },
  { path: 'meteo', component: weatherComponent },
  {
    path: 'meteo/:lat/:lng',
    component: weatherComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: homeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HalamanUtamaComponent } from './halaman-utama/halaman-utama.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TournamentComponent } from './tournament/tournament.component';

const routes: Routes = [
  {path:'profile', component:ProfileComponent},
  {path:'tournament', component:TournamentComponent},
  {path:'leaderboard', component:LeaderboardComponent},
  {path:'home', component:HomeComponent},
  {path:'halaman-utama', component:HalamanUtamaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

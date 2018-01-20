import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RankingComponent} from './ranking/ranking.component';


const appRoutes: Routes = [
  { path: '', component: RankingComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: RankingComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

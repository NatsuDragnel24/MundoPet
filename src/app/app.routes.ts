import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home/home.component';
import {AuthComponent} from '../auth/auth.component';
import {AdminPanelComponent} from '../admin-panel/admin-panel.component';
import { RegisterComponent } from '../register/register.component';

//import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // Redirección al Home
  {path: 'home', component: HomeComponent},// Ruta para la página principal
  {path: 'login', component: AuthComponent},
  {path: 'admin', component: AdminPanelComponent},
  {path: 'register', component:RegisterComponent},
  {path:'admin-panel',component: AdminPanelComponent}

  //,{ path: 'contact', component: ContactComponent }    // Ruta para la página de contacto
];

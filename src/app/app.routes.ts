import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home/home.component';
import {AuthComponent} from '../auth/auth.component';
<<<<<<< HEAD
import {AdminPanelComponent} from './components/admin-panel/admin-panel.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ServiceComponent} from './pages/service/service.component';
import {ProductComponent} from './pages/product/product.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // Redirección al Home
  {path: 'home', component: HomeComponent}, // Ruta para la página principal
  {path: 'login', component: AuthComponent}, // Ruta para la página de inicio de sesión
  {path: 'admin', component: AdminPanelComponent}, // Ruta para el panel de administración
  {path: 'contact', component: ContactComponent}, // Ruta para la página de contacto
  {path: 'service', component: ServiceComponent}, // Ruta para la página de servicio
  {path: 'product', component: ProductComponent}, // Ruta para la página de producto
=======
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
>>>>>>> 4fddc09ed7f2fc1b3bb364dcbceb81c507250b89

  
];

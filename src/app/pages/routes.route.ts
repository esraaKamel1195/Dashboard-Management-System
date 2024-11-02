import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegistersComponent } from './registers/registers.component';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { CateringComponent } from './catering/catering.component';
import { ClientCateringComponent } from './client-catering/client-catering.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomRegistersComponent } from './room-registers/room-registers.component';
import { PlansComponent } from './plans/plans.component';
import { FacultiesComponent } from './faculties/faculties.component';

export const PagesRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'registers', component: RegistersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'client-catering', component: ClientCateringComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'room-reserve', component: RoomRegistersComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'faculties', component: FacultiesComponent },
  // { path: '', component: }
];

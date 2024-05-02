import { Routes } from '@angular/router';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { HomeComponent } from './components/home/home.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClienteComponent } from './components/cliente/cliente.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "tarefa", component: TarefasComponent},
    {path: 'client/:id', component: ClientDetailComponent},
    {path: 'cliente', component: ClienteComponent}
];

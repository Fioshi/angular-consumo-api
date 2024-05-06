import { Routes } from '@angular/router';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { HomeComponent } from './components/home/home.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "tarefa", component: TarefasComponent},
    {path: 'cliente/:id', component: ClientDetailComponent},
    {path: 'cliente', component: ClienteComponent},
    {path: 'excluir/:id', component: ConfirmationComponent}
];

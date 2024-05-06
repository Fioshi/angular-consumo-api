import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
}

import { Component, Input } from '@angular/core';
import { ClienteComponent } from '../cliente/cliente.component';
import { Cliente } from '../../interfaces/Cliente';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [ClienteComponent],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {


  cliente?:Cliente;

  
  constructor(private service: ClienteService, private route: ActivatedRoute, private router: Router){}


  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.service
      .getById((id!))
      .subscribe((client) => (this.cliente = client));
  }

  excluir() {
    this.service.remover((this.cliente?.id!)).subscribe(() =>{
      this.router.navigate(['cliente'])
    })
    
    }

}

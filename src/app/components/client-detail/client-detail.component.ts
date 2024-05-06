import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/Cliente';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {

  private cliente?: Cliente;
  clientForm: FormGroup = new FormGroup({})

  constructor(private route: ActivatedRoute, private clientService: ClienteService, private formbuilder: FormBuilder) {
    this.getClientById();
  }

  id?: string;

  ngOnInit():void {
    this.getClientById();
  }

  getClientById() {
    //if ternario
    this.id = this.route.snapshot.paramMap.get("id") ?? ''
    this.clientService.getById(this.id).subscribe((clienteResponse) => this.cliente = clienteResponse)

    this.clientForm = this.formbuilder.group({
      nome: [this.cliente?.nome],
      telefone: [this.cliente?.telefone],
      id: [this.cliente?.id]
    })
  }

  update(): void {
    if (this.clientForm.valid) {
      const clienteNovo: Cliente = {
        nome: this.clientForm.value.nome,
        telefone: this.clientForm.value.telefone,
        id: this.clientForm.value.id
      }
      this.clientService.atualizar(clienteNovo).subscribe()
      this.cliente = clienteNovo;
    }
  }
}

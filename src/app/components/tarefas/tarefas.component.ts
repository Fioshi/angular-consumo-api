import { Component } from '@angular/core';
import { Tarefa } from '../../interfaces/Tarefa';
import { TarefaService } from '../../services/tarefa.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {

  static id: number = 1;

  tarefas: Tarefa[] = []
  formGroup: FormGroup = new FormGroup({})

  constructor(private tarefaService: TarefaService, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['',Validators.required]
    })
  }

  listar(): void {
    this.tarefas = this.tarefaService.listar();
  }

  ngOnInit(): void {
    this.listar();
  }

  adicionar() {
    if (this.formGroup.valid) {
      const clienteNovo: Tarefa = {
        id:this.generateRandomString(6),
        titulo: this.formGroup.value.titulo,
        descricao: this.formGroup.value.descricao,
      }
      alert("Adicionado com sucesso")
      this.tarefaService.adicionar(clienteNovo)
      this.formGroup.reset()
    }
  }

  remover(id: string){
    this.tarefaService.remover(id);
    alert("Removido com sucesso")
    
  }

  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  } 



}

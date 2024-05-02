import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  tarefas: Tarefa[] = [
    {id: "as" ,titulo: "Ola", descricao:"Acontecendo"},
    {id: "sa" ,titulo: "Tudo certo", descricao:"Pendente"}];

  listar():Tarefa[]{
    return this.tarefas;
  }
  
  remover(id:string){
    const tarefa = this.tarefas.find(c => c.id == id);

    if(tarefa){
       const index = this.tarefas.indexOf(tarefa);
       this.tarefas.splice(index,1);
    }
  }

  adicionar(tarefa:Tarefa){
    this.tarefas.push(tarefa);
  }
}

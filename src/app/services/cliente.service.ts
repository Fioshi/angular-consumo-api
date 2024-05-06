import { Injectable } from '@angular/core';
import {Cliente} from '../interfaces/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  private clientUrl = "http://localhost:3000/clientes";
  constructor(private http: HttpClient) { }

  //Esta lista virá da API
  clientes:Cliente[] = [];

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.clientUrl) as Observable<Cliente[]>
  }

  getById(id: string){
    return this.http.get(`${this.clientUrl}/${id}`) as Observable<Cliente>
  }

  remover(id:string){
    // const cliente = this.clientes.find(c => c.id == id);

    // if(cliente){
    //    const index = this.clientes.indexOf(cliente);
    //    this.clientes.splice(index,1);
    // }

    return this.http.delete(`${this.clientUrl}/${id}`)

  }

  httpHeader = {
    headers:{
      "content-Type":"application/json"
    }
  };

  atualizar(cliente: Cliente){
    return this.http.put(`${this.clientUrl}/${cliente.id}`,cliente, this.httpHeader);
  }

  adicionar(cliente:Cliente){
    /*
    *  Define o conteudo que sera enviado no POST
    */
    return this.http.post(this.clientUrl, cliente, this.httpHeader)
  } 
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pessoa } from '../model/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private httpclient: HttpClient) {

   } 

   private pessoaPost: any;

   postPessoa(pessoa: Pessoa){

    var pessoaRecebePost = this.httpclient.post('https://jsonplaceholder.typicode.com/todos/1', pessoa)
    pessoaRecebePost.subscribe(value =>{
      this.pessoaPost = value
    })
    return this.pessoaPost;
   }

   
}

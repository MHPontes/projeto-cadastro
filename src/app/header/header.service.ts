import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pessoa } from '../model/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private httpclient: HttpClient) {

   } 
   postPessoa(pessoa: Pessoa){
    return this.httpclient.post('http://localhost:8080/pessoas', pessoa)

   }

   
}

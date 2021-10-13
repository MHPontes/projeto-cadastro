import { Component, Input, OnInit } from '@angular/core';
import { Endereco } from '../model/Endereco';
import { Pessoa } from '../model/Pessoa';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  pessoa = new Pessoa();

  ngOnInit(): void {}

  onClickPostPessoa(pessoaFormulario: any) {
    this.valorParaPessoa(pessoaFormulario);
    console.log('Quero ver se pegou o valor de nome', pessoaFormulario.value);
    return this.headerService.postPessoa(this.pessoa);
  }

  valorParaPessoa(pessoaFormulario: any) {
    var endereco = new Endereco();

    if (pessoaFormulario) {
      this.pessoa.nome = pessoaFormulario.value.nome;
      this.pessoa.ativo = pessoaFormulario.value.ativo;
      endereco.logradouro = pessoaFormulario?.value.logradouro;
      endereco.numero = pessoaFormulario.value.numero;
      endereco.complemento = pessoaFormulario.value.complemento;
      endereco.bairro = pessoaFormulario.value.bairro;
      endereco.cep = pessoaFormulario.value.cep;
      endereco.cidade = pessoaFormulario.value.cidade;
      endereco.estado = pessoaFormulario.value.estado;
      
    }
    this.pessoa.endereco = endereco;
  }
}

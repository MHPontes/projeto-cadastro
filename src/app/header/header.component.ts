import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/Pessoa';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  private pessoa = new Pessoa();

  ngOnInit(): void {
  }

  onClickPostPessoa(pessoa: Pessoa){
    return this.headerService.postPessoa(pessoa);

  }


}

import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-projeto',
  templateUrl: 'projeto.page.html',
  styleUrls: ['projeto.page.scss'],
})
export class ProjetoPage {

  constructor(
  ) {
    this.getFuncionarios();
   } 

  funcionarios: any;
  getFuncionarios(){
    fetch('http://localhost/API/funcionarios/listar.php')
    .then(response => response.json())
    .then(response => {
      this.funcionarios = response['funcionarios'];
    })
    .catch(erro => {
      console.log(erro);
    })
  }
  delFuncionario(){}
}

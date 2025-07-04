import { Component } from '@angular/core';
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-certificado-form',
  standalone: true,
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  nome: string = '';
  atividade: string ='';
  atividades: string[] = [];

  campoValido(control: NgModel){
    return control.invalid && control.touched
  }

  formValido(){
    return this.atividades.length >  0 && this.nome.length > 0;

  }
  
  adicionarAtividade(){
    this.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number){
    this.atividades.splice(index, 1);
  }

}
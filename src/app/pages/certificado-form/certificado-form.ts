import { Component } from '@angular/core';
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificado-form',
  standalone: true,
  imports: [PrimaryButton, SecondaryButton, FormsModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  nome: string = '';
  atividade: string ='';
  atividades: string[] = [];
}
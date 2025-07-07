import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../services/certificado.service';

@Component({
  selector: 'app-certificado',
  standalone: true,
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado implements OnInit{
  constructor(private certificadoService: CertificadoService){
    
  }

  ngOnInit(): void {
    console.log(this.certificadoService.getCertificados());
  }
}
/*-00:37*/
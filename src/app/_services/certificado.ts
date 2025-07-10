import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Certificado {
  certificados: Certificado[] = [];
  constructor() { }

  adicionarCertificado(certificado: Certificado){
    this.certificados.push(certificado);
  }

}
